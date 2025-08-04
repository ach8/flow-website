import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { colors } from '../../utils/colors';

const FooterSocial: React.FC = () => {
  const socialLinks = [
    { icon: <Twitter size={24} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={24} />, href: '#', label: 'LinkedIn' },
    { icon: <Github size={24} />, href: '#', label: 'GitHub' }
  ];

  return (
    <div>
      <h4 className="text-white font-semibold mb-4">Social</h4>
      <div className="flex space-x-4">
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            whileHover={{ scale: 1.1, color: colors.neon.blue }}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={link.label}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;