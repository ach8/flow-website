import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '../../utils/colors';
import { linkHoverVariants, underlineVariants } from './animations/variants';

interface NavbarLinkProps {
  to: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ to, label, isActive, onClick }) => {
  return (
    <motion.div
      variants={linkHoverVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <Link
        to={to}
        onClick={onClick}
        className="relative px-3 py-2 text-sm font-medium transition-all duration-300 group"
      >
        <span 
          className={`relative z-10 transition-colors duration-300 ${
            isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
          }`}
        >
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

        <motion.div
          className="absolute inset-0 rounded-lg z-0"
          initial={{ opacity: 0 }}
          whileHover={{ 
            opacity: 1,
            transition: { duration: 0.2 }
          }}
          style={{
            background: `radial-gradient(circle at center, ${colors.neon.blue}15, transparent)`,
          }}
        />
      </Link>
    </motion.div>
  );
};

export default NavbarLink;