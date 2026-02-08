import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ShopifyHubspotTemplate: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
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
          <div className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider text-green-400 uppercase bg-green-900/30 rounded-full">
            🛒 Template n8n Gratuit — E-commerce
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Shopify → HubSpot
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Sync Automatique des Commandes
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Workflow n8n prêt à importer. Connecte ta boutique en 5 minutes.
          </p>
        </motion.header>

        {/* Hero Stats */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 grid grid-cols-3 gap-4"
        >
          <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-red-400">83%</div>
            <div className="text-sm text-gray-400 mt-1">des boutiques ne sync pas</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-yellow-400">5h</div>
            <div className="text-sm text-gray-400 mt-1">perdues par semaine</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-green-400">0 sec</div>
            <div className="text-sm text-gray-400 mt-1">avec ce workflow</div>
          </div>
        </motion.div>

        {/* Le Problème */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">❌ Le Problème</h2>
          
          <div className="bg-red-900/20 border border-red-800/50 rounded-xl p-6">
            <p className="text-gray-300 mb-4">Aujourd'hui, quand un client achète sur ta boutique Shopify :</p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-red-400">❌</span>
                <span>Tu reçois un email Shopify</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">❌</span>
                <span>Tu ouvres HubSpot manuellement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">❌</span>
                <span>Tu copies le nom, l'email, le montant</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">❌</span>
                <span>Tu crées un deal à la main</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">❌</span>
                <span>Tu oublies 1 fois sur 3...</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-red-900/30 rounded-lg">
              <p className="text-red-300 font-semibold">
                Résultat : Pas de suivi post-achat → Pas de relance → Client perdu à jamais
              </p>
            </div>
          </div>
        </motion.div>

        {/* La Solution */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">✅ La Solution</h2>
          
          <div className="bg-green-900/20 border border-green-800/50 rounded-xl p-6">
            <p className="text-gray-300 mb-4">Avec ce workflow n8n, tout est automatique :</p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-green-400">✅</span>
                <span><strong className="text-white">Commande reçue</strong> → Contact créé/mis à jour dans HubSpot</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✅</span>
                <span><strong className="text-white">Deal ouvert</strong> avec le bon montant automatiquement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✅</span>
                <span><strong className="text-white">Statut "Payé"</strong> mis à jour en temps réel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✅</span>
                <span><strong className="text-white">Toutes les infos</strong> : nom, email, adresse, montant</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Workflow Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">⚡ Le Workflow</h2>
          
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              <div className="bg-green-600 text-white px-4 py-3 rounded-lg font-semibold">
                🛒 Shopify<br/><span className="text-xs opacity-80">Nouvelle commande</span>
              </div>
              <div className="text-2xl text-gray-500">→</div>
              <div className="bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold">
                🔀 Condition<br/><span className="text-xs opacity-80">Commande payée ?</span>
              </div>
              <div className="text-2xl text-gray-500">→</div>
              <div className="bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold">
                📇 HubSpot<br/><span className="text-xs opacity-80">Créer contact</span>
              </div>
              <div className="text-2xl text-gray-500">→</div>
              <div className="bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold">
                💰 HubSpot<br/><span className="text-xs opacity-80">Créer deal</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="text-gray-400">Nodes</div>
                <div className="text-xl font-bold text-white">8</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="text-gray-400">Setup</div>
                <div className="text-xl font-bold text-white">5 min</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="text-gray-400">Trigger</div>
                <div className="text-xl font-bold text-white">Webhook</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="text-gray-400">Prérequis</div>
                <div className="text-xl font-bold text-white">n8n + API</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ce que tu reçois */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">📦 Ce que tu reçois</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">📄</div>
              <h3 className="text-lg font-bold text-white mb-2">Fichier JSON</h3>
              <p className="text-gray-400 text-sm">
                Le workflow n8n complet, prêt à importer en 1 clic. Pas de code à écrire.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-lg font-bold text-white mb-2">Guide d'installation</h3>
              <p className="text-gray-400 text-sm">
                PDF pas-à-pas : comment connecter Shopify et HubSpot en 5 minutes.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-bold text-white mb-2">Personnalisation</h3>
              <p className="text-gray-400 text-sm">
                Explications pour adapter le workflow à tes champs personnalisés.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="text-lg font-bold text-white mb-2">Bonus</h3>
              <p className="text-gray-400 text-sm">
                Template email de remerciement post-achat inclus.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-1">
            <div className="bg-gray-900 rounded-xl p-8 md:p-12 text-center">
              {!submitted ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    🎁 Télécharge le Template Gratuitement
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Fichier JSON + Guide PDF envoyés instantanément.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ton@email.com"
                        required
                        className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all disabled:opacity-50"
                      >
                        {loading ? '...' : 'Envoyer 🚀'}
                      </button>
                    </div>
                  </form>
                  
                  <p className="text-gray-500 text-xs mt-4">
                    Pas de spam. Tu peux te désinscrire à tout moment.
                  </p>
                </>
              ) : (
                <div className="py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    C'est parti !
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Check ta boîte mail — le template arrive dans quelques secondes.
                  </p>
                  <a 
                    href="/templates/shopify-hubspot-sync.zip" 
                    download
                    className="inline-block px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-400 transition-colors"
                  >
                    📥 Télécharger maintenant
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">❓ Questions Fréquentes</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">C'est quoi n8n ?</h3>
              <p className="text-gray-400 text-sm">
                n8n est un outil d'automatisation open-source (comme Zapier, mais gratuit et self-hosted). 
                Tu peux l'installer gratuitement ou utiliser leur cloud.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">Ça marche avec WooCommerce ?</h3>
              <p className="text-gray-400 text-sm">
                Ce template est pour Shopify. On a un template séparé pour WooCommerce — 
                écris-nous si tu veux qu'on te l'envoie.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">Je peux l'adapter à Pipedrive / Notion ?</h3>
              <p className="text-gray-400 text-sm">
                Oui ! Le workflow est facilement modifiable. On t'explique comment dans le guide.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700"
        >
          <h2 className="text-xl font-bold text-white mb-4">
            Tu veux qu'on installe tout ça pour toi ?
          </h2>
          <p className="text-gray-400 mb-6">
            On configure Shopify + HubSpot + 9 autres automatisations en moins de 2 semaines.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all"
          >
            Réserver un Appel Gratuit →
          </Link>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center">
          <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
            ← Retour au Blog
          </Link>
        </div>

      </article>
    </div>
  );
};

export default ShopifyHubspotTemplate;
