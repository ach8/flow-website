import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CaptureForm from '../components/blog/CaptureForm';

const BlogPost: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-900 text-gray-300 leading-relaxed">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de l'Article */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-900/30 rounded-full">
            Stratégie B2B • IA 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Le SDR Classique est Mort : <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Pourquoi l'IA a changé les règles du jeu
            </span>
          </h1>
          <div className="flex items-center justify-center text-sm text-gray-400 gap-4">
            <span>Par Ali (Flow AI)</span>
            <span>•</span>
            <span>7 Février 2026</span>
            <span>•</span>
            <span>5 min de lecture</span>
          </div>
        </motion.header>

        {/* Image de Une */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20"
        >
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" 
            alt="Futuristic AI Concept" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Contenu Principal */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-gray-200 font-medium mb-8">
            En 2024, on parlait d'assistants. En 2026, on parle d'agents autonomes. 
            Si votre équipe commerciale passe encore 4h par jour à faire du copier-coller sur LinkedIn, vous perdez déjà la bataille.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. La Fin de la Prospection Manuelle</h2>
          <p>
            Soyons honnêtes : personne n'aime recevoir des messages génériques. Et personne n'aime les envoyer.
            Le taux de réponse moyen sur LinkedIn est passé sous la barre des 2% pour les messages non-personnalisés.
          </p>
          <p>
            Pourquoi ? Parce que tout le monde utilise les mêmes templates ChatGPT de 2023.
            Aujourd'hui, l'IA ne sert plus à *écrire* le message, elle sert à *comprendre* le prospect.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. L'Ère de l'Hyper-Personnalisation (à l'échelle)</h2>
          <p>
            Chez Flow AI, nous avons analysé 50 agences performantes en 2026. Le constat est sans appel :
            celles qui surperforment utilisent des **Agents IA Multi-Modaux**.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-300">
            <li>Ils analysent les derniers posts du prospect.</li>
            <li>Ils écoutent ses podcasts.</li>
            <li>Ils détectent ses signaux d'achat (levée de fonds, recrutement...).</li>
            <li>Ils rédigent un message unique, impossible à distinguer d'un humain.</li>
          </ul>

          <div className="my-12 p-6 bg-gray-800/50 border-l-4 border-cyan-500 rounded-r-lg">
            <p className="italic text-gray-300 mb-0">
              "L'IA ne va pas remplacer les vendeurs. Les vendeurs qui utilisent l'IA vont remplacer ceux qui ne le font pas."
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Le Modèle "Vibe Coding"</h2>
          <p>
            L'automatisation n'est plus réservée aux ingénieurs. Avec le *Vibe Coding*, nous construisons des workflows complexes en langage naturel.
            Cela permet d'itérer 10x plus vite sur vos scripts de vente.
          </p>

          {/* LEAD MAGNET INSERTION */}
          <CaptureForm 
            title="📥 Téléchargez le Rapport Secret IA 2026"
            subtitle="Obtenez l'analyse complète + 3 Scripts de Vente IA prêts à copier-coller."
            magnetId="RAPPORT-SECRET-IA-2026"
          />

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          <p>
            Le train est en marche. Vous avez deux choix : continuer à payer des SDR pour faire du travail de robot, 
            ou laisser les robots faire le travail pour que vos SDR puissent enfin se concentrer sur le closing.
          </p>
          <p>
            Chez Flow AI, nous avons choisi notre camp. Et vous ?
          </p>
        </div>

        {/* Footer de l'Article */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center">
          <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
            ← Retour au Blog
          </Link>
          <div className="flex gap-4">
            {/* Social Share Buttons could go here */}
          </div>
        </div>

      </article>
    </div>
  );
};

export default BlogPost;