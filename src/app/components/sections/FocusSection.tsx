import React, { useState } from 'react';
import { SectionHeader } from '@/app/components/ui/Headers';
import { Play, Pause, RefreshCw } from 'lucide-react';

export function FocusSection() {
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 min in seconds

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="animate-in fade-in duration-500">
      <SectionHeader title="Focus Zone" subtitle="Deep Work" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Pomodoro Timer Card */}
        <div className="bg-paper-dark border border-stone-200 rounded-lg p-8 flex flex-col items-center justify-center text-center shadow-sm">
           <h3 className="text-sm uppercase tracking-widest text-ink-light mb-8">Pomodoro Timer</h3>
           
           <div className="text-8xl font-serif text-ink mb-8 font-light tabular-nums">
             {formatTime(timeLeft)}
           </div>

           <div className="flex gap-4">
             <button 
                onClick={() => setTimerActive(!timerActive)}
                className="w-16 h-16 rounded-full bg-accent-sage text-white flex items-center justify-center hover:bg-accent-sage/90 transition-colors shadow-md"
             >
               {timerActive ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
             </button>
             <button 
                onClick={() => setTimeLeft(25 * 60)}
                className="w-16 h-16 rounded-full bg-white text-stone-500 border border-stone-200 flex items-center justify-center hover:bg-stone-50 transition-colors"
             >
               <RefreshCw size={20} />
             </button>
           </div>
           
           <div className="mt-12 flex gap-4 text-xs font-medium">
             <button className="px-4 py-2 rounded-full bg-white border border-stone-200 text-ink">Short Break</button>
             <button className="px-4 py-2 rounded-full bg-white border border-stone-200 text-ink">Long Break</button>
           </div>
        </div>

        {/* Distraction Log & Tasks */}
        <div className="space-y-8">
           <div>
              <h3 className="font-serif text-xl mb-4 border-b border-divider pb-2">Session Goals</h3>
              <ul className="space-y-3">
                 {[1,2,3].map(i => (
                     <li key={i} className="flex gap-3 items-center">
                         <div className="w-5 h-5 border-2 border-stone-300 rounded-sm" />
                         <input className="flex-1 bg-transparent border-b border-transparent focus:border-stone-200 outline-none text-ink py-1" placeholder="Task to focus on..." />
                     </li>
                 ))}
              </ul>
           </div>

           <div className="bg-white p-6 border border-stone-100 rounded-sm">
              <h3 className="font-serif text-lg mb-2">Distraction Log</h3>
              <p className="text-xs text-ink-light mb-4">Write down distractions to clear your mind.</p>
              <textarea className="w-full h-32 bg-stone-50 p-3 resize-none outline-none text-sm border-none rounded-sm" placeholder="I felt the urge to check email..." />
           </div>
        </div>
      </div>
    </div>
  );
}
