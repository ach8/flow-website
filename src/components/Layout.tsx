import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import FooterSection from './footer/FooterSection';
import DynamicBackground from './background/DynamicBackground';
import CustomCursor from './ui/CustomCursor';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Layout: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen text-gray-100 relative">
      <CustomCursor />
      <DynamicBackground />
      <div className="bg-orb-container">
        <div className="bg-orb bg-orb-primary" />
        <div className="bg-orb bg-orb-secondary" />
      </div>
      <div className="fixed inset-0 bg-noise pointer-events-none z-[1]" />
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
};

export default Layout;