import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Star, Send, Shield, Users, Gift, Smile, Award, Trash2 } from 'lucide-react';
import { Message } from '../types';

interface MessagesTabProps {
  messages: Message[];
  onAddMessage: (msg: Omit<Message, 'id' | 'heartCount' | 'isCustom' | 'timestamp'>) => void;
  onDeleteMessage: (id: string) => void;
  onMessageLike: (id: string) => void;
  onRequestCelebration: (type: 'hearts' | 'stars' | 'mix') => void;
}

export default function MessagesTab({
  messages,
  onAddMessage,
  onDeleteMessage,
  onMessageLike,
  onRequestCelebration
}: MessagesTabProps) {
  // New message form states
  const [author, setAuthor] = useState('');
  const [relation, setRelation] = useState('Hija');
  const [customRelation, setCustomRelation] = useState('');
  const [text, setText] = useState('');
  const [age, setAge] = useState('');
  const [visualTheme, setVisualTheme] = useState<Message['visualTheme']>('classic');
  const [sticker, setSticker] = useState<Message['sticker']>('heart');
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    onAddMessage({
      author: author.trim(),
      relation: relation === 'Otro' ? (customRelation.trim() || 'Familiar') : relation,
      text: text.trim(),
      age: age.trim() ? `${age.trim()} años` : undefined,
      visualTheme,
      sticker
    });

    // Reset fields
    setAuthor('');
    setText('');
    setAge('');
    setCustomRelation('');
    setSuccessMsg(true);
    
    onRequestCelebration('mix');

    setTimeout(() => {
      setSuccessMsg(false);
    }, 4000);
  };

  // Maps a visualTheme to the actual styling class names
  const getThemeClasses = (theme: Message['visualTheme']) => {
    switch (theme) {
      case 'classic':
        return 'bg-amber-gold/5 border-2 border-amber-gold/40 text-zinc-800 card-pattern-dots';
      case 'cosmic':
        return 'bg-zinc-900 border-2 border-primary/40 text-zinc-100 card-pattern-stripes';
      case 'forest':
        return 'bg-emerald-50/40 border-2 border-emerald-300/40 text-emerald-950 card-pattern-dots';
      case 'pastel':
        return 'bg-rose-50/50 border-2 border-rose-300/40 text-rose-950 card-pattern-stripes';
      default:
        return 'bg-amber-gold/5 border-2 border-amber-gold/40 text-zinc-805';
    }
  };

  // Maps sticker names to emojis/icons
  const renderStickerElement = (s: Message['sticker']) => {
    switch (s) {
      case 'heart':
        return <span className="text-3xl filter drop-shadow-md animate-bounce">❤️</span>;
      case 'star':
        return <span className="text-3xl filter drop-shadow-md">⭐</span>;
      case 'crown':
        return <span className="text-3xl filter drop-shadow-md">👑</span>;
      case 'gift':
        return <span className="text-3xl filter drop-shadow-md text-amber-500">🎁</span>;
      case 'cape':
        return <span className="text-3xl filter drop-shadow-md">🦸‍♂️</span>;
      case 'hug':
        return <span className="text-3xl filter drop-shadow-md">🤗</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-12">
      
      {/* Header Section */}
      <section className="text-center md:text-left space-y-2">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-zinc-800 tracking-tight">
          Mensajes de Amor para Papá
        </h2>
        <p className="text-sm md:text-base text-zinc-500 max-w-xl">
          Un espacio interactivo para compartir las palabras que nos unen de verdad, celebrando lo que hace de Esteban un papá genial.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Messages List */}
        <div className="md:col-span-7 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-glow bg-secondary/20"></div>
            <h3 className="font-serif text-xs uppercase tracking-widest text-secondary font-bold whitespace-nowrap">
              Cartas y Dedicatorias
            </h3>
            <div className="h-px flex-glow bg-secondary/20"></div>
          </div>

          <div className="space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 rounded-2xl relative overflow-hidden shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md ${getThemeClasses(msg.visualTheme)}`}
                >
                  {/* Decorative Sticker at Top Right */}
                  {msg.sticker !== 'none' && (
                    <div className="absolute top-4 right-4 z-10 selection:bg-transparent">
                      {renderStickerElement(msg.sticker)}
                    </div>
                  )}

                  {/* Quote icon banner background */}
                  <div className={`absolute -right-6 -top-6 opacity-5 ${msg.visualTheme === 'cosmic' ? 'text-white' : 'text-zinc-900'}`}>
                    <span className="text-[120px] select-none font-serif font-black">”</span>
                  </div>

                  <span className="inline-block text-secondary text-2xl font-serif font-black leading-none mb-2">
                    “
                  </span>

                  <blockquote className="font-serif text-base md:text-lg italic leading-relaxed text-justify mb-4 relative z-10 pr-6">
                    {msg.text}
                  </blockquote>

                  {/* Profile info footer */}
                  <div className="flex items-center justify-between border-t border-zinc-500/10 pt-4 relative z-10">
                    <div className="flex items-center gap-3">
                      {msg.avatarUrl ? (
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs">
                          <img 
                            src={msg.avatarUrl} 
                            alt={msg.author} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-secondary text-white font-serif font-bold text-sm flex items-center justify-center border-2 border-white shadow-xs select-none">
                          {msg.author.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <p className={`font-bold text-sm ${msg.visualTheme === 'cosmic' ? 'text-white' : 'text-zinc-800'}`}>
                          {msg.author}
                        </p>
                        <p className={`text-[10px] ${msg.visualTheme === 'cosmic' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                          {msg.relation}{msg.age ? `, ${msg.age}` : ''}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          onMessageLike(msg.id);
                          onRequestCelebration('hearts');
                        }}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold select-none transition-colors ${
                          msg.visualTheme === 'cosmic'
                            ? 'bg-white/10 hover:bg-white/20 text-rose-400'
                            : 'bg-rose-50 hover:bg-rose-100 text-rose-600'
                        }`}
                      >
                        <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
                        <span>{msg.heartCount}</span>
                      </button>

                      {msg.isCustom && (
                        <button
                          onClick={() => onDeleteMessage(msg.id)}
                          className="p-1 rounded-full text-zinc-400 hover:text-rose-500 hover:bg-rose-50 transition-colors"
                          title="Eliminar Mensaje"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Write Form & Qualities summary */}
        <div className="md:col-span-5 space-y-6">
          
          {/* Write Dedication Card form */}
          <section className="bg-white p-6 rounded-2xl border border-zinc-200/70 shadow-sm space-y-4">
            <h4 className="font-serif text-lg font-bold text-zinc-800 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Escribe una Dedicatoria
            </h4>
            <p className="text-xs text-zinc-500">
              ¡Dile a Esteban cuánto lo valoras! El mensaje se publicará abajo de inmediato.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-zinc-700 text-xs font-bold mb-1">Nombre del Autor <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Francisca, Rafaella, Mamá..."
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-hidden focus:border-secondary transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-zinc-700 text-xs font-bold mb-1">Edad <span className="text-zinc-400">(Opcional)</span></label>
                  <input
                    type="number"
                    placeholder="Ej: 10"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-hidden focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-zinc-700 text-xs font-bold mb-1">Relación <span className="text-red-500">*</span></label>
                  <select
                    value={relation}
                    onChange={(e) => setRelation(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-hidden focus:border-secondary transition-colors"
                  >
                    <option value="Hija Biológica">Hija Biológica</option>
                    <option value="Hija Adoptiva">Hija Adoptiva</option>
                    <option value="Hija">Hija</option>
                    <option value="Esposa">Esposa</option>
                    <option value="Amiga">Amiga</option>
                    <option value="Otro">Otro...</option>
                  </select>
                </div>
              </div>

              {relation === 'Otro' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="pt-1"
                >
                  <input
                    type="text"
                    required
                    placeholder="Ej: Primita, Tía..."
                    value={customRelation}
                    onChange={(e) => setCustomRelation(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-hidden focus:border-secondary transition-colors"
                  />
                </motion.div>
              )}

              <div>
                <label className="block text-zinc-700 text-xs font-bold mb-1">Dedicatoria para Esteban <span className="text-red-500">*</span></label>
                <textarea
                  required
                  rows={4}
                  placeholder="Por tu paciencia incondicional, tus sabios consejos e historias divertidas, ¡gracias por estar siempre con nosotras!"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-hidden focus:border-secondary transition-colors resize-none"
                />
              </div>

              {/* Theme Customizer chips */}
              <div>
                <label className="block text-zinc-700 text-xs font-bold mb-1">Color / Estilo de Carta</label>
                <div className="flex gap-2">
                  {(['classic', 'cosmic', 'forest', 'pastel'] as const).map(theme => (
                    <button
                      type="button"
                      key={theme}
                      onClick={() => setVisualTheme(theme)}
                      className={`flex-1 py-1 px-2 rounded-md text-[10px] font-bold uppercase tracking-wider text-center border capitalize transition-all select-none ${
                        visualTheme === theme
                          ? 'bg-secondary text-white border-secondary'
                          : 'bg-zinc-100 text-zinc-600 border-zinc-200'
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sticker Selector */}
              <div>
                <label className="block text-zinc-700 text-xs font-bold mb-1">Decoración / Sticker</label>
                <div className="flex justify-between gap-1.5 p-1 bg-zinc-50 border border-zinc-100 rounded-lg">
                  {(['heart', 'star', 'crown', 'gift', 'cape', 'none'] as const).map(st => (
                    <button
                      type="button"
                      key={st}
                      onClick={() => setSticker(st)}
                      className={`flex-1 max-w-[42px] py-1 text-center rounded-md transition-colors select-none ${
                        sticker === st ? 'bg-amber-100 border border-amber-300' : 'hover:bg-zinc-150'
                      }`}
                      title={st}
                    >
                      {st === 'heart' && '❤️'}
                      {st === 'star' && '⭐'}
                      {st === 'crown' && '👑'}
                      {st === 'gift' && '🎁'}
                      {st === 'cape' && '🦸‍♂️'}
                      {st === 'none' && '🚫'}
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-2.5 bg-secondary text-white rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md transition-all mt-4 hover:bg-secondary/90 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar Carta al Tablero</span>
              </motion.button>
            </form>

            <AnimatePresence>
              {successMsg && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3 bg-emerald-50 text-emerald-800 rounded-lg text-xs text-center border border-emerald-200 font-semibold"
                >
                  🎉 ¡Mensaje publicado éxitosamente en el tablero familiar!
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Special side element details */}
          <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
            <h4 className="font-serif text-lg font-bold text-primary mb-4">Lo que te hace especial</h4>
            <ul className="space-y-6 relative">
              
              {/* Timeline Connector Dashed Line */}
              <div className="absolute left-[11px] top-4 bottom-4 w-px border-l-2 border-dashed border-primary/30" />

              <li className="relative pl-7">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-sky-100 border-4 border-white flex items-center justify-center text-[10px] text-primary z-10 font-bold shadow-xs">
                  1
                </div>
                <h5 className="font-bold text-zinc-800 text-xs">Gran Corazón</h5>
                <p className="text-zinc-600 text-xs italic">"Tu capacidad incondicional de amar sin límites es lo que nos guía cada día."</p>
              </li>

              <li className="relative pl-7">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-sky-100 border-4 border-white flex items-center justify-center text-[10px] text-primary z-10 font-bold shadow-xs">
                  2
                </div>
                <h5 className="font-bold text-zinc-800 text-xs">Paciencia Infinita</h5>
                <p className="text-zinc-600 text-xs italic">"Incluso en nuestras peores travesuras o tormentas, la dulzura de tu calma es nuestro puerto seguro."</p>
              </li>

              <li className="relative pl-7">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-sky-100 border-4 border-white flex items-center justify-center text-[10px] text-primary z-10 font-bold shadow-xs">
                  3
                </div>
                <h5 className="font-bold text-zinc-800 text-xs">Siempre Presente</h5>
                <p className="text-zinc-600 text-xs italic">"No importa la tarea o la distancia, tu mirada atenta y alegre está en cada rincón."</p>
              </li>

            </ul>
          </section>

        </div>

      </div>

    </div>
  );
}
