import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { colors } from '../../utils/colors';
import { useNavigate } from 'react-router-dom';
import NeonButton from '../ui/NeonButton';

const CtaBanner: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleConsultClick = () => {
    navigate('/rendez-vous');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl font-bold mb-8"
            style={{
              background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t('cta.title')}
          </h2>

          <div className="flex flex-col items-center gap-4">
            <NeonButton
              color="blue"
              className="inline-flex items-center gap-2 text-lg px-8 py-4"
              onClick={handleConsultClick}
            >
              {t('cta.button')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NeonButton>
            <div className="flex flex-col items-center gap-1 mt-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Audit 100% gratuit et sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Si nous ne trouvons pas de ROI, l'audit est offert</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;