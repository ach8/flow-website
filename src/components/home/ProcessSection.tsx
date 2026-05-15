import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Clipboard, Zap, BarChart3 } from 'lucide-react';
import { colors } from '../../utils/colors';

const ProcessSection: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for the luminous path
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Height of the energy line filling up
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      number: 1,
      icon: CheckCircle,
      key: 'audit',
      color: colors.neon.blue,
    },
    {
      number: 2,
      icon: Clipboard,
      key: 'plan',
      color: colors.neon.green,
    },
    {
      number: 3,
      icon: Zap,
      key: 'ai',
      color: colors.neon.blue,
    },
    {
      number: 4,
      icon: BarChart3,
      key: 'support',
      color: colors.neon.green,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t('process.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        {/* Vertical Roadmap Container */}
        <div className="relative max-w-5xl mx-auto">

          {/* Central Connecting Line (Track) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-900 md:-translate-x-1/2 rounded-full overflow-hidden shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
            {/* Luminous Fill changing color based on progress */}
            <motion.div
              className="absolute top-0 left-0 right-0 w-full rounded-full"
              style={{
                height: lineHeight,
                background: `linear-gradient(to bottom, ${colors.neon.blue}, ${colors.neon.green}, ${colors.neon.blue}, ${colors.neon.green})`,
                boxShadow: `0 0 20px ${colors.neon.blue}, 0 0 40px ${colors.neon.green}`
              }}
            />
            {/* Energy Particle (The glowing dot falling) */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white z-20"
              style={{
                top: lineHeight,
                boxShadow: "0 0 20px 10px rgba(255,255,255,0.8), 0 0 40px 20px rgba(0, 240, 255, 0.4)",
                transform: "translate(-50%, -50%)" // keep particle centered exactly on the line tip
              }}
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >

                  {/* Card Side */}
                  <div className="flex-1 w-full pl-20 md:pl-0 relative">
                    {/* Connecting line to the card */}
                    <div className={`absolute top-1/2 -translate-y-1/2 h-px bg-gray-800 hidden md:block w-12 ${isEven ? 'left-8' : 'right-8'}`} />

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="group relative bg-gray-900/40 border border-gray-800/50 backdrop-blur-xl rounded-2xl p-8 hover:bg-gray-900/80 transition-all duration-500"
                      style={{
                        boxShadow: `0 0 0 0 ${step.color}00` // For hover animation
                      }}
                    >
                      {/* Hover Glow Effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none"
                        style={{ background: `radial-gradient(circle at center, ${step.color}, transparent 70%)` }}
                      />

                      {/* Artistic Background Number */}
                      <span className="absolute -right-4 -top-6 text-8xl md:text-9xl font-black opacity-[0.03] select-none scale-150 transition-transform duration-500 group-hover:scale-110 pointer-events-none" style={{ color: step.color }}>
                        {step.number}
                      </span>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-950 border border-gray-800 transform group-hover:-translate-y-1 transition-transform duration-300" style={{ color: step.color, boxShadow: `0 0 20px ${step.color}20` }}>
                            <Icon size={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-transparent bg-clip-text transition-colors duration-300" style={{ backgroundImage: `linear-gradient(to right, #fff, ${step.color})` }}>
                            {t(`process.${step.key}.title`)}
                          </h3>
                        </div>

                        <p className="text-gray-400 mb-6 text-lg font-light leading-relaxed">
                          {t(`process.${step.key}.description`)}
                        </p>

                        {/* Deliverables - Tech Chips Style */}
                        <div className="space-y-4 pt-4 border-t border-gray-800/50">
                          <div className="flex flex-wrap gap-2">
                            {(t(`process.${step.key}.deliverables`, { returnObjects: true }) as string[]).map((item, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-800 bg-black/20 text-gray-400 transition-colors duration-300 group-hover:border-opacity-30 group-hover:text-gray-200"
                                style={{
                                  borderLeftWidth: '2px',
                                  borderLeftColor: step.color,
                                }}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Central Node */}
                  <div className="absolute left-[2.1rem] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gray-950 border-4 items-center justify-center flex transition-colors duration-500"
                      style={{ borderColor: step.color }}
                      whileHover={{ scale: 1.2, boxShadow: `0 0 20px ${step.color}` }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
                    </motion.div>
                  </div>

                  {/* Empty Spacer Side */}
                  <div className="flex-1 hidden md:block" />

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
