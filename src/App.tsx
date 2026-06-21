import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, BookOpen, Award, Cake, Menu, Share2, Smile, Calendar, HeartHandshake } from 'lucide-react';

import { Message, Memory, Quality } from './types';
import { INITIAL_MESSAGES, INITIAL_MEMORIES, INITIAL_QUALITIES } from './data';

import HomeTab from './components/HomeTab';
import MemoriesTab from './components/MemoriesTab';
import MessagesTab from './components/MessagesTab';
import QualitiesTab from './components/QualitiesTab';
import ConfettiEffect from './components/ConfettiEffect';

export default function App() {
  // Mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active Screen Tab state
  const [activeTab, setActiveTab] = useState<'inicio' | 'recuerdos' | 'mensajes' | 'valores'>('inicio');

  // Load state from localStorage with safe error handling and standard fallbacks
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('esteban_tribute_messages');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed parsing saved messages', e);
      }
    }
    return INITIAL_MESSAGES;
  });

  const [memories, setMemories] = useState<Memory[]>(() => {
    const saved = localStorage.getItem('esteban_tribute_memories');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed parsing saved memories', e);
      }
    }
    return INITIAL_MEMORIES;
  });

  const [qualities, setQualities] = useState<Quality[]>(() => {
    const saved = localStorage.getItem('esteban_tribute_qualities');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed parsing saved qualities', e);
      }
    }
    return INITIAL_QUALITIES;
  });

  // Persistent save triggers
  useEffect(() => {
    localStorage.setItem('esteban_tribute_messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('esteban_tribute_memories', JSON.stringify(memories));
  }, [memories]);

  useEffect(() => {
    localStorage.setItem('esteban_tribute_qualities', JSON.stringify(qualities));
  }, [qualities]);

  // Particle Celebration triggers
  const [celebrationSignal, setCelebrationSignal] = useState(0);
  const [celebrationType, setCelebrationType] = useState<'hearts' | 'stars' | 'mix'>('mix');

  const triggerCelebration = (type: 'hearts' | 'stars' | 'mix') => {
    setCelebrationType(type);
    setCelebrationSignal((sig) => sig + 1);
  };

  // State actions
  const handleMessageLike = (id: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, heartCount: m.heartCount + 1 } : m))
    );
  };

  const handleMemoryLike = (id: string) => {
    setMemories((prev) =>
      prev.map((m) => (m.id === id ? { ...m, likeCount: m.likeCount + 1 } : m))
    );
  };

  const handleQualityLike = (id: string) => {
    setQualities((prev) =>
      prev.map((q) => (q.id === id ? { ...q, likes: q.likes + 1 } : q))
    );
  };

  const handleAddMessage = (newMsg: Omit<Message, 'id' | 'heartCount' | 'isCustom' | 'timestamp'>) => {
    const messageRecord: Message = {
      ...newMsg,
      id: `custom-msg-${Date.now()}`,
      heartCount: 1,
      isCustom: true,
      timestamp: new Date().toISOString()
    };
    setMessages((prev) => [messageRecord, ...prev]);
  };

  const handleDeleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  const handleShare = () => {
    triggerCelebration('mix');
    if (navigator.share) {
      navigator.share({
        title: '¡Tributo Especial al Día del Padre, Esteban!',
        text: 'Celebramos con mucho cariño al mejor papá del mundo, Esteban.',
        url: window.location.href,
      }).catch(err => console.log(err));
    } else {
      alert('¡Enlace copiado al portapapeles con mucho amor para regalar a Esteban! 💝');
    }
  };

  return (
    <div className="min-h-screen bg-warm-bg text-[#2D2D2A] pb-24 md:pb-8 flex flex-col font-sans transition-colors duration-300 relative">
      
      {/* Decorative organic background paper textures */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 scrapbook-paper" />

      {/* Confetti canvas overlay triggers */}
      <ConfettiEffect triggerSignal={celebrationSignal} type={celebrationType} />

      {/* Modern Header Navigation */}
      <header className="bg-warm-bg/95 backdrop-blur-md sticky top-0 z-40 border-b border-zinc-200/50 shadow-xs">
        <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 select-none">
            <Cake className="w-5.5 h-5.5 text-secondary" />
            <h1 className="font-serif italic text-xl font-bold text-primary tracking-tight">
              Pá & Yo <span className="not-italic text-xs font-sans tracking-widest text-[#8B5E3C] ml-2 uppercase font-semibold hidden sm:inline">Edición Especial</span>
            </h1>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-3">
            {[
              { key: 'inicio', label: 'Inicio', icon: Smile },
              { key: 'recuerdos', label: 'Recuerdos', icon: Calendar },
              { key: 'mensajes', label: 'Mensajes d’Amor', icon: Heart },
              { key: 'valores', label: 'Cualidades', icon: Award },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all select-none ${
                    isSelected
                      ? 'bg-secondary text-white shadow-xs'
                      : 'text-zinc-600 hover:text-secondary hover:bg-zinc-100'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}

            <button
              onClick={handleShare}
              className="p-2 text-zinc-500 hover:text-primary rounded-full hover:bg-zinc-100 transition-colors"
              title="Compartir Tributo"
            >
              <Share2 className="w-4.5 h-4.5" />
            </button>
          </nav>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={handleShare}
              className="p-2 text-zinc-500 rounded-full hover:bg-zinc-100 transition-colors"
            >
              <Share2 className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="p-2 text-zinc-700 rounded-lg hover:bg-zinc-100 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Interactive Mobile Collapsible Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-200/50 shadow-xs px-5 py-4 space-y-2 relative z-55 overflow-hidden"
          >
            {[
              { key: 'inicio', label: 'Inicio', icon: Smile },
              { key: 'recuerdos', label: 'Recuerdos Polaroid', icon: Calendar },
              { key: 'mensajes', label: 'Mensajes de Amor', icon: Heart },
              { key: 'valores', label: 'Cualidades y Valores', icon: Award },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => {
                    setActiveTab(tab.key as any);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold leading-none text-left transition-colors ${
                    isSelected
                      ? 'bg-secondary text-white'
                      : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-805'
                  }`}
                >
                  <TabIcon className="w-4.5 h-4.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-5 py-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {activeTab === 'inicio' && (
              <HomeTab
                messages={messages}
                onMessageLike={handleMessageLike}
                onRequestCelebration={triggerCelebration}
              />
            )}

            {activeTab === 'recuerdos' && (
              <MemoriesTab
                memories={memories}
                onMemoryLike={handleMemoryLike}
                onRequestCelebration={triggerCelebration}
              />
            )}

            {activeTab === 'mensajes' && (
              <MessagesTab
                messages={messages}
                onAddMessage={handleAddMessage}
                onDeleteMessage={handleDeleteMessage}
                onMessageLike={handleMessageLike}
                onRequestCelebration={triggerCelebration}
              />
            )}

            {activeTab === 'valores' && (
              <QualitiesTab
                qualities={qualities}
                onQualityLike={handleQualityLike}
                onRequestCelebration={triggerCelebration}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Floating Navigation Bar on Mobile devices (Matching Image 1 & 2 Perfectly) */}
      <nav className="fixed bottom-0 left-0 w-full z-40 flex justify-around items-center px-2 pb-6 pt-3 bg-white/95 backdrop-blur-lg rounded-t-2xl shadow-[0px_-4px_20px_rgba(142,78,20,0.12)] border-t border-zinc-200/50 md:hidden">
        {[
          { key: 'inicio', label: 'Inicio', icon: Smile },
          { key: 'recuerdos', label: 'Recuerdos', icon: Calendar },
          { key: 'mensajes', label: 'Mensajes', icon: Heart },
          { key: 'valores', label: 'Cualidades', icon: Award },
        ].map((tab) => {
          const TabIcon = tab.icon;
          const isSelected = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex flex-col items-center justify-center py-1.5 transition-all outline-hidden ${
                isSelected
                  ? 'bg-amber-gold/20 text-secondary px-4 rounded-xl font-bold scale-102 font-serif'
                  : 'text-zinc-500 font-sans'
              }`}
            >
              <TabIcon className="w-5.5 h-5.5" />
              <span className="text-[10px] mt-1 font-semibold leading-none">
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Heart warming footer */}
      <footer className="mt-auto py-8 bg-zinc-50 border-t border-zinc-200/30 text-center space-y-1 relative z-15 select-none">
        <p className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold flex items-center justify-center gap-1">
          <span>Diseñado para Esteban con</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
          <span>por Francisca y Rafaella</span>
        </p>
        <p className="text-[10px] text-zinc-400">
          Un legado de amor incondicional, alegría e historias inolvidables. © 2026
        </p>
      </footer>

    </div>
  );
}
