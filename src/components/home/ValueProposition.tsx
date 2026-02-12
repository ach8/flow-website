import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, ArrowRight, Activity, Cpu, Network } from 'lucide-react';
import { colors } from '../../utils/colors';
import NeonButton from '../ui/NeonButton';

const ValueProposition: React.FC = () => {
  const { t } = useTranslation();

  const handleConsultClick = () => {
    window.open('https://calendly.com/achraf-farhat98/consultation', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Ambience removed to unify */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">
              {t('valueProposition.title')}
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('valueProposition.subtitle')}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)] mb-16">

          {/* Main Card: ROI (Spans 2 cols, 2 rows on Desktop) -> Actually mostly vertical split or wide? */}
          {/* Let's do Left Big Column (2 rows height), Right Column (2 stacked cards) */}

          {/* Card 1: ROI (Left, Tall) */}
          <BentoCard
            className="lg:col-span-2 lg:row-span-2 min-h-[400px]"
            delay={0.1}
          >
            <div className="relative h-full flex flex-col justify-between">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <TrendingUp size={24} />
                  </div>
                  <span className="text-blue-400 font-mono text-sm tracking-wider uppercase">Résultats</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{t('valueProposition.roi.title')}</h3>
                <p className="text-gray-400 text-lg max-w-md">{t('valueProposition.roi.description')}</p>
              </div>

              {/* Animated Graph Visual */}
              <div className="absolute right-0 bottom-0 top-1/2 w-full lg:w-2/3 opacity-20 lg:opacity-30 pointer-events-none">
                <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                  <path
                    d="M0 80 Q 40 80, 50 60 T 100 40 T 150 20 T 200 5"
                    fill="none"
                    stroke="url(#gradient-line)"
                    strokeWidth="4"
                  />
                  <defs>
                    <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor={colors.neon.blue} stopOpacity="0" />
                      <stop offset="100%" stopColor={colors.neon.green} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="mt-8">
                <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 tracking-tighter">
                  {t('valueProposition.roi.metric')}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Speed (Right Top) */}
          <BentoCard
            className="lg:col-span-1 min-h-[250px]"
            delay={0.2}
          >
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Zap size={20} />
                </div>
                <Activity className="text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{t('valueProposition.speed.title')}</h3>
              <div className="text-3xl font-bold text-white mb-2">{t('valueProposition.speed.metric')}</div>
              <p className="text-gray-400 text-sm mt-auto">{t('valueProposition.speed.description')}</p>
            </div>
          </BentoCard>

          {/* Card 3: Custom (Right Bottom) */}
          <BentoCard
            className="lg:col-span-1 min-h-[250px]"
            delay={0.3}
          >
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                  <Network size={20} />
                </div>
                <Cpu className="text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{t('valueProposition.custom.title')}</h3>
              <div className="text-3xl font-bold text-white mb-2">{t('valueProposition.custom.metric')}</div>
              <p className="text-gray-400 text-sm mt-auto">{t('valueProposition.custom.description')}</p>
            </div>
          </BentoCard>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <NeonButton
            color="blue"
            onClick={handleConsultClick}
            className="inline-flex items-center gap-2 group"
          >
            {t('cta.consult')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NeonButton>
        </motion.div>
      </div>
    </section>
  );
};

// Reusable Bento Card with Spotlight Effect
const BentoCard: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative rounded-3xl border border-white/10 bg-gray-900/40 p-8 overflow-hidden backdrop-blur-md group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      {/* Border Gradient on Hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.1), transparent 40%)`,
        }}
      />

      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default ValueProposition;