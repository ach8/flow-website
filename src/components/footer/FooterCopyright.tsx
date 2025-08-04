import React from 'react';
import { motion } from 'framer-motion';

const FooterCopyright: React.FC = () => {
  return (
    <motion.div 
      className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <p>&copy; {new Date().getFullYear()} Flow AI. All rights reserved.</p>
    </motion.div>
  );
};

export default FooterCopyright;