import React, { useState, useEffect } from 'react';
import { SectionHeader } from '@/app/components/ui/Headers';
import { clsx } from 'clsx';
import { Layout } from 'lucide-react';
import { useDateContext } from '@/app/contexts/DateContext';
import type { Section } from '@/app/App';

type WeekVariant = 'minimal' | 'grid' | 'list' | 'timeblock';

interface WeekSectionProps {
  onNavigate: (section: Section) => void;
}

export function WeekSection({ onNavigate }: WeekSectionProps) {
  const { selectedDate, navigateToDay } = useDateContext();
  const [variant, setVariant] = useState<WeekVariant>('minimal');
  
  const [weekStart, setWeekStart] = useState(() => {
    const mondayIndex = (selectedDate.getDay() + 6) % 7;
    const start = new Date(selectedDate);
    start.setDate(selectedDate.getDate() - mondayIndex);
    return start;
  });

  // Update week when selected date changes
  useEffect(() => {
    const mondayIndex = (selectedDate.getDay() + 6) % 7;
    const start = new Date(selectedDate);
    start.setDate(selectedDate.getDate() - mondayIndex);
    setWeekStart(start);
  }, [selectedDate]);

  const handleDayClick = (dayIndex: number) => {
    const clickedDate = new Date(weekStart);
    clickedDate.setDate(weekStart.getDate() + dayIndex);
    navigateToDay(clickedDate.getFullYear(), clickedDate.getMonth(), clickedDate.getDate());
    onNavigate('day');
  };

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  const weekdayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
  const dayFormatter = new Intl.DateTimeFormat('en-US', { day: 'numeric' });
  const rangeFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' });
  const days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return {
      name: weekdayFormatter.format(d),
      date: dayFormatter.format(d),
    };
  });
  const weekRange = `${rangeFormatter.format(weekStart)} - ${rangeFormatter.format(weekEnd)}`;

  return (
    <div className="animate-in fade-in duration-500 min-h-full flex flex-col">
      <SectionHeader 
        title="Weekly Spread" 
        subtitle={weekRange}
        action={
          <div className="flex gap-2 text-xs">
            {(['minimal', 'grid', 'list', 'timeblock'] as const).map(v => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={clsx(
                  "px-2 py-1 uppercase tracking-wider border rounded-sm transition-colors",
                  variant === v ? "border-ink bg-ink text-white" : "border-stone-200 text-stone-400 hover:border-ink/30"
                )}
              >
                {v}
              </button>
            ))}
          </div>
        }
      />

      <div className="flex-1">
        {variant === 'minimal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
             <div className="space-y-4">
               {days.slice(0, 4).map((d, idx) => <DayRow key={d.name} day={d} onClick={() => handleDayClick(idx)} />)}
             </div>
             <div className="space-y-4">
               {days.slice(4).map((d, idx) => <DayRow key={d.name} day={d} onClick={() => handleDayClick(idx + 4)} />)}
               <div className="mt-8 p-4 bg-stone-50 border border-stone-100 rounded-sm">
                 <h4 className="font-serif text-ink mb-2">Weekly Review</h4>
                 <textarea className="w-full bg-transparent text-sm resize-none outline-none h-24" placeholder="How did this week go?" />
               </div>
             </div>
          </div>
        )}

        {variant === 'grid' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
            {days.map((d, idx) => (
              <div key={d.name} onClick={() => handleDayClick(idx)} className="aspect-[3/4] border border-stone-200 p-3 hover:shadow-sm transition-shadow cursor-pointer bg-white">
                <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                  <span className="font-serif text-lg">{d.name.substring(0,3)}</span>
                  <span className="text-xs text-stone-400">{d.date}</span>
                </div>
                <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#E5E0D8 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
              </div>
            ))}
            <div className="aspect-[3/4] bg-stone-50 p-3 flex flex-col">
               <span className="font-serif mb-2">Notes</span>
               <textarea className="flex-1 w-full bg-transparent resize-none text-xs outline-none" />
            </div>
          </div>
        )}
        
        {/* Simplified handlers for other variants */}
        {(variant === 'list' || variant === 'timeblock') && (
            <div className="space-y-2">
                {days.map((d, idx) => (
                    <div key={d.name} onClick={() => handleDayClick(idx)} className="border-b border-divider py-4 flex gap-4 cursor-pointer hover:bg-stone-50 px-2 transition-colors">
                        <div className="w-24 font-serif text-xl text-stone-400">{d.name}</div>
                        <div className="flex-1">
                            {variant === 'timeblock' ? (
                                <div className="flex gap-1 h-6">
                                    {Array.from({length: 12}).map((_, i) => (
                                        <div key={i} className="flex-1 border-l border-stone-100 bg-stone-50/50"></div>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-1">
                                    <div className="h-px bg-stone-100 w-full mt-3"></div>
                                    <div className="h-px bg-stone-100 w-full"></div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
}

function DayRow({ day, onClick }: { day: {name: string, date: string}, onClick: () => void }) {
  return (
    <div onClick={onClick} className="group cursor-pointer">
      <div className="flex items-baseline justify-between mb-1 border-b border-stone-200 pb-1 group-hover:border-accent-sage transition-colors">
        <h3 className="font-serif text-xl text-ink">{day.name}</h3>
        <span className="font-sans text-xs text-stone-400">{day.date}</span>
      </div>
      <div className="h-24 p-2 transition-colors rounded-sm group-hover:bg-stone-50">
        <textarea className="w-full h-full bg-transparent resize-none text-sm outline-none placeholder:text-stone-200" placeholder="Plan..." />
      </div>
    </div>
  );
}
