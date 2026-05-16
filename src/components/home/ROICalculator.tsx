import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Euro } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NeonButton from '../ui/NeonButton';

const ROICalculator: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // State for sliders
  const [hours, setHours] = useState(15);
  const [rate, setRate] = useState(50);
  
  // State for calculated values
  const [monthlyCost, setMonthlyCost] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);

  useEffect(() => {
    // Calculate cost based on 4 weeks per month
    const cost = hours * rate * 4;
    setMonthlyCost(cost);
    
    // Assume AI automates 80% of these tasks
    const savings = cost * 0.8;
    setMonthlySavings(savings);
  }, [hours, rate]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <Calculator className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
              {t('roiCalculator.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('roiCalculator.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="card-elevated rounded-3xl p-8 md:p-12 relative border border-blue-500/30 overflow-hidden"
        >
          {/* Subtle animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {/* Controls */}
            <div className="space-y-10">
              {/* Hours Slider */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-white font-medium">{t('roiCalculator.hoursLabel')}</label>
                  <span className="text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-lg">
                    {hours}h
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={hours}
                  onChange={(e) => setHours(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Rate Slider */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-white font-medium">{t('roiCalculator.rateLabel')}</label>
                  <span className="text-green-400 font-bold bg-green-500/10 px-3 py-1 rounded-lg">
                    {rate}€
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="5"
                  value={rate}
                  onChange={(e) => setRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
              </div>
            </div>

            {/* Results */}
            <div className="bg-gray-950/50 rounded-2xl p-8 flex flex-col justify-center border border-white/5 relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Euro className="w-32 h-32" />
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                  {t('roiCalculator.monthlyCost')}
                </p>
                <div className="text-3xl text-red-400/80 font-mono font-semibold line-through">
                  {monthlyCost.toLocaleString('fr-FR')} €
                </div>
              </div>

              <div className="mb-8">
                <p className="text-sm text-green-500 font-semibold uppercase tracking-wider mb-2">
                  {t('roiCalculator.monthlySavings')}
                </p>
                <motion.div 
                  key={monthlySavings}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"
                  style={{ textShadow: '0 0 40px rgba(74, 222, 128, 0.3)' }}
                >
                  {monthlySavings.toLocaleString('fr-FR')} €
                </motion.div>
              </div>

              <NeonButton
                color="blue"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => navigate('/rendez-vous')}
              >
                <span>{t('roiCalculator.cta')}</span>
                <ArrowRight className="w-5 h-5" />
              </NeonButton>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                {t('roiCalculator.disclaimer')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
