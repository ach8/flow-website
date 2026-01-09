import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NeonButton from '../ui/NeonButton';
import { colors } from '../../utils/colors';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();

  const handleConsultClick = () => {
    window.open('https://calendly.com/achraf-farhat98/consultation', '_blank');
  };

  const handleLearnMoreClick = () => {
    navigate('/services', { state: { fromHero: true } });
  };

  const titleWords = t('hero.title').split(' ');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      {/* Dynamic Background - z-0 to sit behind content but with blend mode */}
      {/* Dynamic Background - Removed local background to match global style */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-gray-950 z-0" /> */}

      {/* Animated Particles/Glow - Increased Opacity, Size & Blur for visibility */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/40 rounded-full blur-[120px] mix-blend-screen z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/40 rounded-full blur-[120px] mix-blend-screen z-0"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Staggered Title Reveal */}
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight flex flex-wrap justify-center gap-x-4 gap-y-2">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="inline-block"
              style={{
                background: i > titleWords.length / 2 ? `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})` : undefined,
                WebkitBackgroundClip: i > titleWords.length / 2 ? 'text' : undefined,
                WebkitTextFillColor: i > titleWords.length / 2 ? 'transparent' : undefined,
                color: i <= titleWords.length / 2 ? 'white' : undefined
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col gap-3">
            <NeonButton
              color="blue"
              className="inline-flex items-center justify-center gap-2 px-6 py-3"
              onClick={handleConsultClick}
            >
              <span>{t('hero.cta.consult')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NeonButton>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>{t('cta.consultationNote')}</span>
            </div>
          </div>
          <NeonButton
            color="green"
            variant="outline"
            onClick={handleLearnMoreClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 group"
          >
            <span>{t('hero.cta.learn')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NeonButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;