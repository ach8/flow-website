import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import FooterSection from './footer/FooterSection';
import DynamicBackground from './background/DynamicBackground';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Layout: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen text-gray-100 relative">
      <DynamicBackground />
      <div className="fixed inset-0 bg-noise pointer-events-none z-[1] opacity-20 mix-blend-overlay" />
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
};

export default Layout;