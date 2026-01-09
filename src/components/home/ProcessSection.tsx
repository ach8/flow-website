import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Clipboard, Zap, BarChart3, Package } from 'lucide-react';
import { colors } from '../../utils/colors';

const ProcessSection: React.FC = () => {
  const { t } = useTranslation();

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
      color: colors.neon.purple,
    },
    {
      number: 4,
      icon: BarChart3,
      key: 'support',
      color: colors.neon.pink,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
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

          {/* Central Connecting Line (Desktop) - Circuit Style */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 md:-translate-x-1/2 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0"
              animate={{ top: ['-50%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
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
                  <div className="flex-1 w-full pl-20 md:pl-0">
                    <div className="bg-gray-950/80 border border-white/5 p-8 rounded-2xl backdrop-blur-xl hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 relative group overflow-hidden">

                      {/* Artistic Background Number */}
                      <span className="absolute -right-4 -top-8 text-9xl font-black opacity-[0.03] select-none scale-150 transition-transform duration-500 group-hover:scale-125 pointer-events-none" style={{ color: step.color }}>
                        {step.number}
                      </span>

                      {/* Top Highlight Gradient */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/5" style={{ color: step.color }}>
                            <Icon size={20} />
                          </div>
                          <h3 className="text-2xl font-bold text-white tracking-tight">
                            {t(`process.${step.key}.title`)}
                          </h3>
                        </div>

                        <p className="text-gray-400 leading-relaxed mb-8 font-light text-lg">
                          {t(`process.${step.key}.description`)}
                        </p>

                        {/* Deliverables - Tech Chips Style */}
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {(t(`process.${step.key}.deliverables`, { returnObjects: true }) as string[]).map((item, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 rounded-md text-xs font-medium border transition-colors duration-300"
                                style={{
                                  borderColor: `${step.color}20`,
                                  background: `${step.color}05`,
                                  color: 'rgba(255,255,255,0.7)'
                                }}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Central Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-gray-950 border-2 border-gray-700 relative group-hover:border-white transition-colors">
                      <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: step.color }} />
                    </div>
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
