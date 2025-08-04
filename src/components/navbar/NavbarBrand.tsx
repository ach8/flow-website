import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavTitle from './NavTitle';

const NavbarBrand: React.FC = () => {
  return (
    <Link to="/" className="relative group">
      <NavTitle text="Flow AI" />
      <motion.div
        className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent)',
          filter: 'blur(8px)',
        }}
      />
    </Link>
  );
};

export default NavbarBrand;