import React, { useState } from 'react';
import { SectionHeader } from '@/app/components/ui/Headers';
import { clsx } from 'clsx';

export function MonthSection({ onNavigateWeek }: { onNavigateWeek: () => void }) {
  const [activeMonth, setActiveMonth] = useState('January');
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div className="animate-in fade-in duration-500 h-full flex flex-col">
      <SectionHeader 
        title={activeMonth} 
        subtitle="Monthly Plan" 
        action={
          <select 
            value={activeMonth}
            onChange={(e) => setActiveMonth(e.target.value)}
            className="bg-transparent border-b border-stone-300 text-sm py-1 px-2 outline-none font-serif text-ink"
          >
            {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        }
      />

      <div className="flex-1 flex flex-col">
        {/* Calendar Header */}
        <div className="grid grid-cols-7 border-b border-divider">
          {days.map(d => (
            <div key={d} className="p-2 text-center text-xs uppercase tracking-widest text-ink-light">{d}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 flex-1 border-l border-divider">
          {Array.from({ length: 35 }).map((_, i) => (
            <div 
              key={i} 
              className="border-r border-b border-divider min-h-[80px] p-2 relative group hover:bg-stone-50 transition-colors"
              onClick={onNavigateWeek} // Simulate linking to week view
            >
              <span className="text-xs text-stone-400 font-sans absolute top-2 right-2">{i + 1}</span>
              <textarea 
                className="w-full h-full bg-transparent resize-none text-xs outline-none pt-4"
                placeholder=""
              />
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Goals & Habits (Bottom Row) */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 h-auto">
        <div className="bg-white p-6 border border-stone-100 rounded-sm">
          <h3 className="font-serif text-lg mb-4">Monthly Focus</h3>
          <ul className="space-y-2">
            {[1,2,3].map(i => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 border border-stone-300 rounded-sm" />
                <input className="flex-1 border-b border-transparent focus:border-stone-200 outline-none text-sm bg-transparent" placeholder="Focus item..." />
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 border border-stone-100 rounded-sm">
          <h3 className="font-serif text-lg mb-4">Habit Tracker</h3>
          <div className="space-y-3">
             {['Hydration', 'Reading', 'Meditation'].map(habit => (
               <div key={habit} className="flex items-center justify-between">
                 <span className="text-sm text-ink-light w-24">{habit}</span>
                 <div className="flex-1 flex justify-between px-2">
                   {Array.from({length: 10}).map((_, i) => (
                     <div key={i} className="w-3 h-3 border border-stone-200 rounded-full hover:bg-accent-sage cursor-pointer transition-colors" />
                   ))}
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
