import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import NavbarBrand from './navbar/NavbarBrand';
import NavbarLink from './navbar/NavbarLink';
import ServiceMegaMenu from './navbar/ServiceMegaMenu';
import MobileMenu from './navbar/MobileMenu';
import LanguageSelector from './navbar/LanguageSelector';
import NeonButton from './ui/NeonButton';
import { navbarVariants } from './navbar/animations/variants';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/about', label: t('nav.about') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/contact', label: t('nav.contact') }
  ];

  const handleConsultClick = () => {
    window.open('https://calendly.com/flow_ia/consultation', '_blank', 'noopener,noreferrer');
  };

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.nav 
      className="fixed w-full z-50"
      initial="hidden"
      animate={isScrolled ? "visible" : "hidden"}
      variants={navbarVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[72px] flex items-center justify-between">
          <NavbarBrand />

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-1">
                {navLinks.map((link) => (
                  link.to === '/services' ? (
                    <ServiceMegaMenu key={link.to} label={link.label} isActive={location.pathname === link.to} />
                  ) : (
                    <NavbarLink
                      key={link.to}
                      to={link.to}
                      label={link.label}
                      isActive={location.pathname === link.to}
                    />
                  )
                ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <NeonButton color="blue" variant="outline" onClick={handleConsultClick}>
                  {t('hero.cta.consult')}
                </NeonButton>
              </motion.div>
            </div>
          </div>

          <motion.button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
        currentPath={location.pathname}
        ctaLabel={t('hero.cta.consult')}
      />
    </motion.nav>
  );
};

export default Navbar;