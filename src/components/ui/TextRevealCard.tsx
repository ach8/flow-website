import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export const TextRevealCard = ({
    text,
    revealText,
    children,
    className,
}: {
    text: string;
    revealText: string;
    children?: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                'group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-8',
                className
            )}
        >
            <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-2">{text}</h2>
                <div className="h-20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center transition-all duration-500 group-hover:-translate-y-full opacity-100 group-hover:opacity-0">
                        <span className="text-gray-400 text-lg">Hover to reveal...</span>
                    </div>
                    <div className="absolute inset-0 flex items-center translate-y-full transition-all duration-500 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        <span className="text-emerald-400 font-semibold text-lg">{revealText}</span>
                    </div>
                </div>
                {children}
            </div>

            <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
};
