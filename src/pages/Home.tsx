import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/home/Hero';
import ValueProposition from '../components/home/ValueProposition';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import Testimonials from '../components/home/Testimonials';
import CtaBanner from '../components/home/CtaBanner';
import UnifiedOverlay from '../components/background/UnifiedOverlay';
import { colors } from '../utils/colors';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative">
      {/* Consistent background elements */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-950 to-gray-900" style={{ zIndex: -2 }} />

      {/* Animated grid overlay */}
      <motion.div
        className="fixed inset-0"
        style={{
          zIndex: -1,
          backgroundImage: `
            linear-gradient(to right, ${colors.neon.blue}05 1px, transparent 1px),
            linear-gradient(to bottom, ${colors.neon.blue}05 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          opacity
        }}
      />

      {/* Unified overlay layer */}
      <UnifiedOverlay />

      {/* Content sections with consistent spacing and transitions */}
      <motion.div className="relative">
        <Hero />
      </motion.div>

      <motion.div className="relative">
        <ValueProposition />
      </motion.div>

      <motion.div className="relative">
        <ServicesSection />
      </motion.div>

      <motion.div className="relative">
        <ProcessSection />
      </motion.div>

      <motion.div className="relative">
        <Testimonials />
      </motion.div>

      <CtaBanner />
    </div>
  );
};

export default Home;