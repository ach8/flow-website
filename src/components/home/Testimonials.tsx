import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { colors } from '../../utils/colors';
import { GlowingCard } from '../ui/GlowingCard';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

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
          className="flex gap-8 py-4 px-4 w-max"
          animate={{
            x: isHovered ? undefined : ["0%", "-33.333%"] // Move exactly by 1/3 since we triplicated the array
          }}
          transition={{
            duration: 90, // Slower for readability
            repeat: Infinity,
            ease: "linear"
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {extendedTestimonials.map((item, index) => (
            <div key={index} className="w-[400px] flex-shrink-0">
              <GlowingCard
                className={`p-8 rounded-2xl border-white/5 backdrop-blur-sm transition-all duration-300 h-full ${isHovered ? 'bg-gray-900/60' : 'bg-gray-900/40' // slightly dim others when hovering the container
                  } hover:!bg-gray-800/80 hover:scale-105 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  {renderStars()}
                  <blockquote className="text-gray-300 text-lg mb-8 leading-relaxed transition-colors flex-grow italic font-light">
                    "{item.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full flex flex-shrink-0 items-center justify-center text-white font-bold text-lg"
                      style={{ background: `linear-gradient(135deg, ${colors.neon.blue}, ${colors.neon.green})`, boxShadow: `0 0 15px ${colors.neon.blue}40` }}
                    >
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">{item.author}</p>
                      <p className="text-sm" style={{ color: colors.neon.blue }}>{item.role} <span className="text-gray-500">@ {item.company}</span></p>
                    </div>
                  </div>
                </div>
              </GlowingCard>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;