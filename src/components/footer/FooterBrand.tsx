import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors } from '../../utils/colors';

const FooterBrand: React.FC = () => {
  return (
    <div>
      <Link to="/" className="inline-block">
        <motion.h3 
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          style={{
            background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Flow AI
        </motion.h3>
      </Link>
    </div>
  );
}

export default FooterBrand;