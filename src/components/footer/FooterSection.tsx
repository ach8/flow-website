import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterBrand from './FooterBrand';
import FooterNavigation from './FooterNavigation';
import FooterSocial from './FooterSocial';
import FooterContact from './FooterContact';
import FooterCopyright from './FooterCopyright';
import { colors } from '../../utils/colors';

const FooterSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative mt-20">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, transparent, ${colors.neon.blue}05)`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <FooterBrand />
          <FooterNavigation />
          <FooterSocial />
          <FooterContact />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default FooterSection;