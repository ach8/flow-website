import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { MessageSquare, Users, Mail, Database, Mic, Share2, ArrowRight, Check } from 'lucide-react';
import { colors } from '../utils/colors';
import NeonButton from '../components/ui/NeonButton';
import Breadcrumb from '../components/ui/Breadcrumb';
import { ParticlesBackground } from '../components/ui/ParticlesBackground';
import { GlowingCard } from '../components/ui/GlowingCard';
import SEO from '../components/SEO'; // Import SEO component

const Services: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const fromHero = location.state?.fromHero;

  useEffect(() => {
    if (fromHero) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [fromHero]);

  const handleConsultClick = () => {
    window.open('https://calendly.com/achraf-farhat98/consultation', '_blank', 'noopener,noreferrer');
  };

  const services = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      key: 'chatbot'
    },
    {
      icon: <Users className="w-8 h-8" />,
      key: 'leads'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      key: 'email'
    },
    {
      icon: <Database className="w-8 h-8" />,
      key: 'crm'
    },
    {
      icon: <Mic className="w-8 h-8" />,
      key: 'voice'
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      key: 'social'
    }
  ];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Left Column (Sticky Header) */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-10rem)] flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6 inline-block"
              >
                <h1
                  className="text-5xl md:text-7xl font-extrabold tracking-tight"
                  style={{
                    background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: `0 0 40px ${colors.neon.blue}40`
                  }}
                >
                  {t('services.overview.title')}
                </h1>
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl text-gray-400 mb-10 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {t('services.overview.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
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
          </div>

          {/* Right Column (Scrollable Services) */}
          <div className="lg:col-span-7 flex flex-col gap-8 pb-32">
            {services.map((service) => {
              const description = t(`services.items.${service.key}.description`);
              const benefits = t(`services.items.${service.key}.benefits`, { returnObjects: true }) as string[];
              const ideal = t(`services.items.${service.key}.ideal`);

              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <GlowingCard
                    className="p-8 md:p-10 bg-gray-900/50 border-gray-800 transition-all duration-300 flex flex-col group hover:border-blue-500/30"
                  >
                    <div className="relative z-10">
                      {/* Icon & Title */}
                      <div className="flex items-center gap-6 mb-8">
                        <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gray-900 border border-gray-800 transform group-hover:scale-110 transition-transform duration-500">
                          <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative z-10 text-blue-400">
                            {service.icon}
                          </div>
                        </div>
                        <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {t(`services.items.${service.key}.title`)}
                        </h3>
                      </div>

                      {/* Description */}
                      <div className="mb-8 space-y-4">
                        {description.split('\n').map((line, i) => (
                          <p key={i} className="text-gray-300 text-lg leading-relaxed font-light">
                            {line}
                          </p>
                        ))}
                      </div>

                      {/* Benefits */}
                      <div className="space-y-4 mb-8 bg-black/20 p-6 rounded-xl border border-white/5">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Avantages Clés
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Ideal For & CTA */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-gray-800">
                        <div className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 italic">
                          {ideal}
                        </div>
                        <NeonButton
                          color="blue"
                          variant="outline"
                          onClick={handleConsultClick}
                        >
                          {t('services.learnMore')}
                        </NeonButton>
                      </div>
                    </div>
                  </GlowingCard>
                </motion.div>
              );
            })}
          </div>
        </div>
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