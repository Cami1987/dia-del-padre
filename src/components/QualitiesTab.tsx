import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Heart, Check, X, Shield, Sparkles, HelpCircle, Trophy, BookOpen, Users, Compass } from 'lucide-react';
import { Quality, TriviaQuestion } from '../types';
import { TRIVIA_QUESTIONS } from '../data';

interface QualitiesTabProps {
  qualities: Quality[];
  onQualityLike: (id: string) => void;
  onRequestCelebration: (type: 'hearts' | 'stars' | 'mix') => void;
}

export default function QualitiesTab({ qualities, onQualityLike, onRequestCelebration }: QualitiesTabProps) {
  
  // Trivia State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [triviaFinished, setTriviaFinished] = useState(false);

  // Profile icon mapping helper
  const getQualityIcon = (iconName: Quality['iconName']) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-6 h-6 text-white" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-white text-rose-100 fill-current" />;
      case 'Users':
        return <Users className="w-6 h-6 text-white" />;
      case 'Smile':
        return <Compass className="w-6 h-6 text-white" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-white" />;
      default:
        return <Award className="w-6 h-6 text-white" />;
    }
  };

  const handleOptionSelect = (optionIdx: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIdx);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null || isAnswered) return;
    
    const isCorrect = selectedOption === TRIVIA_QUESTIONS[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      setScore((s) => s + 1);
      onRequestCelebration('stars');
    } else {
      onRequestCelebration('hearts');
    }
    
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    
    if (currentQuestionIndex + 1 < TRIVIA_QUESTIONS.length) {
      setCurrentQuestionIndex((idx) => idx + 1);
    } else {
      setTriviaFinished(true);
      onRequestCelebration('mix');
    }
  };

  const handleRestartTrivia = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setTriviaFinished(false);
  };

  const currentQuestion = TRIVIA_QUESTIONS[currentQuestionIndex];

  return (
    <div className="space-y-12">
      
      {/* Intro section */}
      <section className="text-center md:text-left space-y-2">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-zinc-800 tracking-tight">
          Cualidades & Desafíos Familiares
        </h2>
        <p className="text-sm md:text-base text-zinc-500 max-w-xl">
          Descubre cuáles son los rasgos y valores favoritos que definen a Esteban, y pon a prueba cuánto conoces las anécdotas de nuestro papá preferido.
        </p>
      </section>

      {/* Grid: Left - Qualities list, Right - Interactive Trivia Game */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Endorsable qualities */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-glow bg-secondary/20"></div>
            <h3 className="font-serif text-xs uppercase tracking-widest text-secondary font-bold whitespace-nowrap">
              Sus Valores Ejemplares
            </h3>
            <div className="h-px flex-glow bg-secondary/20"></div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {qualities.map((qual) => (
              <motion.div
                key={qual.id}
                whileHover={{ scale: 1.01 }}
                className="bg-white p-5 rounded-2xl border border-zinc-200/60 shadow-xs hover:shadow-xs flex flex-col justify-between"
              >
                <div className="flex gap-4 items-start pb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-xs border border-secondary/20">
                    {getQualityIcon(qual.iconName)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-bold text-zinc-800">{qual.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed text-justify">{qual.description}</p>
                  </div>
                </div>

                <div className="bg-zinc-50/70 rounded-xl p-3 border border-zinc-100 mb-4 font-serif text-xs text-zinc-650 italic text-center">
                  "{qual.quote}"
                </div>

                <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
                  <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                    Conexión de Admiración
                  </span>
                  
                  <button
                    onClick={() => {
                      onQualityLike(qual.id);
                      onRequestCelebration('hearts');
                    }}
                    className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 hover:bg-secondary/15 text-secondary font-bold text-xs select-none transition-all active:scale-95 cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 text-secondary fill-current transition-transform group-hover:scale-125" />
                    <span>Apoyar Virtud ({qual.likes})</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Mini trivia quiz card */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-glow bg-primary/20 bg-sky-300"></div>
            <h3 className="font-serif text-xs uppercase tracking-widest text-sky-700 font-bold whitespace-nowrap">
              Juego Trivia Familiar
            </h3>
            <div className="h-px flex-glow bg-sky-300"></div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            
            {/* Soft decorative cloud pattern overlay */}
            <div className="absolute inset-0 card-pattern-dots opacity-10 pointer-events-none" />

            <AnimatePresence mode="wait">
              {!triviaFinished ? (
                <motion.div
                  key={`question-${currentQuestionIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 relative z-10 flex flex-col justify-between h-full"
                >
                  {/* Trivia Header */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 bg-sky-100 text-sky-800 text-[10px] font-bold uppercase tracking-widest rounded-full">
                        Pregunta {currentQuestionIndex + 1} de {TRIVIA_QUESTIONS.length}
                      </span>
                      <span className="text-xs font-mono font-bold text-sky-850">
                        Aciertos: {score}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-zinc-800 pt-2 leading-snug">
                      {currentQuestion.question}
                    </h4>
                  </div>

                  {/* Options List */}
                  <div className="space-y-2.5 my-3">
                    {currentQuestion.options.map((opt, oIdx) => {
                      let btnClasses = 'border-zinc-200 hover:bg-zinc-50';
                      
                      if (selectedOption === oIdx) {
                        btnClasses = 'border-primary bg-primary/5 font-semibold text-primary';
                      }

                      if (isAnswered) {
                        if (oIdx === currentQuestion.correctAnswer) {
                          btnClasses = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold';
                        } else if (selectedOption === oIdx) {
                          btnClasses = 'border-rose-400 bg-rose-50 text-rose-800 font-medium';
                        } else {
                          btnClasses = 'border-zinc-100 bg-zinc-50 text-zinc-400 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={isAnswered}
                          onClick={() => handleOptionSelect(oIdx)}
                          className={`w-full text-left text-xs px-4 py-3 rounded-xl border transition-all text-zinc-700 relative select-none flex items-center justify-between ${btnClasses} ${
                            !isAnswered ? 'cursor-pointer active:scale-99' : ''
                          }`}
                        >
                          <span className="pr-4">{opt}</span>
                          {isAnswered && oIdx === currentQuestion.correctAnswer && (
                            <Check className="w-4.5 h-4.5 text-emerald-605 shrink-0" />
                          )}
                          {isAnswered && selectedOption === oIdx && oIdx !== currentQuestion.correctAnswer && (
                            <X className="w-4.5 h-4.5 text-rose-605 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedbacks explanatory block or dynamic controls */}
                  <div className="space-y-4 pt-2 border-t border-zinc-150">
                    <AnimatePresence>
                      {isAnswered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className={`p-3 rounded-lg text-xs leading-relaxed ${
                            selectedOption === currentQuestion.correctAnswer
                              ? 'bg-emerald-50 text-emerald-800 border-l-4 border-emerald-500'
                              : 'bg-rose-50 text-rose-805 border-l-4 border-rose-400'
                          }`}
                        >
                          <span className="font-bold block mb-1">
                            {selectedOption === currentQuestion.correctAnswer
                              ? '¡Respuesta Correcta! 🎉'
                              : '¡Ánimo! Intenta la siguiente 💝'}
                          </span>
                          {currentQuestion.explanation}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex gap-2">
                      {!isAnswered ? (
                        <button
                          onClick={handleConfirmAnswer}
                          disabled={selectedOption === null}
                          className="w-full py-2.5 bg-primary disabled:opacity-40 text-white rounded-full text-xs font-bold shadow-xs hover:bg-primary/95 transition-all select-none cursor-pointer"
                        >
                          Confirmar Selección
                        </button>
                      ) : (
                        <button
                          onClick={handleNextQuestion}
                          className="w-full py-2.5 bg-secondary text-white rounded-full text-xs font-bold shadow-xs hover:bg-secondary/95 transition-all select-none flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span>
                            {currentQuestionIndex + 1 < TRIVIA_QUESTIONS.length
                              ? 'Siguiente Pregunta'
                              : 'Ver Resultados del Juego'}
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-6 relative z-10 flex flex-col justify-center items-center h-full"
                >
                  <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center border-4 border-amber-gold animate-bounce shadow-md">
                    <Trophy className="w-10 h-10 text-secondary" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-bold text-zinc-800">¡Trivia Completada!</h4>
                    <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                      Has obtenido un puntaje de <span className="font-bold text-secondary text-sm">{score} de {TRIVIA_QUESTIONS.length}</span> aciertos correctos.
                    </p>
                  </div>

                  {/* Certified super dad graphic placard inside the SPA */}
                  <div className="p-4 bg-amber-gold/10 border-2 border-dashed border-amber-gold/40 rounded-xl space-y-2 max-w-sm w-full font-serif flex flex-col items-center">
                    <span className="text-[11px] uppercase tracking-widest text-secondary font-bold">DIPLOMA OFICIAL</span>
                    <h5 className="text-sm font-bold text-zinc-800">Esteban, Papá Legendario</h5>
                    <p className="text-[11px] text-zinc-600 leading-normal italic">
                      "Acreditado por Francisca y Rafaella como el papá más paciente, atento e incondicional de todo el universo."
                    </p>
                  </div>

                  <button
                    onClick={handleRestartTrivia}
                    className="px-6 py-2 bg-primary text-white rounded-full text-xs font-bold hover:bg-primary/95 transition-all select-none cursor-pointer"
                  >
                    Volver a Jugar
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>

    </div>
  );
}
