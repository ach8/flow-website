
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/ui/PageTransition';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import KitAutomatisation from './pages/KitAutomatisation';
import ShopifyHubspotTemplate from './pages/ShopifyHubspotTemplate';
import LinkedinScraperTemplate from './pages/LinkedinScraperTemplate';
import LinkedinScraperTemplateEn from './pages/LinkedinScraperTemplateEn';
import WhatsAppBotPost from './pages/WhatsAppBotPost';
import LanguageProvider from './components/language/LanguageProvider';
import SmoothScroll from './components/ui/SmoothScroll';
import './i18n';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/rendez-vous" element={<PageTransition><Booking /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/blog/etat-ia-2026" element={<PageTransition><BlogPost /></PageTransition>} />
          <Route path="/blog/kit-automatisation" element={<PageTransition><KitAutomatisation /></PageTransition>} />
          <Route path="/blog/template-shopify-hubspot" element={<PageTransition><ShopifyHubspotTemplate /></PageTransition>} />
          <Route path="/blog/linkedin-scraper" element={<PageTransition><LinkedinScraperTemplate /></PageTransition>} />
          <Route path="/blog/linkedin-scraper-en" element={<PageTransition><LinkedinScraperTemplateEn /></PageTransition>} />
          <Route path="/blog/whatsapp-ai-agent" element={<PageTransition><WhatsAppBotPost /></PageTransition>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <SmoothScroll>
          <Router>
            <AnimatedRoutes />
          </Router>
        </SmoothScroll>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;