import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { colors } from '../../utils/colors';
import SkeletonLoader from '../ui/SkeletonLoader';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  // Get testimonials array with proper typing
  const testimonials = (t('testimonials.items', { returnObjects: true }) || []) as Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }>;

  // Duplicate for seamless loop
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const renderStars = () => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {t('testimonials.title')}
        </motion.h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden mask-linear-gradient">
        {/* Gradient Masks for smooth fade out at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 py-4"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: "max-content" }}
        >
          {extendedTestimonials.map((item, index) => (
            <div
              key={index}
              className="w-[400px] flex-shrink-0 p-8 rounded-2xl bg-gray-900/40 border border-white/5 backdrop-blur-sm hover:bg-gray-800/40 hover:border-blue-500/20 transition-all duration-300 group"
            >
              {renderStars()}
              <blockquote className="text-gray-300 text-lg mb-6 leading-relaxed group-hover:text-white transition-colors">
                "{item.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-sm">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.author}</p>
                  <p className="text-sm text-gray-500">{item.role} @ {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;