import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LinkedinScraperTemplateEn: React.FC = () => {

  const handleDownloadJson = async (e: React.MouseEvent) => {
    e.preventDefault();
    const url = "https://lxsjjfsgyfoesrqeyift.supabase.co/storage/v1/object/public/flow-drive/LinkedIn-Leads-Scraper-Template.json";
    
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = "LinkedIn-Leads-Scraper-Template.json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download error:", error);
      // Fallback if JS fails
      window.open(url, '_blank');
    }
  };

  const handleDownloadPdf = async (e: React.MouseEvent) => {
    e.preventDefault();
    const url = "https://lxsjjfsgyfoesrqeyift.supabase.co/storage/v1/object/public/flow-drive/LinkedIn-Scraper-Guide-EN.pdf";
    
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = "LinkedIn-Scraper-Guide-EN.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("PDF Download error:", error);
      window.open(url, '_blank');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-900 text-gray-300 leading-relaxed">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/30 rounded-full">
            🎁 Free n8n Template
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            The Ultimate LinkedIn Acquisition System
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              66 Nodes • 100% Automated
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stop paying for Waalaxy or PhantomBuster. Here is the method to generate 800+ leads/week for free.
          </p>
        </motion.header>

        {/* Screenshot Workflow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-16 group max-w-5xl mx-auto"
        >
          {/* Glow effect background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          {/* Image container window style */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f1115]">
            {/* Window Header */}
            <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 space-x-2 backdrop-blur-sm">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
              <div className="flex-1 text-center pr-12">
                <span className="text-xs text-gray-500 font-mono bg-black/30 px-3 py-1 rounded-full border border-white/5">
                  LinkedIn-Growth-System.json
                </span>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <img 
                src="/images/linkedin-scraper-workflow.jpg" 
                alt="Full n8n LinkedIn scraper workflow"
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
              {/* Subtle reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>
        </motion.div>

        {/* What it does */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">⚡ System Power</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">1. Targeted Extraction</h3>
              <p className="text-sm text-gray-400">It identifies and extracts highly qualified LinkedIn profiles (e.g., "SaaS CEO Paris") while respecting platform limits.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">2. Enrichment & Contact</h3>
              <p className="text-sm text-gray-400">It cross-references databases to find verified professional emails, phone numbers, and company info.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">3. Data Hygiene</h3>
              <p className="text-sm text-gray-400">It deduplicates entries and validates email deliverability in real-time. Zero bounces.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">4. Ready-to-Use Export</h3>
              <p className="text-sm text-gray-400">You receive a perfectly structured Google Sheet file, directly usable for your Cold Email campaigns.</p>
            </div>
          </div>
        </motion.div>

        {/* Capture Form */}
        <motion.div 
          id="download"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-1 mb-16"
        >
          <div className="bg-gray-900 rounded-xl p-8 md:p-12 text-center">
            <div className="py-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                📥 Download the Full Pack
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Here are the files as promised. Download the n8n JSON template and the installation guide to start in 5 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleDownloadJson}
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
                >
                  📥 Download JSON
                </button>
                <button 
                  onClick={handleDownloadPdf}
                  className="px-8 py-4 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
                >
                  📖 Read PDF Guide
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-8">
                Need help installing? <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline">Contact us</Link>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          
          <div>
            <h3 className="font-bold text-white mb-2">Is it really free?</h3>
            <p className="text-gray-400">Yes. I'm sharing this template to promote my agency Flow AI. If you need help installing it, we offer paid services, but the template is complete.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-2">Do I risk getting banned by LinkedIn?</h3>
            <p className="text-gray-400">This workflow respects security limits. However, automation always carries a risk. Use it intelligently (no more than 50 profiles/day at first).</p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-2">What do I need to run it?</h3>
            <p className="text-gray-400">Just an n8n instance (free local or hosted). The PDF guide explains everything.</p>
          </div>
        </div>

      </article>
    </div>
  );
};

export default LinkedinScraperTemplateEn;