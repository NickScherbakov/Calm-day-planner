import React, { useMemo, useState } from 'react';
import { SectionHeader } from '@/app/components/ui/Headers';
import { CheckSquare, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

export function DaySection() {
  const hours = Array.from({ length: 17 }, (_, i) => i + 6); // 6:00 to 22:00
  const [activeDate, setActiveDate] = useState(() => new Date());
  const todayLabel = useMemo(() => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(activeDate);
  }, [activeDate]);
  const shiftDay = (delta: number) => {
    setActiveDate((prev) => {
      const next = new Date(prev);
      next.setDate(prev.getDate() + delta);
      return next;
    });
  };

  return (
    <div className="animate-in fade-in duration-500">
      <SectionHeader
        title="Daily Log"
        subtitle={todayLabel}
        action={
          <div className="flex items-center gap-2">
            <button
              onClick={() => shiftDay(-1)}
              className="flex items-center gap-1 px-3 py-1.5 text-xs uppercase tracking-wider border border-divider rounded-full text-ink-light hover:text-ink hover:border-ink/30 transition-colors"
              aria-label="Previous day"
            >
              <ChevronLeft size={14} />
              <span>Prev</span>
            </button>
            <button
              onClick={() => shiftDay(1)}
              className="flex items-center gap-1 px-3 py-1.5 text-xs uppercase tracking-wider border border-divider rounded-full text-ink-light hover:text-ink hover:border-ink/30 transition-colors"
              aria-label="Next day"
            >
              <span>Next</span>
              <ChevronRight size={14} />
            </button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-8">
        
        {/* Left Column: Schedule */}
        <div className="space-y-0">
          <div className="flex items-center gap-2 mb-4 text-ink-light uppercase tracking-widest text-xs border-b border-divider pb-2">
            <Clock size={14} /> <span>Schedule</span>
          </div>
          {hours.map(h => (
            <div key={h} className="flex items-start group min-h-[40px]">
              <div className="w-16 text-xs text-stone-400 font-sans pt-1 border-r border-divider pr-4 text-right">
                {h}:00
              </div>
              <div className="flex-1 border-b border-dashed border-stone-100 relative h-full group-hover:bg-stone-50 transition-colors">
                <input className="w-full h-full bg-transparent px-2 py-1 text-sm outline-none text-ink" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Priorities & To-Do */}
        <div className="flex flex-col gap-8">
          
          {/* Top Priorities */}
          <div className="bg-paper-dark p-6 rounded-sm border border-stone-100">
            <h3 className="font-serif text-lg mb-4 text-ink">Top Priorities</h3>
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-accent-sage flex items-center justify-center text-xs text-accent-sage font-bold">{i}</div>
                  <input className="flex-1 bg-transparent border-b border-stone-200 focus:border-ink outline-none text-sm pb-1" />
                </div>
              ))}
            </div>
          </div>

          {/* To Do List */}
          <div className="flex-1">
             <div className="flex items-center gap-2 mb-4 text-ink-light uppercase tracking-widest text-xs border-b border-divider pb-2">
                <CheckSquare size={14} /> <span>Tasks</span>
             </div>
             <div className="space-y-2">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                        <button className="w-4 h-4 border border-stone-300 rounded-sm hover:bg-accent-sage/20 transition-colors" />
                        <input className="flex-1 bg-transparent border-b border-transparent group-hover:border-stone-100 focus:border-stone-300 outline-none text-sm py-1" placeholder="" />
                    </div>
                ))}
             </div>
          </div>

          {/* Gratitude / Notes */}
          <div className="mt-auto">
             <h4 className="font-serif text-ink mb-2">Gratitude</h4>
             <textarea className="w-full h-24 bg-white border border-stone-100 p-3 text-sm resize-none rounded-sm outline-none focus:border-accent-beige" placeholder="Today I am grateful for..." />
          </div>

        </div>

      </div>
    </div>
  );
}
