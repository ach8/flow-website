import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, ArrowRight, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenerativeAI } from '@google/generative-ai';

const LiveChatbotDemo: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: 'bot' | 'user'; text: string; action?: boolean }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialisation de Gemini avec la clé fournie (en prod, utiliser import.meta.env.VITE_GEMINI_API_KEY)
  const genAI = new GoogleGenerativeAI("AIzaSyDo0jIflaZecrKbgk2f7DjdouuGB2tohlw");
  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash",
    systemInstruction: "Tu es l'assistant virtuel IA de l'agence 'Flow IA'. Ton but est de répondre de manière concise, polie et professionnelle aux questions des visiteurs. L'agence propose la création de chatbots, des systèmes de génération de leads, d'emailing personnalisé, d'agents vocaux et d'intégration CRM. Ta mission principale est de toujours ramener la conversation vers la prise de rendez-vous pour un audit stratégique gratuit (en disant par exemple 'Le mieux est d'en discuter lors d'un audit gratuit, voulez-vous prendre rendez-vous ?'). Ne donne pas de prix exacts, dis que c'est sur-mesure. Fais des réponses courtes (2-3 phrases maximum)."
  });

  const greeting = t('chatbot.greeting');
  const quickReplies = t('chatbot.quickReplies', { returnObjects: true }) as string[];
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{ type: 'bot', text: greeting }]);
      }, 500);
    }
  }, [isOpen, messages.length, greeting]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { type: 'user', text }]);
    setInput('');
    setIsLoading(true);

    try {
      // Si l'utilisateur clique sur le bouton de prise de RDV ou écrit quelque chose de similaire
      if (text === "Prendre RDV" || text.toLowerCase().includes("rdv") || text.toLowerCase().includes("rendez-vous")) {
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            type: 'bot', 
            text: "Excellente décision ! Vous pouvez choisir le créneau qui vous convient juste ici 👇",
            action: true
          }]);
          setIsLoading(false);
        }, 500);
        return;
      }

      // Nettoyage de l'historique : Gemini exige que le premier message soit 'user'
      const cleanHistory = messages.map(m => ({
        role: m.type === 'bot' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));
      
      if (cleanHistory.length > 0 && cleanHistory[0].role === 'model') {
        cleanHistory.shift();
      }

      // Appel à Gemini
      const chat = model.startChat({
        history: cleanHistory
      });

      const result = await chat.sendMessage(text);
      const responseText = result.response.text();

      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: responseText,
        action: responseText.toLowerCase().includes("rendez-vous") || responseText.toLowerCase().includes("audit") 
      }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: "Désolé, je rencontre un petit problème technique. Le plus simple est de réserver un audit gratuit pour que nous puissions échanger !",
        action: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-500 transition-colors hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-4 sm:right-6 md:bottom-8 md:right-8 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[500px] max-h-[80vh] flex flex-col card-elevated rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-gray-900 p-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Assistant Flow</h3>
                  <p className="text-xs text-green-400">En ligne</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-950/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} gap-2`}>
                  {msg.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1 text-blue-400">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div className="flex flex-col gap-2 max-w-[80%]">
                    <div 
                      className={`p-3 rounded-2xl text-sm ${
                        msg.type === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700'
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.action && (
                      <button
                        onClick={() => navigate('/rendez-vous')}
                        className="bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50 rounded-xl p-2 text-sm flex items-center justify-center gap-2 transition-colors"
                      >
                        {t('chatbot.bookCall')} <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Quick Replies */}
              {messages.length === 1 && !isLoading && (
                <div className="flex flex-wrap gap-2 pt-2 pl-10">
                  {quickReplies.map((reply, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(reply)}
                      className="bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full px-3 py-1 text-xs transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1 text-blue-400">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-800 border border-gray-700 rounded-tl-none flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-white/10 bg-gray-900">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('chatbot.inputPlaceholder')}
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 transition-colors shrink-0"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 ml-1" />}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChatbotDemo;
