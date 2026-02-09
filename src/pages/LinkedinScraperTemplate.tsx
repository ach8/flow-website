import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LinkedinScraperTemplate: React.FC = () => {

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
      console.error("Erreur téléchargement:", error);
      // Fallback si le JS échoue
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
            🎁 Template n8n Gratuit
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Le Système d'Acquisition LinkedIn Ultime
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              66 Nodes • 100% Automatisé
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Arrête de payer pour Waalaxy ou PhantomBuster. Voici la méthode pour générer 800+ leads/semaine gratuitement.
          </p>
        </motion.header>

        {/* Screenshot Workflow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-16 group max-w-5xl mx-auto"
        >
          {/* Glow effect arrière */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          {/* Conteneur image style fenêtre */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f1115]">
            {/* Header fenêtre */}
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
                alt="Workflow n8n de scraping LinkedIn complet"
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
              {/* Reflet subtil */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>
        </motion.div>

        {/* Ce que ça fait */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">⚡ Puissance du Système</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">1. Extraction Ciblée</h3>
              <p className="text-sm text-gray-400">Il identifie et extrait les profils LinkedIn ultra-qualifiés (ex: "CEO SaaS Paris") tout en respectant les limites de la plateforme.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">2. Enrichissement & Contact</h3>
              <p className="text-sm text-gray-400">Il croise les bases de données pour trouver l'email pro vérifié, le numéro de téléphone et les infos entreprise.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">3. Hygiène des Données</h3>
              <p className="text-sm text-gray-400">Il dédoublonne les entrées et valide la délivrabilité des emails en temps réel. Zéro bounce.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">4. Export Prêt-à-l'emploi</h3>
              <p className="text-sm text-gray-400">Tu reçois un fichier Google Sheet parfaitement structuré, directement exploitable pour tes campagnes de Cold Email.</p>
            </div>
          </div>
        </motion.div>

        {/* Formulaire de capture */}
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
                📥 Télécharger le Pack Complet
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Voici les fichiers promis. Télécharge le template JSON pour n8n et le guide d'installation pour démarrer en 5 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleDownloadJson}
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
                >
                  📥 Télécharger le JSON
                </button>
                <a 
                  href="https://lxsjjfsgyfoesrqeyift.supabase.co/storage/v1/object/public/flow-drive/Guide-Installation-LinkedIn-Scraper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all hover:scale-105 flex items-center justify-center gap-3"
                >
                  📖 Lire le Guide PDF
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-8">
                Besoin d'aide pour l'installer ? <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline">Contacte-nous</Link>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Questions Fréquentes</h2>
          
          <div>
            <h3 className="font-bold text-white mb-2">C'est vraiment gratuit ?</h3>
            <p className="text-gray-400">Oui. Je partage ce template pour faire connaître mon agence Flow AI. Si tu as besoin d'aide pour l'installer, on propose des services payants, mais le template est complet.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-2">Est-ce que je risque de me faire bannir par LinkedIn ?</h3>
            <p className="text-gray-400">Ce workflow respecte les limites de sécurité. Cependant, l'automatisation comporte toujours un risque. Utilise-le avec intelligence (pas plus de 50 profils/jour au début).</p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-2">J'ai besoin de quoi pour le faire tourner ?</h3>
            <p className="text-gray-400">Juste une instance n8n (gratuite en local ou hébergée). Le guide PDF explique tout.</p>
          </div>
        </div>

      </article>
    </div>
  );
};

export default LinkedinScraperTemplate;