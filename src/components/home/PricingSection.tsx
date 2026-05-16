import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NeonButton from '../ui/NeonButton';

const PricingSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const packs = t('pricing.packs', { returnObjects: true }) as Array<{
    name: string;
    price: string;
    description: string;
    features: string[];
    button: string;
    highlighted: boolean;
  }>;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {t('pricing.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {packs.map((pack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`card-elevated rounded-3xl p-8 relative ${pack.highlighted ? 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)] md:-translate-y-4 bg-gradient-to-b from-blue-900/20 to-transparent' : ''}`}
            >
              {pack.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Le plus populaire
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{pack.name}</h3>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4">
                {pack.price}
              </div>
              <p className="text-gray-400 text-sm mb-8 h-10">{pack.description}</p>
              
              <ul className="space-y-4 mb-8">
                {pack.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-green-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <NeonButton
                color={pack.highlighted ? "blue" : "green"}
                variant={pack.highlighted ? "default" : "outline"}
                className="w-full flex items-center justify-center gap-2"
                onClick={() => navigate(pack.price === 'Gratuit' ? '/rendez-vous' : '/contact')}
              >
                <span>{pack.button}</span>
                <ArrowRight className="w-4 h-4" />
              </NeonButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
