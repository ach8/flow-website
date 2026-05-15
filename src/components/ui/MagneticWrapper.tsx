import React, { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagneticWrapperProps {
    children: ReactNode;
    className?: string;
    strength?: number;
}

const MagneticWrapper: React.FC<MagneticWrapperProps> = ({ children, className = '', strength = 30 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * (strength / 100), y: middleY * (strength / 100) });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            className={`inline-block ${className}`}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

export default MagneticWrapper;
