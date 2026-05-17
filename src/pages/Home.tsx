import React, { lazy } from 'react';
import Hero from '../components/home/Hero';
import TechLogos from '../components/home/TechLogos';
import SEO from '../components/SEO'; // Import SEO component
import { ParticlesBackground } from '../components/ui/ParticlesBackground';
import LazySection from '../components/ui/LazySection';
import { colors } from '../utils/colors';

// Lazy load non-critical sections
const ValueProposition = lazy(() => import('../components/home/ValueProposition'));
const ServicesSection = lazy(() => import('../components/home/ServicesSection'));
const ProcessSection = lazy(() => import('../components/home/ProcessSection'));
const CaseStudiesSection = lazy(() => import('../components/home/CaseStudiesSection'));
const ROICalculator = lazy(() => import('../components/home/ROICalculator'));
const PricingSection = lazy(() => import('../components/home/PricingSection'));
const LeadMagnetSection = lazy(() => import('../components/home/LeadMagnetSection'));
const FAQSection = lazy(() => import('../components/home/FAQSection'));
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
      {/* Le background principal (DynamicBackground) est géré globalement dans Layout.tsx */}
      <ParticlesBackground />

      {/* Hero loads immediately */}
      <div className="relative">
        <Hero />
      </div>

      <div className="relative z-10">
        <TechLogos />
      </div>

      {/* Lazy loaded sections */}
      <LazySection fallback={<SectionLoader />}>
        <div className="relative">
          <ValueProposition />
        </div>
      </LazySection>

      <LazySection fallback={<SectionLoader />}>
        <div className="relative">
          <ServicesSection />
        </div>
      </LazySection>

      <LazySection fallback={<SectionLoader />}>
        <div className="relative">
          <ProcessSection />
        </div>
      </LazySection>

      <LazySection fallback={<SectionLoader />}>
        <div className="relative">
          <CaseStudiesSection />
        </div>
      </LazySection>

      <LazySection fallback={<SectionLoader />}>
        <div className="relative">
          <ROICalculator />
        </div>
      </LazySection>

      <LazySection fallback={<SectionLoader />}>
        <div className="relative">
          <PricingSection />
        </div>
      </LazySection>

      <LazySection fallback={<SectionLoader />}>
        <div className="relative">
          <LeadMagnetSection />
        </div>
      </LazySection>

      <LazySection fallback={<SectionLoader />}>
        <div className="relative">
          <Testimonials />
        </div>
      </LazySection>

      <LazySection fallback={<SectionLoader />}>
        <div className="relative">
          <FAQSection />
        </div>
      </LazySection>

      <LazySection fallback={<SectionLoader />}>
        <CtaBanner />
      </LazySection>
    </div>
  );
};

export default Home;
