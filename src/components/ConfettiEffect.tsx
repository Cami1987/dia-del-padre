import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  shape: 'heart' | 'star' | 'circle';
  angle: number;
  speed: number;
}

interface ConfettiEffectProps {
  triggerSignal: number;
  type?: 'mix' | 'hearts' | 'stars';
}

const COLORS = ['#ffab69', '#35607f', '#8e4e14', '#e7c268', '#f43f5e', '#ec4899', '#3b82f6'];
const SHAPES: ('heart' | 'star' | 'circle')[] = ['heart', 'star', 'circle'];

export default function ConfettiEffect({ triggerSignal, type = 'mix' }: ConfettiEffectProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (triggerSignal === 0) return;

    // Generate burst of particles
    const newParticles: Particle[] = Array.from({ length: 30 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 5;
      const size = 12 + Math.random() * 16;
      let shape: 'heart' | 'star' | 'circle' = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      if (type === 'hearts') shape = 'heart';
      if (type === 'stars') shape = 'star';

      return {
        id: Date.now() + i,
        x: 50 + (Math.random() * 10 - 5), // center-ish percentage
        y: 60 + (Math.random() * 10 - 5), // bottom-ish percentage
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size,
        shape,
        angle,
        speed,
      };
    });

    setParticles((prev) => [...prev, ...newParticles]);

    // Cleanup after 3.5s
    const timer = setTimeout(() => {
      setParticles([]);
    }, 3500);

    return () => clearTimeout(timer);
  }, [triggerSignal, type]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => {
          const moveX = Math.cos(p.angle) * p.speed * 40;
          const moveY = Math.sin(p.angle) * p.speed * 30 - 150; // go upward heavily

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 1, scale: 0.1, x: `${p.x}vw`, y: `${p.y}vh` }}
              animate={{
                opacity: [1, 1, 0.8, 0],
                scale: [0.1, 1.2, 1, 0.5],
                x: `${p.x + moveX / 8}vw`,
                y: `${p.y + moveY / 7}vh`,
                rotate: p.angle * 120,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2, ease: 'easeOut' }}
              className="absolute select-none"
              style={{ fontSize: p.size }}
            >
              {p.shape === 'heart' && (
                <span style={{ color: p.color }}>❤️</span>
              )}
              {p.shape === 'star' && (
                <span style={{ color: p.color }}>⭐</span>
              )}
              {p.shape === 'circle' && (
                <span
                  className="rounded-full inline-block"
                  style={{
                    backgroundColor: p.color,
                    width: p.size / 2,
                    height: p.size / 2,
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
