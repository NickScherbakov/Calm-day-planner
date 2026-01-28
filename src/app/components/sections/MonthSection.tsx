import React, { useState, useEffect } from 'react';
import { SectionHeader } from '@/app/components/ui/Headers';
import { useDateContext } from '@/app/contexts/DateContext';
import type { Section } from '@/app/App';

interface MonthSectionProps {
  onNavigate: (section: Section) => void;
}

export function MonthSection({ onNavigate }: MonthSectionProps) {
  const { selectedDate, setSelectedDate, navigateToDay } = useDateContext();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const [year, setYear] = useState(selectedDate.getFullYear());
  const [activeMonth, setActiveMonth] = useState(monthNames[selectedDate.getMonth()]);
  
  // Sync with selected date
  useEffect(() => {
    setYear(selectedDate.getFullYear());
    setActiveMonth(monthNames[selectedDate.getMonth()]);
  }, [selectedDate]);

  const handleMonthChange = (newMonth: string) => {
    setActiveMonth(newMonth);
    // Update selectedDate to reflect the new month
    const monthIndex = monthNames.indexOf(newMonth);
    const newDate = new Date(selectedDate);
    newDate.setMonth(monthIndex);
    setSelectedDate(newDate);
  };

  const handleDayClick = (day: number, month: number, year: number) => {
    navigateToDay(year, month, day);
    onNavigate('day');
  };
  
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthIndex = monthNames.indexOf(activeMonth);
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
  const prevMonthDays = new Date(year, monthIndex, 0).getDate();
  const prevMonthIndex = monthIndex === 0 ? 11 : monthIndex - 1;
  const prevMonthYear = monthIndex === 0 ? year - 1 : year;
  const nextMonthIndex = monthIndex === 11 ? 0 : monthIndex + 1;
  const nextMonthYear = monthIndex === 11 ? year + 1 : year;
  
  return (
    <div className="animate-in fade-in duration-500 h-full flex flex-col">
      <SectionHeader 
        title={`${activeMonth} ${year}`} 
        subtitle="Monthly Plan" 
        action={
          <select 
            value={activeMonth}
            onChange={(e) => handleMonthChange(e.target.value)}
            className="bg-transparent border-b border-stone-300 text-sm py-1 px-2 outline-none font-serif text-ink"
          >
            {monthNames.map(m => (
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
          {Array.from({ length: totalCells }).map((_, cellIndex) => {
            const dayNumber = cellIndex - firstDay + 1;
            const isCurrentMonth = dayNumber >= 1 && dayNumber <= daysInMonth;
            let displayDay, displayMonth, displayYear, isPrevMonth, isNextMonth, cellMonthIndex;
            if (dayNumber < 1) {
              isPrevMonth = true;
              displayDay = prevMonthDays + dayNumber;
              displayMonth = monthNames[prevMonthIndex];
              displayYear = prevMonthYear;
              cellMonthIndex = prevMonthIndex;
            } else if (dayNumber > daysInMonth) {
              isNextMonth = true;
              displayDay = dayNumber - daysInMonth;
              displayMonth = monthNames[nextMonthIndex];
              displayYear = nextMonthYear;
              cellMonthIndex = nextMonthIndex;
            } else {
              displayDay = dayNumber;
              displayMonth = activeMonth;
              displayYear = year;
              cellMonthIndex = monthIndex;
            }
            return (
              <div 
                key={cellIndex} 
                className={
                  "border-r border-b border-divider min-h-[80px] p-2 relative group transition-colors cursor-pointer " +
                  (isCurrentMonth ? "hover:bg-stone-50" : "bg-stone-50/30 hover:bg-stone-100/40")
                }
                onClick={() => handleDayClick(displayDay, cellMonthIndex, displayYear)}
              >
                <span className={
                  "text-xs font-sans absolute top-2 right-2 " +
                  (isCurrentMonth ? "text-stone-400" : "text-stone-300")
                }>
                  {displayDay}
                </span>
                {!isCurrentMonth && (
                  <span className="text-[9px] font-sans absolute top-2 left-2 text-stone-300 uppercase">
                    {displayMonth.substring(0, 3)} {displayYear !== year && displayYear}
                  </span>
                )}
                {isCurrentMonth && (
                  <textarea 
                    className="w-full h-full bg-transparent resize-none text-xs outline-none pt-4"
                    placeholder=""
                  />
                )}
              </div>
            );
          })}
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
