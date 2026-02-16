import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { colors } from '../utils/colors';

const POSTS = [
  {
    slug: 'whatsapp-ai-agent',
    title: "🤖 Agent WhatsApp IA : Support Client Automatisé",
    subtitle: "Workflow n8n complet + Guide. Scrape votre site et répond 24/7.",
    date: "17 Février 2026",
    readTime: "Template Gratuit",
    category: "Tutoriel Technique",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
  },
  {
    slug: 'linkedin-scraper',
    title: "🔥 Template : Le LinkedIn Scraper Ultime",
    subtitle: "Scraping + Enrichissement + Vérification. 66 nodes. Le workflow complet.",
    date: "8 Février 2026",
    readTime: "Template gratuit",
    category: "Growth Hacking",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
  },
  {
    slug: 'template-shopify-hubspot',
    title: "🛒 Template n8n : Shopify → HubSpot",
    subtitle: "Sync automatique des commandes. Workflow prêt à importer en 1 clic.",
    date: "8 Février 2026",
    readTime: "Template gratuit",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    slug: 'kit-automatisation',
    title: "🎁 Kit Automatisation Express",
    subtitle: "10 workflows clé-en-main pour gagner 4h/jour. Templates Make, n8n & Zapier inclus.",
    date: "8 Février 2026",
    readTime: "Guide gratuit",
    category: "Lead Magnet",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    slug: 'etat-ia-2026',
    title: "Le SDR Classique est Mort : Vive l'IA",
    subtitle: "Analyse de 50 agences en 2026. Comment l'automatisation a redistribué les cartes.",
    date: "7 Février 2026",
    readTime: "5 min de lecture",
    category: "Stratégie B2B",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
  },
];

const Blog: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.purple})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Blog & Ressources
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Décryptage des tendances IA, guides pratiques et stratégies d'automatisation.
          </p>
        </motion.div>

        {/* Grid des Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              <Link to={`/blog/${post.slug}`} className="block h-full">
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Contenu */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 text-xs text-gray-400">
                    <span className="px-2 py-1 bg-gray-700 rounded text-cyan-400 font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {post.subtitle}
                  </p>

                  <div className="mt-6 flex items-center text-cyan-400 text-sm font-medium group-hover:underline">
                    Lire l'article →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;