import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Target, Zap, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO'; // Import SEO component
import { colors } from '../utils/colors';
import NeonButton from '../components/ui/NeonButton';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  const handleConsultClick = () => {
    window.open('https://calendly.com/achraf-farhat98/consultation', '_blank');
  };

  const icons = {
    0: <Rocket className="w-12 h-12" />,
    1: <Target className="w-12 h-12" />,
    2: <Zap className="w-12 h-12" />,
    3: <Users className="w-12 h-12" />
  };

  return (
    <div className="relative min-h-screen">
      <SEO 
        title={t('about.hero.title')}
        description={t('about.hero.subtitle')}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8"
            style={{
              background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t('about.hero.title')}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t('about.hero.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="relative">
        {t<any>('about.sections', { returnObjects: true }).map((section: any, index: number) => (
          <motion.section
            key={index}
            className="py-24 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
          >
            {/* Section background effect */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  `radial-gradient(circle at ${index % 2 ? '70%' : '30%'} 50%, ${colors.neon.blue}10, transparent 70%)`,
                  `radial-gradient(circle at ${index % 2 ? '30%' : '70%'} 50%, ${colors.neon.green}10, transparent 70%)`,
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="relative"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                  <motion.div
                    className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gray-900/50 mb-8 border border-gray-800"
                    whileHover={{ scale: 1.05 }}
                    style={{ color: colors.neon.blue }}
                  >
                    {icons[index as keyof typeof icons]}
                  </motion.div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">{section.title}</h2>
                </div>
                
                {/* Section Content */}
                <div className="max-w-5xl mx-auto">
                  {section.content.split('\n\n').map((paragraph: string, i: number) => (
                    <motion.p
                      key={i}
                      className="text-xl text-gray-300 leading-relaxed mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>
        ))}

        {/* CTA Section */}
        <motion.section
          className="py-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{
                background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {t('about.cta.title')}
            </motion.h2>
            <NeonButton
              color="blue"
              onClick={handleConsultClick}
              className="inline-flex items-center gap-2"
            >
              {t('about.cta.button')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NeonButton>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;