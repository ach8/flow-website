import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import KitAutomatisation from './pages/KitAutomatisation';
import LanguageProvider from './components/language/LanguageProvider';
import './i18n';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/etat-ia-2026" element={<BlogPost />} />
            <Route path="/blog/kit-automatisation" element={<KitAutomatisation />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;