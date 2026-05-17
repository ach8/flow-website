import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Bot, Cloud, Link, LayoutGrid } from 'lucide-react';

const TechLogos: React.FC = () => {
  const logos = [
    { icon: <Bot size={24} />, name: "OpenAI" },
    { icon: <Zap size={24} />, name: "Make" },
    { icon: <Link size={24} />, name: "Zapier" },
    { icon: <Database size={24} />, name: "HubSpot" },
    { icon: <LayoutGrid size={24} />, name: "Shopify" },
    { icon: <Cloud size={24} />, name: "Salesforce" }
  ];

  // Triplicate for smooth infinite scroll
  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full py-10 border-y border-white/5 bg-gray-950/20 backdrop-blur-md overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
      
      <div className="text-center mb-6">
        <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
          Propulsé par les meilleures technologies d'IA et d'automatisation
        </span>
      </div>

      <div className="flex w-max">
        <motion.div
          className="flex gap-16 md:gap-24 px-8 items-center"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {extendedLogos.map((logo, index) => (
            <div key={index} className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="text-blue-400">
                {logo.icon}
              </div>
              <span className="text-xl font-bold font-outfit text-white tracking-tight">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechLogos;
