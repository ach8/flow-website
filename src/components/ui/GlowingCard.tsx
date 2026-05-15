import { ReactNode, useRef } from 'react';
import { cn } from '../../lib/utils';

interface GlowingCardProps {
    children: ReactNode;
    className?: string;
}

export const GlowingCard = ({ children, className }: GlowingCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty('--mouse-x', `${x}px`);
        divRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={cn(
                'group relative overflow-hidden rounded-xl border border-white/10 bg-gray-900',
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.1), transparent 40%)`,
                }}
            />
            <div className="relative z-20 h-full">{children}</div>
        </div>
    );
};
