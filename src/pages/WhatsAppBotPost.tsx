import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, MessageCircle, FileJson, FileText } from 'lucide-react';
import { useLanguageDetection } from '../hooks/useLanguageDetection';

const WhatsAppBotPost: React.FC = () => {
  const { currentLanguage: language, changeLanguage: setManualLanguage } = useLanguageDetection();
  const isEn = language === 'en';

  const content = {
    fr: {
      tag: "Tutoriel Technique • Automatisation",
      title: "Créez votre Agent Support Client WhatsApp IA (Gratuitement)",
      subtitle: "Le guide complet pour transformer WhatsApp Business en un assistant intelligent qui connaît votre entreprise par cœur.",
      author: "Par Ali (Flow AI)",
      date: "17 Février 2026",
      readTime: "15 min de lecture",
      intro: "Vous en avez marre de répondre aux mêmes questions 50 fois par jour ? \"C'est quoi vos prix ?\", \"Vous livrez en Belgique ?\". Voici comment automatiser tout ça avec une IA qui lit votre site web en temps réel.",
      downloadTitle: "📥 Téléchargez le Workflow Complet",
      downloadSubtitle: "Obtenez le fichier JSON n8n prêt à l'emploi + le guide d'installation PDF.",
      steps: [
        {
          title: "1. L'Architecture",
          text: "Nous utilisons n8n (orchestrateur), OpenAI (cerveau) et Supabase (mémoire). L'agent est capable de naviguer sur votre site pour trouver les infos à jour."
        },
        {
          title: "2. La Mémoire Long-Terme",
          text: "Contrairement à un chatbot basique, cet agent se souvient de vos clients grâce à une base de données PostgreSQL. Il sait si c'est un nouveau prospect ou un client fidèle."
        },
        {
          title: "3. La Sécurité WhatsApp",
          text: "Le workflow gère automatiquement la fenêtre de 24h imposée par Meta. Si une conversation expire, il envoie un template validé pour la rouvrir."
        }
      ],
      cta: "Retour au Blog"
    },
    en: {
      tag: "Technical Tutorial • Automation",
      title: "Build Your Own AI WhatsApp Customer Support Agent (Free)",
      subtitle: "The complete guide to turning WhatsApp Business into a smart assistant that knows your business inside out.",
      author: "By Ali (Flow AI)",
      date: "February 17, 2026",
      readTime: "15 min read",
      intro: "Tired of answering the same questions 50 times a day? \"What are your prices?\", \"Do you ship to Belgium?\". Here is how to automate all of that with an AI that reads your website in real-time.",
      downloadTitle: "📥 Download the Full Workflow",
      downloadSubtitle: "Get the ready-to-use n8n JSON file + the PDF installation guide.",
      steps: [
        {
          title: "1. The Architecture",
          text: "We use n8n (orchestrator), OpenAI (brain), and Supabase (memory). The agent is capable of navigating your site to find up-to-date info."
        },
        {
          title: "2. Long-Term Memory",
          text: "Unlike a basic chatbot, this agent remembers your customers thanks to a PostgreSQL database. It knows if it's a new lead or a loyal customer."
        },
        {
          title: "3. WhatsApp Security",
          text: "The workflow automatically handles the 24h window imposed by Meta. If a conversation expires, it sends a validated template to reopen it."
        }
      ],
      cta: "Back to Blog"
    }
  };

  const t = isEn ? content.en : content.fr;

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-900 text-gray-300">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Language Toggle */}
        <div className="flex justify-end mb-8">
          <div className="bg-gray-800 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setManualLanguage('fr')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                !isEn ? 'bg-cyan-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              🇫🇷 FR
            </button>
            <button
              onClick={() => setManualLanguage('en')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                isEn ? 'bg-cyan-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              🇬🇧 EN
            </button>
          </div>
        </div>

        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-900/30 rounded-full">
            {t.tag}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            {t.subtitle}
          </p>
          <div className="flex items-center justify-center text-sm text-gray-500 gap-4">
            <span>{t.author}</span>
            <span>•</span>
            <span>{t.date}</span>
            <span>•</span>
            <span>{t.readTime}</span>
          </div>
        </motion.header>

        {/* Hero Image (Abstract Tech) */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-16 border border-gray-800 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
            alt="WhatsApp Automation AI"
            className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="bg-green-500/20 backdrop-blur-md p-6 rounded-full border border-green-500/50 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
              <MessageCircle className="w-16 h-16 text-green-400" />
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-invert prose-lg max-w-none mb-16">
          <p className="lead text-xl text-gray-200 border-l-4 border-cyan-500 pl-6 italic">
            {t.intro}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Download Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-cyan-500/30 rounded-2xl p-8 md:p-12 text-center shadow-[0_0_40px_rgba(6,182,212,0.1)]"
        >
          <h2 className="text-3xl font-bold text-white mb-3">
            {t.downloadTitle}
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            {t.downloadSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={isEn 
                ? "https://drive.google.com/file/d/1sOK4yIXC76Mk9Gz3_QB1i26xyWjPcB6Z/view?usp=drivesdk"
                : "https://drive.google.com/file/d/1-CO0nsHzvx21sK74NAvxucB03IUIZvHm/view?usp=drivesdk"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              <FileJson className="w-6 h-6" />
              {isEn ? "Download Workflow (JSON)" : "Télécharger le Workflow (JSON)"}
            </a>
            <a
              href={isEn
                ? "https://drive.google.com/file/d/1qYVs1YxRxUQokrEqR_4bq9msQrFSWPRZ/view?usp=drivesdk"
                : "https://drive.google.com/file/d/1gLqe1s5XY-LQGGhwCaOb0eiqFihKT1gy/view?usp=drivesdk"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-all hover:scale-105 border border-gray-600"
            >
              <FileText className="w-6 h-6" />
              {isEn ? "Download Guide (PDF)" : "Télécharger le Guide (PDF)"}
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
          <Link to="/blog" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t.cta}
          </Link>
        </div>

      </article>
    </div>
  );
};

export default WhatsAppBotPost;
