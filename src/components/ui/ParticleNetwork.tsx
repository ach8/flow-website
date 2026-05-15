import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

const ParticleNetwork: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const maxParticles = 60; // Adjust for density
        const maxDistance = 150; // Distance for connection lines

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < maxParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5, // Slow movement
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1, // 1 to 3px radius
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Parse neon blue to RGB for rgba usage
            // colors.neon.blue is #00f0ff. Let's use custom rgb: 0, 240, 255
            const colorRgb = '0, 240, 255';

            // Update and draw particles
            particles.forEach((p, index) => {
                // Move
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${colorRgb}, 0.5)`;
                ctx.fill();

                // Connect to other particles
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        const opacity = 1 - dist / maxDistance;
                        ctx.strokeStyle = `rgba(${colorRgb}, ${opacity * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-60"
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default ParticleNetwork;
