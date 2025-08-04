import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../utils/colors';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  index
}) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="text-center relative z-10">
        <motion.div
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
          style={{ color: colors.neon.blue }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>

      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${colors.neon.blue}10, transparent 70%)`,
          filter: 'blur(20px)',
        }}
      />
    </motion.div>
  );
};

export default ValueCard;