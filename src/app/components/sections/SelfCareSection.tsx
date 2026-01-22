import React from 'react';
import { SectionHeader } from '@/app/components/ui/Headers';
import { Smile, Moon, Heart } from 'lucide-react';

export function SelfCareSection() {
  return (
    <div className="animate-in fade-in duration-500">
      <SectionHeader title="Self Care" subtitle="Wellness Tracker" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Mood Tracker */}
        <div className="md:col-span-1 bg-white p-6 border border-stone-100 rounded-sm shadow-sm">
           <div className="flex items-center gap-2 mb-4">
              <Smile size={18} className="text-accent-sage" />
              <h3 className="font-serif text-lg">Mood</h3>
           </div>
           <div className="grid grid-cols-5 gap-2 mb-4">
              {['Awful', 'Bad', 'Okay', 'Good', 'Great'].map((mood, i) => (
                  <button key={mood} className="aspect-square rounded-full bg-stone-100 hover:bg-accent-sage/40 flex items-center justify-center text-xs transition-colors" title={mood}>
                      {i + 1}
                  </button>
              ))}
           </div>
           <textarea className="w-full h-24 bg-stone-50 p-2 text-xs resize-none outline-none" placeholder="Why do you feel this way?" />
        </div>

        {/* Sleep Log */}
        <div className="md:col-span-1 bg-white p-6 border border-stone-100 rounded-sm shadow-sm">
           <div className="flex items-center gap-2 mb-4">
              <Moon size={18} className="text-indigo-300" />
              <h3 className="font-serif text-lg">Sleep</h3>
           </div>
           <div className="flex items-end gap-1 h-32 border-b border-stone-200 mb-2 pb-1">
              {['M','T','W','T','F','S','S'].map(d => (
                  <div key={d} className="flex-1 bg-indigo-50 hover:bg-indigo-100 relative group rounded-t-sm" style={{ height: `${Math.random() * 80 + 20}%` }}>
                     <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100">8h</span>
                  </div>
              ))}
           </div>
           <div className="flex justify-between text-xs text-stone-400 px-1">
               {['M','T','W','T','F','S','S'].map(d => <span key={d}>{d}</span>)}
           </div>
        </div>

        {/* Workout / Activity */}
        <div className="md:col-span-1 bg-white p-6 border border-stone-100 rounded-sm shadow-sm">
           <div className="flex items-center gap-2 mb-4">
              <Heart size={18} className="text-rose-300" />
              <h3 className="font-serif text-lg">Movement</h3>
           </div>
           <ul className="space-y-2">
              {[1,2,3,4].map(i => (
                  <li key={i} className="flex gap-2 items-center text-sm">
                      <input type="checkbox" className="w-4 h-4 accent-rose-300 rounded-full" />
                      <input className="flex-1 bg-transparent border-none outline-none" placeholder="Activity..." />
                      <span className="text-xs text-stone-300">30m</span>
                  </li>
              ))}
           </ul>
        </div>

      </div>

      <div className="mt-8 bg-paper-dark p-8 rounded-sm border border-stone-100">
         <h3 className="font-serif text-xl mb-4 text-center">Evening Reflection</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
               <label className="text-xs uppercase tracking-widest text-ink-light block mb-2">What went well today?</label>
               <textarea className="w-full bg-white border border-stone-100 p-3 h-24 text-sm resize-none outline-none focus:border-accent-beige" />
            </div>
            <div>
               <label className="text-xs uppercase tracking-widest text-ink-light block mb-2">One thing to improve tomorrow?</label>
               <textarea className="w-full bg-white border border-stone-100 p-3 h-24 text-sm resize-none outline-none focus:border-accent-beige" />
            </div>
         </div>
      </div>
    </div>
  );
}
