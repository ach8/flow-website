import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Only apply on desktop
        if (window.innerWidth < 768) return;

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over interactive elements
            if (
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer') ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        // Hide default cursor on body
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            document.body.style.cursor = 'auto';
        };
    }, []);

    // Hide on mobile
    if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            scale: 1,
            opacity: 1,
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            scale: 1.5,
            opacity: 0.5,
            backgroundColor: "rgba(59, 130, 246, 0.4)",
            mixBlendMode: "screen" as any,
        },
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-5 h-5 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
            />
            {/* Small trailing dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10000]"
                animate={{
                    x: mousePosition.x - 3,
                    y: mousePosition.y - 3,
                }}
                transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;
