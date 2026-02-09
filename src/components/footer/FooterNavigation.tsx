import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const FooterNavigation: React.FC = () => {
  const { t } = useTranslation();

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') }
  ];

  return (
    <div>
      <h4 className="text-white font-semibold mb-4">Navigation</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <motion.li key={link.to} whileHover={{ x: 5 }}>
            <Link 
              to={link.to} 
              className="text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavigation;