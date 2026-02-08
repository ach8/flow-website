import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { colors } from '../utils/colors';

const KitAutomatisation: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Ici tu peux connecter à ton backend/Supabase pour sauvegarder l'email
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
          <div className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-900/30 rounded-full">
            🎁 Guide Gratuit • Valeur 500€
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Kit Automatisation Express
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              10 Workflows pour Gagner 4h/Jour
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Templates Make, n8n & Zapier prêts à copier. Prompts ChatGPT inclus.
          </p>
        </motion.header>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20 bg-gradient-to-br from-indigo-600 to-cyan-600 p-1"
        >
          <div className="bg-gray-800 rounded-xl p-8 md:p-12 text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Tu perds <span className="text-red-400">4 heures/jour</span> sur des tâches répétitives
            </h2>
            <p className="text-gray-400 text-lg">
              4h × 20 jours = 80h/mois = <span className="text-emerald-400 font-bold">4 000€</span> qui s'évaporent.
            </p>
          </div>
        </motion.div>

        {/* Ce que tu reçois */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">📦 Ce que tu reçois</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-bold text-white mb-2">10 Automatisations Clé-en-Main</h3>
              <ul className="text-gray-400 space-y-1 text-sm">
                <li>✅ Tri emails automatique</li>
                <li>✅ Prise de RDV (Calendly)</li>
                <li>✅ Veille concurrentielle IA</li>
                <li>✅ Reporting auto</li>
                <li>✅ Génération contenu LinkedIn</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold text-white mb-2">+ 5 Autres Workflows</h3>
              <ul className="text-gray-400 space-y-1 text-sm">
                <li>✅ Templates réponses DM</li>
                <li>✅ Organisation fichiers</li>
                <li>✅ Facturation & relances</li>
                <li>✅ Scoring leads automatique</li>
                <li>✅ Sync CRM</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-lg font-bold text-white mb-2">5 Prompts ChatGPT</h3>
              <ul className="text-gray-400 space-y-1 text-sm">
                <li>✅ Résumer un article</li>
                <li>✅ Email de prospection</li>
                <li>✅ Notes → Compte-rendu</li>
                <li>✅ Objections & réponses</li>
                <li>✅ Séquence email nurturing</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg font-bold text-white mb-2">Checklist Action</h3>
              <ul className="text-gray-400 space-y-1 text-sm">
                <li>✅ Plan sur 3 semaines</li>
                <li>✅ Temps de setup pour chaque</li>
                <li>✅ Gain estimé en heures</li>
                <li>✅ Outils recommandés</li>
                <li>✅ Templates copiables</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Les 10 automatisations - Aperçu */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">⚡ Les 10 Automatisations</h2>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">#</th>
                  <th className="py-3 px-4 text-left">Automatisation</th>
                  <th className="py-3 px-4 text-center hidden md:table-cell">Setup</th>
                  <th className="py-3 px-4 text-center">Gain/Mois</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {[
                  { num: 1, name: 'Tri Emails Automatique', setup: '15 min', gain: '15h' },
                  { num: 2, name: 'Prise de RDV', setup: '10 min', gain: '10h' },
                  { num: 3, name: 'Veille Concurrentielle', setup: '20 min', gain: '8h' },
                  { num: 4, name: 'Reporting Auto', setup: '30 min', gain: '4h' },
                  { num: 5, name: 'Génération Contenu', setup: '15 min', gain: '12h' },
                  { num: 6, name: 'Templates DM', setup: '20 min', gain: '10h' },
                  { num: 7, name: 'Organisation Fichiers', setup: '25 min', gain: '7h' },
                  { num: 8, name: 'Facturation & Relances', setup: '30 min', gain: '4h' },
                  { num: 9, name: 'Scoring Leads', setup: '30 min', gain: '+30% conv.' },
                  { num: 10, name: 'Sync CRM', setup: '25 min', gain: '10h' },
                ].map((item) => (
                  <tr key={item.num} className="hover:bg-gray-750">
                    <td className="py-3 px-4 text-cyan-400 font-bold">{item.num}</td>
                    <td className="py-3 px-4 text-white">{item.name}</td>
                    <td className="py-3 px-4 text-center text-gray-400 hidden md:table-cell">{item.setup}</td>
                    <td className="py-3 px-4 text-center text-emerald-400 font-semibold">{item.gain}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-750">
                <tr>
                  <td colSpan={3} className="py-3 px-4 text-right text-white font-bold">Total :</td>
                  <td className="py-3 px-4 text-center text-emerald-400 font-bold text-lg">~80h/mois</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </motion.div>

        {/* CTA Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-2xl p-1">
            <div className="bg-gray-900 rounded-xl p-8 md:p-12 text-center">
              {!submitted ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    🎁 Télécharge le Kit Gratuitement
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Entre ton email et reçois le PDF + tous les templates instantanément.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ton@email.com"
                        required
                        className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all disabled:opacity-50"
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
                    Check ta boîte mail — le kit arrive dans quelques secondes.
                  </p>
                  <a 
                    href="/kit-automatisation-express.pdf" 
                    download
                    className="inline-block px-6 py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-400 transition-colors"
                  >
                    📥 Télécharger maintenant
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">Déjà téléchargé par</p>
          <p className="text-4xl font-bold text-white mb-2">500+</p>
          <p className="text-gray-400">entrepreneurs & équipes B2B</p>
        </motion.div>

        {/* CTA Final */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700"
        >
          <h2 className="text-xl font-bold text-white mb-4">
            Tu veux qu'on automatise tout ça pour toi ?
          </h2>
          <p className="text-gray-400 mb-6">
            On installe ces 10 automatisations en moins de 2 semaines.
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

export default KitAutomatisation;
