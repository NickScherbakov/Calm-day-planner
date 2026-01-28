import React, { useState, useEffect } from 'react';
import { SectionHeader } from '@/app/components/ui/Headers';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDateContext } from '@/app/contexts/DateContext';
import type { Section } from '@/app/App';

interface YearSectionProps {
  onNavigate: (section: Section) => void;
}

export function YearSection({ onNavigate }: YearSectionProps) {
  const { selectedDate, setSelectedDate, navigateToMonth } = useDateContext();
  const [year, setYear] = useState(selectedDate.getFullYear());
  
  // Sync year when selectedDate changes
  useEffect(() => {
    setYear(selectedDate.getFullYear());
  }, [selectedDate]);

  const handleYearChange = (newYear: number) => {
    setYear(newYear);
    // Update selectedDate to keep month and day, but change the year
    const newDate = new Date(selectedDate);
    newDate.setFullYear(newYear);
    setSelectedDate(newDate);
  };

  const handleMonthClick = (monthIndex: number) => {
    navigateToMonth(year, monthIndex);
    onNavigate('month');
  };
  
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  return (
    <div className="animate-in fade-in duration-500">
      <SectionHeader 
        title="Yearly Overview" 
        subtitle={`${year}`}
        action={
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleYearChange(year - 1)}
              className="flex items-center gap-1 px-3 py-1.5 text-xs uppercase tracking-wider border border-divider rounded-full text-ink-light hover:text-ink hover:border-ink/30 transition-colors"
              aria-label="Previous year"
            >
              <ChevronLeft size={14} />
              <span>Prev</span>
            </button>
            <button
              onClick={() => handleYearChange(year + 1)}
              className="flex items-center gap-1 px-3 py-1.5 text-xs uppercase tracking-wider border border-divider rounded-full text-ink-light hover:text-ink hover:border-ink/30 transition-colors"
              aria-label="Next year"
            >
              <span>Next</span>
              <ChevronRight size={14} />
            </button>
          </div>
        }
      />
      
      {/* Calendar Grid (Mini) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {months.map((month, idx) => {
          const firstDay = new Date(year, idx, 1).getDay();
          const daysInMonth = new Date(year, idx + 1, 0).getDate();
          const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
          return (
          <div 
            key={month} 
            className="bg-white p-4 rounded-sm shadow-sm border border-stone-100 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleMonthClick(idx)}
          >
            <h3 className="text-center font-serif text-lg mb-2 text-stone-800 border-b border-stone-100 pb-1">{month}</h3>
            {/* Simple dot grid to simulate days */}
            <div className="grid grid-cols-7 gap-1 text-[8px] text-center text-stone-400 font-sans">
              <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
              {Array.from({ length: totalCells }).map((_, cellIndex) => {
                const dayNumber = cellIndex - firstDay + 1;
                if (dayNumber < 1 || dayNumber > daysInMonth) {
                  return <div key={`empty-${cellIndex}`} className="aspect-square" />;
                }
                return (
                  <div key={dayNumber} className="aspect-square flex items-center justify-center hover:bg-accent-sage/20 rounded-full cursor-default">
                    {dayNumber}
                  </div>
                );
              })}
            </div>
          </div>
          );
        })}
      </div>

      {/* Goals Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="font-serif text-2xl text-ink border-b border-divider pb-2">Annual Goals</h2>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex gap-4 items-start group">
              <span className="font-serif text-2xl text-accent-clay/50 font-bold">0{i}</span>
              <div className="flex-1 pt-2">
                <input 
                  type="text" 
                  placeholder="Enter a goal..." 
                  className="w-full bg-transparent border-b border-stone-200 focus:border-accent-sage outline-none pb-1 text-ink placeholder:text-stone-300 transition-colors"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Life Wheel (Visual Placeholder) */}
        <div>
          <h2 className="font-serif text-2xl text-ink border-b border-divider pb-2 mb-6">Life Areas</h2>
          <div className="aspect-square max-w-[300px] mx-auto relative rounded-full border border-dashed border-stone-300 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-[20px] border-accent-sage/10" />
            <div className="absolute inset-8 rounded-full border-[20px] border-accent-beige/20" />
            <div className="absolute inset-16 rounded-full border-[20px] border-accent-clay/30" />
            <span className="text-xs uppercase tracking-widest text-stone-400">Life Wheel</span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
             {['Health', 'Career', 'Relationships', 'Spirituality'].map(area => (
                 <div key={area} className="flex justify-between items-center text-sm">
                     <span className="text-ink-light">{area}</span>
                     <div className="w-20 h-2 bg-stone-100 rounded-full overflow-hidden">
                         <div className="h-full bg-accent-sage" style={{ width: '70%' }}></div>
                     </div>
                 </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
