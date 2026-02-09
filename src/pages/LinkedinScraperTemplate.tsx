import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LinkedinScraperTemplate: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simuler un envoi API
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setLoading(false);
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
            Le Système de Scraping LinkedIn Ultime
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
          className="mb-16 rounded-xl overflow-hidden border border-gray-700 shadow-2xl"
        >
          {/* Placeholder pour screenshot du workflow n8n */}
          <div className="bg-gray-800 h-64 flex items-center justify-center text-gray-500">
            [Screenshot du Workflow n8n aux 66 nodes ici]
          </div>
        </motion.div>

        {/* Ce que ça fait */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">⚡ Ce que fait ce robot</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">1. Scrape en Masse</h3>
              <p className="text-sm text-gray-400">Il extrait les profils LinkedIn basés sur tes critères (ex: "CEO SaaS Paris") sans se faire bloquer.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">2. Enrichit les Données</h3>
              <p className="text-sm text-gray-400">Il trouve l'email pro vérifié, le numéro de téléphone et les infos entreprise automatiquement.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">3. Nettoie & Vérifie</h3>
              <p className="text-sm text-gray-400">Il supprime les doublons et vérifie la validité des emails pour protéger ta délivrabilité.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">4. Exporte Proprement</h3>
              <p className="text-sm text-gray-400">Tu reçois tout dans un Google Sheet structuré, prêt pour ta campagne de Cold Email.</p>
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
            {!submitted ? (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  📥 Télécharger le Template JSON + Guide PDF
                </h2>
                <p className="text-gray-400 mb-8">
                  Reçois le fichier `.json` à importer dans n8n et le guide d'installation étape par étape.
                </p>
                
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ton@email-pro.com"
                      required
                      className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition-all disabled:opacity-50"
                    >
                      {loading ? 'Envoi...' : 'Recevoir maintenant 🚀'}
                    </button>
                  </div>
                </form>
                <p className="text-gray-500 text-xs mt-4">
                  100% gratuit. Désabonnement en 1 clic.
                </p>
              </>
            ) : (
              <div className="py-8">
                <div className="text-5xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  C'est envoyé !
                </h2>
                <p className="text-gray-400 mb-6">
                  Vérifie ta boîte mail (et tes spams au cas où).
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://lxsjjfsgyfoesrqeyift.supabase.co/storage/v1/object/public/flow-drive/LinkedIn-Leads-Scraper-Template.json"
                    download="LinkedIn-Leads-Scraper-Template.json"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition-colors flex items-center justify-center gap-2"
                  >
                    📥 Télécharger le JSON
                  </a>
                  <a 
                    href="https://lxsjjfsgyfoesrqeyift.supabase.co/storage/v1/object/public/flow-drive/Guide-Installation-LinkedIn-Scraper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                  >
                    📖 Lire le Guide PDF
                  </a>
                </div>
              </div>
            )}
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
