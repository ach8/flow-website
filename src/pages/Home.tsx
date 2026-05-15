import React, { lazy, Suspense } from 'react';
import Hero from '../components/home/Hero';
import SEO from '../components/SEO'; // Import SEO component
import { ParticlesBackground } from '../components/ui/ParticlesBackground';
import { colors } from '../utils/colors';

// Lazy load non-critical sections
const ValueProposition = lazy(() => import('../components/home/ValueProposition'));
const ServicesSection = lazy(() => import('../components/home/ServicesSection'));
const ProcessSection = lazy(() => import('../components/home/ProcessSection'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const CtaBanner = lazy(() => import('../components/home/CtaBanner'));

// Simple loading placeholder
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="relative">
      <SEO
        title="Home"
        description="Transform your business with AI-powered automation solutions. Chatbots, lead generation, CRM integration, and more."
      />
      {/* Consistent background elements */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-gray-950 to-gray-900"
        style={{ zIndex: -2 }}
      />

      {/* Premium 3D animated grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          zIndex: -1,
          backgroundImage: `
            linear-gradient(to right, ${colors.neon.blue}15 1px, transparent 1px),
            linear-gradient(to bottom, ${colors.neon.blue}15 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
          transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(3)',
          transformOrigin: 'top center',
          animation: 'grid-move 20s linear infinite',
        }}
      />

      <ParticlesBackground />

      {/* Hero loads immediately */}
      <div className="relative">
        <Hero />
      </div>

      {/* Lazy loaded sections */}
      <Suspense fallback={<SectionLoader />}>
        <div className="relative">
          <ValueProposition />
        </div>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <div className="relative">
          <ServicesSection />
        </div>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <div className="relative">
          <ProcessSection />
        </div>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <div className="relative">
          <Testimonials />
        </div>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CtaBanner />
      </Suspense>
    </div>
  );
};

export default Home;
