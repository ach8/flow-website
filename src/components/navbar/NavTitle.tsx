import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../utils/colors';

interface NavTitleProps {
  text: string;
}

const NavTitle: React.FC<NavTitleProps> = ({ text }) => {
  return (
    <motion.h1 
      className="text-2xl font-bold tracking-tight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      {text}
    </motion.h1>
  );
};

export default NavTitle;