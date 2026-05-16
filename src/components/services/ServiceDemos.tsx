import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User, Mic, Play, Pause, BarChart3, Mail, TrendingUp, ArrowRight } from 'lucide-react';

export const ChatbotDemo = () => (
  <div className="w-full bg-gray-950 rounded-xl border border-gray-800 p-4 font-sans text-sm mt-6 shadow-inner relative overflow-hidden">
    <div className="absolute top-0 right-0 p-2 opacity-5">
      <Bot className="w-24 h-24" />
    </div>
    <div className="space-y-3 relative z-10">
      <div className="flex gap-2">
        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
          <Bot className="w-3 h-3 text-blue-400" />
        </div>
        <div className="bg-gray-800 rounded-2xl rounded-tl-none p-2 px-3 text-gray-300">
          Bonjour ! Comment puis-je vous aider aujourd'hui ?
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, repeatDelay: 5 }}
        className="flex gap-2 flex-row-reverse"
      >
        <div className="bg-blue-600 rounded-2xl rounded-tr-none p-2 px-3 text-white">
          Je cherche un spécialiste en IA.
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, repeat: Infinity, repeatDelay: 5 }}
        className="flex gap-2"
      >
        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
          <Bot className="w-3 h-3 text-blue-400" />
        </div>
        <div className="bg-gray-800 rounded-2xl rounded-tl-none p-2 px-3 text-gray-300">
          Vous êtes au bon endroit. Souhaitez-vous planifier un appel avec notre expert ?
        </div>
      </motion.div>
    </div>
  </div>
);

export const VoiceDemo = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  return (
    <div className="w-full bg-gray-950 rounded-xl border border-gray-800 p-6 mt-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-3xl rounded-full" />
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-colors z-10"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
      </button>
      <div className="flex items-end gap-1 h-8 z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 bg-blue-400 rounded-full"
            animate={isPlaying ? {
              height: [8, Math.random() * 24 + 8, 8],
            } : { height: 8 }}
            transition={isPlaying ? {
              duration: 0.5,
              repeat: Infinity,
              delay: i * 0.05
            } : { duration: 0.2 }}
          />
        ))}
      </div>
      <p className="text-xs text-gray-500 z-10">
        {isPlaying ? "Agent vocal en cours d'appel..." : "Cliquez pour écouter un exemple"}
      </p>
    </div>
  );
};

export const CrmDemo = () => (
  <div className="w-full bg-gray-950 rounded-xl border border-gray-800 p-4 mt-6">
    <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-800">
      <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wider">
        <BarChart3 className="w-4 h-4" /> Pipeline
      </div>
      <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
        Auto-Sync Active
      </span>
    </div>
    <div className="space-y-2">
      {[
        { name: "Jean Dupont", status: "Qualifié par IA", color: "bg-blue-500" },
        { name: "Marie Martin", status: "RDV Planifié", color: "bg-green-500" },
        { name: "Tech Corp", status: "Scoring: 95/100", color: "bg-purple-500" }
      ].map((lead, i) => (
        <motion.div 
          key={i}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className="flex items-center justify-between p-2 rounded-lg bg-gray-900 border border-gray-800"
        >
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${lead.color}`} />
            <span className="text-sm text-gray-300">{lead.name}</span>
          </div>
          <span className="text-xs text-gray-500">{lead.status}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export const EmailDemo = () => (
  <div className="w-full bg-gray-950 rounded-xl border border-gray-800 p-4 mt-6">
    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-800 text-gray-400 text-xs">
      <Mail className="w-4 h-4" /> Génération d'email en cours...
    </div>
    <div className="space-y-2 text-sm text-gray-300 font-mono">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        Objet: <span className="text-blue-400">Améliorez votre ROI de 30%</span>
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        Bonjour,<br/><br/>
        J'ai remarqué que votre agence s'étendait en Europe.
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="bg-blue-900/30 p-2 rounded text-blue-200 border border-blue-500/20">
        ✨ Personnalisation IA : Référence à l'actualité de l'entreprise insérée avec succès.
      </motion.p>
    </div>
  </div>
);

export const LeadsDemo = () => (
  <div className="w-full bg-gray-950 rounded-xl border border-gray-800 p-4 mt-6 flex justify-around items-center h-32">
    <div className="text-center">
      <div className="text-2xl font-bold text-gray-400 line-through">12</div>
      <div className="text-xs text-gray-500">Leads manuels</div>
    </div>
    <ArrowRight className="w-6 h-6 text-blue-500/50" />
    <motion.div 
      className="text-center"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1.1 }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
    >
      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">145</div>
      <div className="text-xs text-blue-300 font-semibold mt-1">Leads qualifiés IA</div>
    </motion.div>
  </div>
);

export const SocialDemo = () => (
  <div className="w-full bg-gray-950 rounded-xl border border-gray-800 p-4 mt-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
        <div className="w-full h-full bg-gray-900 rounded-full border border-gray-800" />
      </div>
      <div>
        <div className="w-24 h-2 bg-gray-800 rounded-full mb-1" />
        <div className="w-16 h-1.5 bg-gray-800 rounded-full" />
      </div>
    </div>
    <div className="space-y-2">
      <div className="w-full h-2 bg-gray-800 rounded-full" />
      <div className="w-5/6 h-2 bg-gray-800 rounded-full" />
      <div className="w-4/6 h-2 bg-gray-800 rounded-full" />
    </div>
    <div className="mt-4 flex justify-between items-center pt-3 border-t border-gray-800">
      <div className="flex gap-2">
        <div className="w-4 h-4 rounded-full bg-gray-800" />
        <div className="w-4 h-4 rounded-full bg-gray-800" />
      </div>
      <span className="text-xs text-blue-400 flex items-center gap-1">
        <TrendingUp className="w-3 h-3" /> Auto-publié à 10:00
      </span>
    </div>
  </div>
);
