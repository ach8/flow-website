import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { colors } from '../../utils/colors';

const ScrollProgressLine: React.FC = () => {
    const { scrollYProgress } = useScroll();

    // Smooth the scroll progress to avoid jittering
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Dynamic glow based on scroll depth
    const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.8, 1]);

    return (
        <>
            {/* Background track */}
            <div className="fixed top-0 left-4 md:left-8 bottom-0 w-[2px] bg-white/5 z-0" />

            {/* Animated glowing line */}
            <motion.div
                className="fixed top-0 left-4 md:left-8 bottom-0 w-[2px] z-[100] origin-top"
                style={{
                    scaleY: smoothProgress,
                    background: `linear-gradient(to bottom, ${colors.neon.blue} 0%, ${colors.neon.green} 100%)`,
                    boxShadow: `0 0 20px ${colors.neon.blue}, 0 0 10px ${colors.neon.green}`,
                    opacity: glowOpacity
                }}
            />

            {/* Moving "Data Packet" Point at the bottom of the line */}
            <motion.div
                className="fixed left-[14px] md:left-[30px] w-1.5 h-6 rounded-full bg-white z-[110] pointer-events-none"
                style={{
                    top: "0%",
                    y: useTransform(smoothProgress, [0, 1], ["0vh", "100vh"]),
                    boxShadow: `0 0 15px 4px ${colors.neon.blue}`,
                    marginTop: "-12px"
                }}
            />
        </>
    );
};

export default ScrollProgressLine;
