import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { colors } from '../../utils/colors';

const CaseStudiesSection: React.FC = () => {
  const { t } = useTranslation();

  const caseStudies = t('caseStudies.items', { returnObjects: true }) as Array<{
    client: string;
    problem: string;
    solution: string;
    results: string[];
  }>;

  const icons = [TrendingUp, Clock, CheckCircle];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {t('caseStudies.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('caseStudies.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated rounded-2xl p-8 relative group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{study.client}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Le Problème</span>
                    <p className="text-gray-300 text-sm mt-1">{study.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs text-green-500 uppercase tracking-wider font-semibold">La Solution IA</span>
                    <p className="text-gray-300 text-sm mt-1">{study.solution}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3 block">Résultats</span>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
