import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import FooterSection from './footer/FooterSection';
import DynamicBackground from './background/DynamicBackground';
import CustomCursor from './ui/CustomCursor';
import MobileStickyCta from './ui/MobileStickyCta';
import LiveChatbotDemo from './ui/LiveChatbotDemo';
import LoadingScreen from './ui/LoadingScreen';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Layout: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen text-gray-100 relative w-full max-w-[100vw]">
      <LoadingScreen />
      <CustomCursor />
      <DynamicBackground />
      <div className="fixed inset-0 bg-noise pointer-events-none z-[1]" />
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <FooterSection />
      <MobileStickyCta />
      <LiveChatbotDemo />
    </div>
  );
};

export default Layout;