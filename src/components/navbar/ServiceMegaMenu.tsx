import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Users, Mail, Database, Mic, Share2, ArrowRight } from 'lucide-react';
import { colors } from '../../utils/colors';

interface ServiceMegaMenuProps {
  label: string;
  isActive: boolean;
}

const ServiceMegaMenu: React.FC<ServiceMegaMenuProps> = ({ label, isActive }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    { icon: <MessageSquare size={20} />, key: 'chatbot', color: colors.neon.blue },
    { icon: <Users size={20} />, key: 'leads', color: colors.neon.green },
    { icon: <Mail size={20} />, key: 'email', color: colors.neon.purple },
    { icon: <Database size={20} />, key: 'crm', color: colors.neon.pink },
    { icon: <Mic size={20} />, key: 'voice', color: colors.neon.blue },
    { icon: <Share2 size={20} />, key: 'social', color: colors.neon.green },
  ];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to="/services"
        className="relative px-3 py-2 text-sm font-medium transition-all duration-300 group inline-block"
      >
        <span className={`relative z-10 transition-colors duration-300 ${isActive || isHovered ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
          {label}
        </span>
        <AnimatePresence>
          {isActive && (
            <motion.div
              layoutId="navbar-indicator"
              className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
              style={{ background: colors.neon.blue }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </AnimatePresence>
      </Link>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] z-50 cursor-default"
          >
            <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 pointer-events-none" />
              
              <div className="flex justify-between items-end mb-6 border-b border-gray-800/50 pb-4 relative z-10">
                <div>
                  <h3 className="text-white font-bold text-lg">Nos Expertises IA</h3>
                  <p className="text-gray-400 text-sm">Découvrez nos solutions sur-mesure</p>
                </div>
                <button 
                  onClick={() => { setIsHovered(false); navigate('/services'); }}
                  className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                >
                  Voir tout <ArrowRight size={14} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                {services.map((service) => (
                  <button
                    key={service.key}
                    onClick={() => { setIsHovered(false); navigate('/services'); }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors group text-left"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                      style={{ background: `${service.color}15`, color: service.color }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1 group-hover:text-blue-400 transition-colors">
                        {t(`services.items.${service.key}.title`, { defaultValue: service.key })}
                      </h4>
                      <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
                        {t(`services.items.${service.key}.description`, { defaultValue: '...' })}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceMegaMenu;
