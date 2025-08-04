import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { colors } from '../../utils/colors';
import NavbarLink from './NavbarLink';
import LanguageToggle from '../LanguageToggle';
import NeonButton from '../ui/NeonButton';
import type { NavLink } from '../../types/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  currentPath: string;
  ctaLabel: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  links,
  currentPath,
  ctaLabel,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden fixed inset-x-0 top-[72px] bg-gray-950/95 backdrop-blur-lg border-b border-gray-800"
        >
          <div className="px-4 py-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <NavbarLink
                  key={link.to}
                  to={link.to}
                  label={link.label}
                  isActive={currentPath === link.to}
                  onClick={onClose}
                />
              ))}
            </nav>
            
            <div className="pt-4 space-y-4 border-t border-gray-800">
              <LanguageToggle />
              <NeonButton color="blue" variant="outline" className="w-full justify-center">
                {ctaLabel}
              </NeonButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;