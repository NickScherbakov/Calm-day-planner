import React, { useState } from 'react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';

const COVERS = [
  { id: 'light', name: 'Minimal Light', bg: '#FDFBF7', text: '#4A4A4A', style: 'simple' },
  { id: 'dark', name: 'Minimal Dark', bg: '#2D2A26', text: '#E5E0D8', style: 'simple' },
  { id: 'sage', name: 'Abstract Sage', bg: '#E4E9DE', text: '#5C6B48', style: 'abstract' },
  { id: 'clay', name: 'Abstract Clay', bg: '#EFEEEB', text: '#9C7A65', style: 'abstract' },
  { id: 'beige', name: 'Warm Beige', bg: '#F2ECE4', text: '#8D7F71', style: 'simple' },
  { id: 'stone', name: 'Cool Stone', bg: '#EBEBEB', text: '#555555', style: 'abstract' },
];

export function CoverSection({ onEnter }: { onEnter: () => void }) {
  const [activeCover, setActiveCover] = useState(0);

  const current = COVERS[activeCover];

  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: current.bg, color: current.text }}
    >
      {/* Decorative shapes for abstract covers */}
      {current.style === 'abstract' && (
        <>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            key={`shape-1-${current.id}`}
            className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full mix-blend-multiply filter blur-3xl"
            style={{ backgroundColor: 'currentColor', opacity: 0.1 }}
          />
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 0.4, scale: 1 }}
             transition={{ delay: 0.1 }}
             key={`shape-2-${current.id}`}
            className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-3xl"
            style={{ backgroundColor: 'currentColor', opacity: 0.08 }}
          />
        </>
      )}

      <div className="z-10 text-center p-8 border-y-2 border-current/20 w-full max-w-md mx-auto">
        <p className="uppercase tracking-[0.4em] text-xs mb-4 opacity-70">Interactive Digital Planner</p>
        <h1 className="text-6xl sm:text-7xl font-serif mb-6 tracking-tight">2026</h1>
        <p className="font-serif italic text-xl opacity-80">Design Your Life</p>
      </div>

      <button 
        onClick={onEnter}
        className="mt-16 group flex items-center gap-2 px-8 py-3 border border-current/30 rounded-full hover:bg-black/5 transition-all uppercase tracking-widest text-xs font-medium z-10"
      >
        <span>Open Planner</span>
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Cover Switcher Dots */}
      <div className="absolute bottom-8 flex gap-2 z-20">
        {COVERS.map((cover, idx) => (
          <button
            key={cover.id}
            onClick={() => setActiveCover(idx)}
            className={clsx(
              "w-3 h-3 rounded-full border border-current/50 transition-all",
              activeCover === idx ? "bg-current scale-110" : "bg-transparent hover:bg-current/20"
            )}
            title={cover.name}
          />
        ))}
      </div>
    </div>
  );
}
