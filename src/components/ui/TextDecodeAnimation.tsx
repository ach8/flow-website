import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Props {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
}

const chars = '!<>-_\\\\/[]{}—=+*^?#________';

const TextDecodeAnimation: React.FC<Props> = ({ text, className = '', delay = 0, duration = 1000 }) => {
    const [displayText, setDisplayText] = useState('');
    const [isDecoding, setIsDecoding] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (shouldReduceMotion) {
            setDisplayText(text);
            return;
        }

        const timeout = setTimeout(() => {
            setIsDecoding(true);
            let frame = 0;
            const length = text.length;
            const interval = duration / 60; // 60fps roughly
            const totalFrames = duration / interval;

            const animate = () => {
                frame++;
                const progress = frame / totalFrames;

                let currentStr = '';
                for (let i = 0; i < length; i++) {
                    if (progress > i / length) {
                        currentStr += text[i];
                    } else {
                        currentStr += chars[Math.floor(Math.random() * chars.length)];
                    }
                }

                setDisplayText(currentStr);

                if (frame < totalFrames) {
                    requestAnimationFrame(animate);
                } else {
                    setDisplayText(text);
                    setIsDecoding(false);
                }
            };

            requestAnimationFrame(animate);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [text, delay, duration, shouldReduceMotion]);

    if (shouldReduceMotion) {
        return <span className={className}>{text}</span>;
    }

    return (
        <motion.span
            className={`inline-block whitespace-pre-wrap ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay }}
        >
            {displayText}
        </motion.span>
    );
};

export default TextDecodeAnimation;
