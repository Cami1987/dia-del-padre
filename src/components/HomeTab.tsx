import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Shield, Users, Sparkles, Star, Award, Gift, Smile } from 'lucide-react';
import { Message } from '../types';

interface HomeTabProps {
  messages: Message[];
  onMessageLike: (id: string) => void;
  onRequestCelebration: (type: 'hearts' | 'stars' | 'mix') => void;
}

export default function HomeTab({ messages, onMessageLike, onRequestCelebration }: HomeTabProps) {
  // Local interaction for virtual affection wall
  const [affectionStats, setAffectionStats] = useState(() => {
    const saved = localStorage.getItem('esteban_affection_stats');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return {
      hugCount: 142,
      coffeeCount: 88,
      medalCount: 215,
      loveCount: 196
    };
  });

  const saveAffection = (newStats: typeof affectionStats) => {
    localStorage.setItem('esteban_affection_stats', JSON.stringify(newStats));
    setAffectionStats(newStats);
  };

  const handleAffectionClick = (key: keyof typeof affectionStats, isHearts?: boolean) => {
    const updated = {
      ...affectionStats,
      [key]: affectionStats[key] + 1
    };
    saveAffection(updated);
    onRequestCelebration(isHearts ? 'hearts' : 'mix');
  };

  const rafaMsg = messages.find(m => m.id === 'msg-rafaella');
  const franMsg = messages.find(m => m.id === 'msg-francisca');

  return (
    <div className="space-y-12">
      {/* Hero Banner Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[24px] bg-white shadow-lg border border-primary/10 group"
      >
        <div className="relative aspect-[4/5] md:aspect-[16/9] w-full overflow-hidden">
          <img 
            alt="Esteban celebrando con su familia" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2xadyA6nmU-PjI2Ui_iYJ2p9EZ1eQmuh_Y9Y-9a6_kRQrtHCrKuWdmZ8QVgX4PsDu5yePAxXAH33wkebdJhHoVU4VEHeHlB2Xwt9WWSQ_TqQ3ZxC_jANNgb4m3W9Mv56x60eJ4M4_-lJhVOVnWA5QHNyba0DzU6L7f8D-VCYo7uYC9mmaja7ktDLbdDO0slbnuuyXQut6v0YjRNB3yMIgtF8Ig1bNH-qu_y0w1jhLOEUobirP_XVl_g7S3U7QV9UXMKzVHShP9Y4"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
          
          {/* Decorative Floaters */}
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-semibold">
            <Sparkles className="w-4.5 h-4.5 text-amber-gold animate-pulse" />
            <span>Celebración Familiar 2026</span>
          </div>

          <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
            <span className="inline-block px-3 py-1 bg-secondary text-white rounded-full text-[11px] uppercase tracking-wider font-bold mb-2">
              Celebración Especial
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-2 leading-tight tracking-tight">
              Esteban, el mejor papá del mundo
            </h2>
            <p className="font-sans text-sm md:text-base text-white/90 max-w-xl leading-relaxed">
              Hoy celebramos al hombre generoso que con infinito amor, paciencia y alegría guía el hermoso camino de Francisca y Rafaella.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Intro Quote */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center px-4 max-w-2xl mx-auto"
      >
        <div className="inline-block px-3 py-1.5 mb-4 bg-primary/5 rounded-full border border-primary/10">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary">Un legado de amor incondicional</span>
        </div>
        <p className="font-serif text-xl md:text-2xl text-zinc-700 italic leading-relaxed">
          "Ser padre no es solo dar la vida, es elegir estar cada día, con paciencia, ternura y una sonrisa que ilumina el corazón."
        </p>
        <div className="mt-4 flex justify-center gap-1 text-amber-gold">
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
        </div>
      </motion.section>

      {/* Dedication Messages */}
      <div className="space-y-8">
        
        {/* Rafaella's Dedication */}
        {rafaMsg && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-200/60 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-5/12 h-80 md:h-auto overflow-hidden relative min-h-[340px]">
                <img 
                  alt="Rafaella y Esteban" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMTRq-biGZK3rN-Tz4sThqXkU5ccr9Q9REaOE9gDKdn7pRMO6r3TGPoQdD9VFoL_cIuOelBjDNH6-6PNB8SZEhttoapUsLryBlT5Q1tqk4_KR51kKAAMz3TE4QSQDCDoXYXnvgdNSxoYxhLx2_W8w4IaUYsa-g0jhb-l7Ng8XIg8qm0P4hqb1p4kL5wmRMYJEeRcYDajw3yDFgDaPOzOEfMzM-3VAxNcyKYQYcav_8YkXQtDZ-U_0pPVKfACVyNOkSPzeLxgsZtjg"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
                <div className="absolute bottom-4 left-4 md:hidden text-white font-serif text-lg font-bold">
                  Conexión y complicidad
                </div>
              </div>
              <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-white to-amber-gold/5">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5 text-secondary">
                      <Heart className="w-5 h-5 fill-current text-rose-500" />
                      <span className="font-semibold text-xs tracking-wider uppercase">De Rafaella (12 años)</span>
                    </div>
                    <span className="text-xs text-zinc-400 font-medium">Hija Mayor</span>
                  </div>
                  <p className="font-serif text-sm md:text-base text-zinc-700 mb-6 leading-relaxed italic text-justify scrapbook-paper p-4 rounded-xl border border-secondary/10">
                    "{rafaMsg.text}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100">
                  <button 
                    onClick={() => {
                      onMessageLike(rafaMsg.id);
                      onRequestCelebration('hearts');
                    }}
                    className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 text-rose-600 font-semibold text-xs transition-all hover:bg-rose-100 active:scale-95"
                  >
                    <Heart className="w-4 h-4 fill-current text-rose-400 transition-transform group-hover:scale-120" />
                    <span>Dar Amor a su Carta ({rafaMsg.heartCount})</span>
                  </button>
                  <p className="font-serif text-base font-bold text-primary">
                    Con todo mi cariño, Tu hija Rafaella ❤️
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Photo Grid Transition */}
        <div className="grid grid-cols-2 gap-4 h-48 md:h-64">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-sm relative group"
          >
            <img 
              alt="Recuerdo familiar" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPyhHcLf6CYFNYQ6q0o6fL-1uhO8O9jvVMP8e5KCuvZ25xTV_NopWnZvmykf0kmpauPrjtA-m1wtAX1mAPu5JWzRI2HRPK8dkNeMBDhC7f6stXrpttvmJv2Ys7K-ILrkPhr4m3BzIrmvbG8i-TdfLZL_CH5w2oIjgoLHjOdUjt3Tmh-uamwNcb9mln-YRhmIn-k3-TOV7w_zruUMFexOlJ-eLmc1Xfn7n8Ja2E2K7vlHYxJ0R-trqBDCi08BwrTR1ZCzBMKuJ9b0k"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white">
              <span className="font-serif text-xs md:text-sm">Risas en el Campo</span>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-sm relative group"
          >
            <img 
              alt="Esteban y Francisca" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6zW4vw_IuwOGpb4nGTVr0gFgyIJMZdGGmLwbhufqxUfKZSf8MKkGf22Pa49-7tJxD9uEGrXz83aLAEfX1KKNRAL5gNOGeEgx7WkCtA9l8jfdJ6LQTgEddutyGeKzLQB70ylrazaPae4QTTfycVczM6wpy5tWt_N5Vs7RAq2rdHyQCb2t0gvX15gBhZ_lYTMyUHmfcGuRYTk40RUFuVcrjqDqNDVNtBWdeR_BDrB36LcMT7EPkiOtQmXgpqHZwqZXWr7J-tYdsDw0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white">
              <span className="font-serif text-xs md:text-sm">Sonrisas Únicas</span>
            </div>
          </motion.div>
        </div>

        {/* Francisca's Dedication */}
        {franMsg && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-200/60 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row-reverse">
              <div className="md:w-5/12 h-80 md:h-auto overflow-hidden relative min-h-[340px]">
                <img 
                  alt="Francisca y Esteban" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6zW4vw_IuwOGpb4nGTVr0gFgyIJMZdGGmLwbhufqxUfKZSf8MKkGf22Pa49-7tJxD9uEGrXz83aLAEfX1KKNRAL5gNOGeEgx7WkCtA9l8jfdJ6LQTgEddutyGeKzLQB70ylrazaPae4QTTfycVczM6wpy5tWt_N5Vs7RAq2rdHyQCb2t0gvX15gBhZ_lYTMyUHmfcGuRYTk40RUFuVcrjqDqNDVNtBWdeR_BDrB36LcMT7EPkiOtQmXgpqHZwqZXWr7J-tYdsDw0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
                <div className="absolute bottom-4 left-4 md:hidden text-white font-serif text-lg font-bold">
                  La pequeña consentida
                </div>
              </div>
              <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-bl from-white to-primary/5">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5 text-primary">
                      <Sparkles className="w-5 h-5 text-amber-500" />
                      <span className="font-semibold text-xs tracking-wider uppercase text-sky-700">De Francisca (8 años)</span>
                    </div>
                    <span className="text-xs text-zinc-400 font-medium">Hija Menor</span>
                  </div>
                  <p className="font-serif text-sm md:text-base text-zinc-700 mb-6 leading-relaxed italic text-justify scrapbook-paper p-4 rounded-xl border border-primary/10">
                    "{franMsg.text}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100">
                  <button 
                    onClick={() => {
                      onMessageLike(franMsg.id);
                      onRequestCelebration('stars');
                    }}
                    className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 font-semibold text-xs transition-all hover:bg-sky-100 active:scale-95"
                  >
                    <Star className="w-4 h-4 fill-current text-sky-400 transition-transform group-hover:scale-120" />
                    <span>Dar Estrellas a su Carta ({franMsg.heartCount})</span>
                  </button>
                  <p className="font-serif text-base font-bold text-secondary">
                    Con todo mi amor, Francisca ❤️
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        )}

      </div>

      {/* Quality Cards Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 flex items-start gap-4 hover:bg-primary/10 transition-colors">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold text-primary mb-1">Nuestro Protector</h4>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Un refugio seguro para sus hijas, siempre presente con sabios consejos y firmeza amorosa para cuidar e iluminar cada uno de sus pasos.
            </p>
          </div>
        </div>

        <div className="bg-secondary/5 p-6 rounded-2xl border border-secondary/10 flex items-start gap-4 hover:bg-secondary/10 transition-colors">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-md">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold text-secondary mb-1">Unión Familiar</h4>
            <p className="text-sm text-zinc-600 leading-relaxed">
              El corazón alegre y bondadoso de la familia, que nos mantiene unidos frente a cualquier dificultad, multiplicando la felicidad de nuestro hogar.
            </p>
          </div>
        </div>
      </motion.section>

      {/* NEW INTERACTIVE SECTION: Muro del Cariño para Esteban */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-amber-gold/10 p-6 md:p-8 rounded-2xl border border-amber-gold/30 text-center space-y-6"
      >
        <div className="max-w-md mx-auto space-y-2">
          <span className="text-xs font-bold uppercase text-secondary tracking-widest">Panel de Interrogantes</span>
          <h3 className="font-serif text-2xl font-bold text-zinc-800">
            Muro de Mimos para Papá Esteban
          </h3>
          <p className="text-xs md:text-sm text-zinc-500">
            ¡Envía cariños interactivos en tiempo real! Haz clic en cualquiera de estos botoncitos para enviarle ráfagas de amor y estrellas a su día especial.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAffectionClick('hugCount', true)}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-amber-gold/20 shadow-xs hover:shadow-sm"
          >
            <span className="text-2xl mb-1">🤗</span>
            <span className="font-semibold text-xs text-zinc-700">Abrazo Fuerte</span>
            <span className="font-mono text-xs text-secondary mt-1 font-bold">{affectionStats.hugCount} recibidos</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAffectionClick('coffeeCount', false)}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-amber-gold/20 shadow-xs hover:shadow-sm"
          >
            <span className="text-2xl mb-1">☕</span>
            <span className="font-semibold text-xs text-zinc-700">Café y Conversa</span>
            <span className="font-mono text-xs text-secondary mt-1 font-bold">{affectionStats.coffeeCount} enviados</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAffectionClick('medalCount', false)}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-amber-gold/20 shadow-xs hover:shadow-sm"
          >
            <span className="text-2xl mb-1">🎖️</span>
            <span className="font-semibold text-xs text-zinc-700">Súper Héroe</span>
            <span className="font-mono text-xs text-secondary mt-1 font-bold">Medalla #{affectionStats.medalCount}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAffectionClick('loveCount', true)}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-amber-gold/20 shadow-xs hover:shadow-sm"
          >
            <span className="text-2xl mb-1">❤️</span>
            <span className="font-semibold text-xs text-zinc-700">Te Amo Papá</span>
            <span className="font-mono text-xs text-secondary mt-1 font-bold">{affectionStats.loveCount} corazones</span>
          </motion.button>
        </div>
      </motion.section>

    </div>
  );
}
