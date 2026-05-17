import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { MessageSquare, Users, Mail, Database, Mic, Share2, ArrowRight, Check, Zap } from 'lucide-react';
import { colors } from '../utils/colors';
import NeonButton from '../components/ui/NeonButton';
import Breadcrumb from '../components/ui/Breadcrumb';
import { ParticlesBackground } from '../components/ui/ParticlesBackground';
import { GlowingCard } from '../components/ui/GlowingCard';
import SEO from '../components/SEO';
import { ChatbotDemo, VoiceDemo, CrmDemo, EmailDemo, LeadsDemo, SocialDemo } from '../components/services/ServiceDemos'; // Import SEO component

const Services: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const fromHero = location.state?.fromHero;

  useEffect(() => {
    if (fromHero) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [fromHero]);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);



  const getImpactMetric = (key: string) => {
    switch(key) {
      case 'chatbot': return "Support automatisé à 80%";
      case 'leads': return "Taux de conversion x3";
      case 'email': return "+40% de taux de réponse";
      case 'crm': return "Zéro saisie manuelle";
      case 'voice': return "Disponibilité 24/7";
      case 'social': return "Engagement multiplié par 5";
      default: return "";
    }
  };

  const handleConsultClick = () => {
    window.open('https://calendly.com/flow_ia/consultation', '_blank', 'noopener,noreferrer');
  };

  const services = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      key: 'chatbot',
      color: colors.neon.blue
    },
    {
      icon: <Users className="w-8 h-8" />,
      key: 'leads',
      color: colors.neon.green
    },
    {
      icon: <Mail className="w-8 h-8" />,
      key: 'email',
      color: '#a855f7' // Purple
    },
    {
      icon: <Database className="w-8 h-8" />,
      key: 'crm',
      color: '#ec4899' // Pink
    },
    {
      icon: <Mic className="w-8 h-8" />,
      key: 'voice',
      color: colors.neon.blue
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      key: 'social',
      color: colors.neon.green
    }
  ];

  const renderDemo = (key: string) => {
    switch(key) {
      case 'chatbot': return <ChatbotDemo />;
      case 'voice': return <VoiceDemo />;
      case 'crm': return <CrmDemo />;
      case 'email': return <EmailDemo />;
      case 'leads': return <LeadsDemo />;
      case 'social': return <SocialDemo />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title={t('nav.services')}
        description={t('services.overview.subtitle')}
      />
      <ParticlesBackground />
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: t('nav.services'), href: '/services' }]} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 inline-block"
            style={{
              background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: `0 0 40px ${colors.neon.blue}40`
            }}
          >
            {t('services.overview.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            {t('services.overview.subtitle')}
          </p>
          <NeonButton
            color="blue"
            onClick={handleConsultClick}
            className="inline-flex items-center gap-2"
          >
            {t('cta.consult')}
            <ArrowRight className="w-5 h-5" />
          </NeonButton>
        </motion.div>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-32 relative">
        {/* Animated Connection Line */}
        <div className="hidden lg:block absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-px bg-white/5 z-0">
          <motion.div
            className="w-full bg-gradient-to-b from-blue-500 to-green-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            style={{ height: lineHeight }}
          />
        </div>

        {services.map((service, index) => {
          const description = t(`services.items.${service.key}.description`);
          const benefits = t(`services.items.${service.key}.benefits`, { returnObjects: true }) as string[];
          const ideal = t(`services.items.${service.key}.ideal`);
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-8 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-6">
                    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gray-900 border border-gray-800">
                      <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl opacity-100" />
                      <div className="relative z-10 text-blue-400">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {t(`services.items.${service.key}.title`)}
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">
                    {getImpactMetric(service.key)}
                  </span>
                </div>

                <div className="space-y-4">
                  {description.split('\n').map((line, i) => (
                    <p key={i} className="text-gray-300 text-lg leading-relaxed font-light">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="bg-black/20 p-6 rounded-xl border border-white/5">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Avantages Clés
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
                  <NeonButton
                    color="blue"
                    variant="outline"
                    onClick={handleConsultClick}
                  >
                    {t('services.learnMore')}
                  </NeonButton>
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 italic">
                    {ideal}
                  </div>
                </div>
              </div>

              {/* Demo Side */}
              <motion.div 
                className="flex-1 w-full relative perspective-1000 group z-10"
                whileHover={{ rotateY: isEven ? -2 : 2, rotateX: 2, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div 
                  className="absolute inset-0 blur-3xl rounded-full translate-y-10 opacity-20 transition-opacity duration-500 group-hover:opacity-40" 
                  style={{ background: service.color }}
                />
                <GlowingCard className="p-6 md:p-10 bg-gray-900/50 border-gray-800 relative z-10 shadow-2xl">
                  {renderDemo(service.key)}
                </GlowingCard>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="py-20 relative">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(600px at 100% 0%, ${colors.neon.green}15, transparent)`,
              `radial-gradient(600px at 0% 100%, ${colors.neon.blue}15, transparent)`,
              `radial-gradient(600px at 100% 0%, ${colors.neon.green}15, transparent)`
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t('cta.title')}
          </motion.h2>

          <motion.div
            className="mt-8"
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
              {t('cta.createFuture')}
              <ArrowRight className="w-5 h-5" />
            </NeonButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;