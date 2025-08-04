import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { colors } from '../../utils/colors';

const FooterContact: React.FC = () => {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">Contact</h4>
      <motion.div 
        className="text-gray-400 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <a 
          href="mailto:ach@flow-agencies.com" 
          className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          style={{ '--hover-color': colors.neon.blue }}
        >
          <Mail size={16} />
          ach@flow-agencies.com
        </a>
        <a 
          href="tel:+33767515497" 
          className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          style={{ '--hover-color': colors.neon.blue }}
        >
          <Phone size={16} />
          +33 7 67 51 54 97
        </a>
      </motion.div>
    </div>
  );
};

export default FooterContact;