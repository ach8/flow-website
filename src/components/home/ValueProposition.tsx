import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react';
import { colors } from '../../utils/colors';
import NeonButton from '../ui/NeonButton';

const ValueProposition: React.FC = () => {
  const { t } = useTranslation();

  const handleConsultClick = () => {
    window.open('https://calendly.com/achraf-farhat98/consultation', '_blank');
  };
  
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      metric: "40%",
      detail: t('valueProposition.efficient.metric')
    },
    {
      icon: <Shield className="w-12 h-12" />,
      metric: "98%",
      detail: t('valueProposition.custom.metric')
    },
    {
      icon: <Zap className="w-12 h-12" />,
      metric: "60%",
      detail: t('valueProposition.expert.metric')
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 to-gray-900/80" />
      
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(600px at 20% 20%, ${colors.neon.blue}08, transparent 40%)`,
            `radial-gradient(600px at 80% 80%, ${colors.neon.green}08, transparent 40%)`,
            `radial-gradient(600px at 20% 20%, ${colors.neon.blue}08, transparent 40%)`
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t('valueProposition.title')}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('valueProposition.subtitle')}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-800/50 transition-all duration-300 group-hover:border-gray-700/50" />
              
              <div className="relative p-8 z-10">
                <div className="mb-6 text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.neon.blue }}>
                    {benefit.metric}
                  </div>
                  <div className="text-sm text-gray-400">{benefit.detail}</div>
                </div>
                
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="text-blue-400 transform transition-transform duration-300 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-100">
                  {t(`valueProposition.${index === 0 ? 'efficient' : index === 1 ? 'custom' : 'expert'}.title`)}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t(`valueProposition.${index === 0 ? 'efficient' : index === 1 ? 'custom' : 'expert'}.description`)}
                </p>
              </div>

              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${colors.neon.blue}05, transparent 70%)`,
                  filter: 'blur(20px)',
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <NeonButton
            color="blue"
            onClick={handleConsultClick}
            className="inline-flex items-center gap-2"
          >
            {t('cta.consult')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NeonButton>
        </motion.div>
      </div>

      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${colors.neon.blue}03 1px, transparent 1px),
            linear-gradient(to bottom, ${colors.neon.blue}03 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          mask: 'radial-gradient(circle at 50% 50%, black 40%, transparent)',
          opacity: 0.1
        }}
      />
    </section>
  );
};

export default ValueProposition;