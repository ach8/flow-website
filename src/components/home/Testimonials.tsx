import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { colors } from '../../utils/colors';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get testimonials array with proper typing
  const testimonials = (t('testimonials.items', { returnObjects: true }) || []) as Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }>;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <div key={index} className="relative">
        <Star
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
        />
      </div>
    ));
  };

  if (!testimonials.length) return null;

  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(600px at 0% 0%, ${colors.neon.blue}15, transparent)`,
            `radial-gradient(600px at 100% 100%, ${colors.neon.green}15, transparent)`,
            `radial-gradient(600px at 0% 0%, ${colors.neon.blue}15, transparent)`
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
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

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
              className="p-2 rounded-full bg-gray-900/80 border border-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-900/80 border border-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    <div className="flex gap-1">
                      {renderStars(5)}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl text-gray-300 text-center mb-8">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="text-center">
                    <p className="font-semibold text-white">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gray-400">
                      {testimonials[currentIndex].role} - {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-400 w-4' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;