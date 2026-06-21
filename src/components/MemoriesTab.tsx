import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Heart, BookOpen, Star, Calendar, Filter, X, Sparkles, SlidersHorizontal, ArrowLeft, ArrowRight } from 'lucide-react';
import { Memory } from '../types';

interface MemoriesTabProps {
  memories: Memory[];
  onMemoryLike: (id: string) => void;
  onRequestCelebration: (type: 'hearts' | 'stars' | 'mix') => void;
}

export default function MemoriesTab({ memories, onMemoryLike, onRequestCelebration }: MemoriesTabProps) {
  const [selectedCategory, setSelectedCategory] = useState<'Todos' | 'Aventuras' | 'Historias' | 'Momentos Diarios'>('Todos');
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  
  // Interactive children book story state
  const [bookPage, setBookPage] = useState(0);
  const storyPages = [
    {
      title: "El Abrazo más Grande del Mundo",
      text: "Érase una vez en un bosque lleno de risas, donde un papá llamado Esteban tenía el superpoder de dar abrazos mágicos. Cada vez que Francisca (8) o Rafaella (12) se cansaban de jugar, corrían a los brazos de Esteban. ¡Fiuuu! Sentían que volaban sobre las nubes, seguros frente a todo viento o tormenta.",
      icon: "🌳"
    },
    {
      title: "Cuentos bajo las Estrellas",
      text: "Por las noches, la habitación se transformaba en un barco pirata o en un castillo encantado. Con su voz serena y una paciencia infinita, Esteban inventaba relatos donde el amor y los valores eran la brújula y la espada protectora. Esas palabras aún brillan hoy en el firmamento de sus corazones.",
      icon: "✨"
    },
    {
      title: "El Legado del Prisma",
      text: "Un día descubrieron que la música también une corazones. Al son de Pink Floyd y con poleras a juego, cantaban en el auto, enseñándoles de forma espontánea que la vida es más bella cuando la vivimos juntos, cantando y sonriendo con sinceridad.",
      icon: "🎸"
    }
  ];

  const filteredMemories = memories.filter(m => {
    if (selectedCategory === 'Todos') return true;
    return m.category === selectedCategory;
  });

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // don't open modal
    onMemoryLike(id);
    onRequestCelebration('hearts');
  };

  return (
    <div className="space-y-12">
      
      {/* Memories Hero Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-[32px] bg-white shadow-lg border border-secondary/10 group"
      >
        <div className="relative aspect-[4/5] md:aspect-[16/9] w-full overflow-hidden">
          <img 
            alt="Esteban y su hija celebrando" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5wq64JLjs8dwezLZ7b3gcZZKGELL623yakTBi9vzTu77-1xFqnT0Cvd54TJb1Qc3v-nSCIi2f_mZcrQbZLWb6IN2qgJPKjMdkd_XBUrbIPyaVsELnaYZdqSpHH40_yMfdVqsIm5s6zLRK3oh8fR1UD-JfG76zaxUXL5XBHFS9FXvfboo09zLKxtOjFHcc7fghxrmgIW2OIpDaVuGJNg4c_FkbQNhfRpdD40K0dKv9w8g9ri2YcDSag0ZZUOFYbHEU62s6u9eYZPM"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          {/* "Best Dad" Seal - Authentic Material Design Style */}
          <div className="absolute top-6 right-6 w-20 h-20 md:w-26 md:h-26 bg-secondary text-white rounded-full flex flex-col items-center justify-center border-4 border-white shadow-xl transform rotate-12 z-20 hover:scale-110 transition-transform">
            <span className="text-[10px] uppercase font-bold tracking-tighter text-amber-gold">El Mejor</span>
            <span className="text-xl md:text-2xl font-serif font-bold leading-none">PAPÁ</span>
            <span className="text-[9px] uppercase tracking-widest font-semibold mt-0.5">Esteban</span>
            <Star className="w-3.5 h-3.5 fill-current text-amber-gold mt-1" />
          </div>

          <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-2 leading-tight">
              ¡Feliz Día del Padre, Esteban!
            </h2>
            <p className="font-sans text-sm md:text-base text-white/95 max-w-xl font-medium">
              Gracias por ser el pilar de nuestra alegría y el mejor guía constante para Francisca (8 años) y Rafaella (12 años).
            </p>
          </div>
        </div>
      </motion.section>

      {/* Intro Quote */}
      <section className="text-center px-4 max-w-3xl mx-auto space-y-4">
        <div className="inline-block px-3 py-1 bg-secondary-container/15 rounded-full border border-secondary-container/30">
          <span className="text-xs font-semibold text-secondary uppercase tracking-widest">Celebrando tu amor</span>
        </div>
        <p className="font-serif text-lg md:text-xl text-zinc-600 italic leading-relaxed">
          "El amor de un padre es el primer capítulo de la historia de sus hijos, y el de Esteban fue una obra maestra escrita con ternura, risas y hermosa dedicación."
        </p>
      </section>

      {/* Bento Grid layout as requested */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Large Bento Card: Playtime in the outdoors */}
        <div className="md:col-span-2 relative h-[340px] rounded-2xl overflow-hidden shadow-sm group border border-zinc-200/40">
          <img 
            alt="Momentos en el bosque" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1ENtIhaEGhIotKwpfLcFDoiwfLHhE0a6zQ3rFkwLE7d2SjoaxFAshW337mSEAnR9G2gMtTmxQLXu85O970zprUaPnSU7pjMDPypLNVCdpfgg5hARmbvdHiNXLuBQSX-ZXlL57V2hEnJUgPDY7x9LIkweHCLpDA07spQanYa97WUpUBtFtCICN8pRmNv7pKbm4WuO1MskMl5VYkDeAs9UyTMqIEMdl5-UqtI3E_Sb_3A5LJ56gQYj2mdrqhJLaQfdS-J9dXhQUbCA"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent p-6 flex flex-col justify-end">
            <span className="text-[11px] font-bold text-amber-gold uppercase tracking-widest mb-1">Aventuras en Carretilla</span>
            <h3 className="font-serif text-xl md:text-2xl text-white font-bold mb-1">Tardes de juego inolvidables</h3>
            <p className="text-xs text-white/80 max-w-md leading-relaxed">
              En lo alto, con la naturaleza alrededor y las risas estallando libres en la tranquilidad de los senderos.
            </p>
          </div>
        </div>

        {/* Small Bento Card: Historias text card */}
        <div className="bg-amber-gold/10 p-6 rounded-2xl flex flex-col justify-center border border-amber-gold/30 space-y-3">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-secondary" />
          </div>
          <h4 className="font-serif text-lg font-bold text-secondary">Los Cuentos de Papá</h4>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Esos hermosos cuentos antes de dormir que Francisca (8 años) y Rafaella (12 años) aún atesoran en lo más hondo de su corazón y memoria.
          </p>
        </div>

        {/* Small Bento Card 2: Scrapbook macro photo */}
        <div className="relative h-[220px] rounded-2xl overflow-hidden shadow-sm group border border-zinc-200/40">
          <img 
            alt="Scrapbook vintage table"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARMjcqLuemNZ-qubisos3QyydVx7nLjzgFdUuNr7gayuFJpS1qZmAsSgXsQMU1_lhJdZX0AVDYBH5CgrAqA6Pefoq9qu_vaL0InmtiSVboYGc8puKy-yQTtFTaWFusR07Rd-d4erOPsi8KhxIw3f9tvg-vGchzA1xOzXVhQPzHOu3sDavxikml_sx88ZS1-eH8DSYTlQU4-MKyJdRybomj_q11ma7qrX_br68rEo_Pzo68-91y9KRkzA-WhIAYaAQtBLYi1TAS430"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex items-end">
            <span className="text-xs text-white font-serif italic">Un libro de historias infinitas</span>
          </div>
        </div>

        {/* Medium Bento Card: Su Gran Corazón */}
        <div className="md:col-span-2 bg-zinc-50 p-6 rounded-2xl border border-zinc-200/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-2 flex-grow">
            <h4 className="font-serif text-lg md:text-xl font-bold text-primary flex items-center gap-1.5">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Su Gran Corazón de Padre
            </h4>
            <p className="text-xs md:text-sm text-zinc-600 leading-relaxed max-w-lg">
              Esteban no solo es el protector del hogar; es el faro sincero de bondad que guía a Rafaella y Francisca con ternura firme y una sonrisa sincera que ilumina cualquier adversidad.
            </p>
          </div>
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20 hover:scale-110 transition-transform">
            <Star className="w-8 h-8 text-secondary fill-current" />
          </div>
        </div>

      </section>

      {/* Storybook interactive reading panel! */}
      <motion.section 
        className="bg-white rounded-2xl border border-zinc-200/70 shadow-xs overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="p-6 md:p-8 bg-zinc-50/50 border-b border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📖</span>
            <div>
              <h4 className="font-semibold text-zinc-800 text-sm md:text-base">Librito Digital de Relatos Cortos</h4>
              <p className="text-xs text-zinc-500">Un pequeño tributo a los momentos hermosos contados por Francisca y Rafaella</p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button 
              onClick={() => setBookPage((p) => Math.max(0, p - 1))}
              disabled={bookPage === 0}
              className="p-1.5 rounded-full bg-white border border-zinc-200 text-zinc-600 disabled:opacity-40"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold text-zinc-600">{bookPage + 1} / {storyPages.length}</span>
            <button 
              onClick={() => setBookPage((p) => Math.min(storyPages.length - 1, p + 1))}
              disabled={bookPage === storyPages.length - 1}
              className="p-1.5 rounded-full bg-white border border-zinc-200 text-zinc-600 disabled:opacity-40"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="p-6 md:p-8 space-y-4 relative min-h-[160px] flex flex-col justify-center bg-radial from-amber-gold/5 via-transparent to-transparent">
          <div className="flex items-start gap-4">
            <span className="text-4xl select-none" role="img" aria-label="story icon">
              {storyPages[bookPage].icon}
            </span>
            <div className="space-y-1">
              <h5 className="font-serif text-lg font-bold text-secondary">{storyPages[bookPage].title}</h5>
              <p className="text-xs md:text-sm text-zinc-600 leading-relaxed font-serif italic text-justify">
                "{storyPages[bookPage].text}"
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FILTERABLE ALBUM WALL */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl font-bold text-zinc-800 flex items-center gap-2">
              <Camera className="w-6 h-6 text-primary" />
              Álbum de Recuerdos Polaroid
            </h3>
            <p className="text-xs text-zinc-500">
              Haz clic en cualquiera de las fotos para abrir el álbum interactivo y leer más.
            </p>
          </div>

          {/* Filtering chips layout */}
          <div className="flex gap-1.5 overflow-x-auto pb-2 flex-nowrap shrink-0">
            {(['Todos', 'Aventuras', 'Historias', 'Momentos Diarios'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all shrink-0 select-none ${
                  selectedCategory === cat
                    ? 'bg-primary text-white border-primary shadow-xs'
                    : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Polaroid grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredMemories.map((mem) => (
              <motion.div
                key={mem.id}
                layoutId={`card-${mem.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedMemory(mem)}
                className="bg-white p-4 pb-6 rounded-xs shadow-md border border-zinc-200/50 cursor-pointer transform hover:rotate-1 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-100 rounded-2xs relative group">
                  <img 
                    src={mem.imageUrl} 
                    alt={mem.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1 bg-white/95 text-secondary text-[11px] font-bold rounded-full shadow-xs">
                      Ver Dedicatoria ✨
                    </span>
                  </div>
                  <span className="absolute top-2 left-2 text-[10px] uppercase font-bold text-white bg-secondary/80 px-2 py-0.5 rounded-full leading-none tracking-widest backdrop-blur-xs">
                    {mem.category}
                  </span>
                </div>
                
                <div className="mt-4 space-y-1">
                  <div className="flex items-center justify-between text-zinc-400 text-[11px] font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {mem.date}
                    </span>
                    <button
                      onClick={(e) => handleLike(mem.id, e)}
                      className="flex items-center gap-1 text-rose-500 hover:scale-110 transition-transform p-1 rounded-full hover:bg-rose-50"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span className="font-mono font-bold text-xs">{mem.likeCount}</span>
                    </button>
                  </div>
                  <h4 className="font-serif text-base font-bold text-zinc-800 leading-snug">
                    {mem.title}
                  </h4>
                  <p className="text-zinc-500 text-xs line-clamp-2 leading-relaxed">
                    {mem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* SCRAPBOOK MEMORY DETAIL MODAL */}
      <AnimatePresence>
        {selectedMemory && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <motion.div
              layoutId={`card-${selectedMemory.id}`}
              className="bg-white p-5 pb-8 rounded-lg max-w-xl w-full vertical-scrollbar scrapbook-paper border-4 border-double border-zinc-300 shadow-2xl relative"
            >
              {/* Polaroid pin decoration at top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-rose-500/80 border-4 border-white shadow-md flex items-center justify-center text-[10px] text-white">
                📌
              </div>

              <button 
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 p-1 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors text-zinc-600"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 mt-2">
                <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-50 rounded-xs border-2 border-zinc-200 shadow-inner">
                  <img 
                    src={selectedMemory.imageUrl} 
                    alt={selectedMemory.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="space-y-2 px-1">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-sky-100 text-sky-800 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {selectedMemory.category}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono font-medium flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedMemory.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-zinc-850">
                    {selectedMemory.title}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-zinc-700 leading-relaxed scrapbook-paper p-3 rounded-lg border border-zinc-200 text-justify">
                    {selectedMemory.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-200/60 mt-4">
                    <button
                      onClick={(e) => {
                        onMemoryLike(selectedMemory.id);
                        setSelectedMemory(prev => prev ? { ...prev, likeCount: prev.likeCount + 1 } : null);
                        onRequestCelebration('mix');
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-bold transition-colors"
                    >
                      <Heart className="w-4 h-4 fill-current text-rose-500" />
                      <span>¿Te encanta? ({selectedMemory.likeCount})</span>
                    </button>
                    
                    <span className="text-xs font-serif italic text-zinc-400">
                      Tributo de Amor
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
