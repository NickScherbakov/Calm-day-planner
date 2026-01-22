import React from 'react';
import { Section } from '@/app/App';
import { SectionHeader } from '@/app/components/ui/Headers';
import { BookOpen, Calendar, CheckCircle, Target, Coffee, DollarSign, PenTool, Palette } from 'lucide-react';

export function IndexSection({ onNavigate }: { onNavigate: (s: Section) => void }) {
  const sections = [
    { id: 'year', label: 'Yearly Overview', icon: Calendar, desc: '2026 Calendar, Goals, Life Wheel' },
    { id: 'month', label: 'Monthly Plan', icon: Calendar, desc: 'Undated grid, Habits, Review' },
    { id: 'week', label: 'Weekly Spread', icon: BookOpen, desc: 'Priorities, Schedule, 6 Layouts' },
    { id: 'day', label: 'Daily Log', icon: CheckCircle, desc: 'Time-blocking, To-dos, Gratitude' },
    { id: 'focus', label: 'Focus & ADHD', icon: Target, desc: 'Pomodoro, Deep Work' },
    { id: 'selfcare', label: 'Self Care', icon: Coffee, desc: 'Mood, Sleep, Wellness' },
    { id: 'finance', label: 'Finance', icon: DollarSign, desc: 'Budget, Expenses, Savings' },
    { id: 'notes', label: 'Notes', icon: PenTool, desc: 'Lined, Dotted, Blank pages' },
    { id: 'styleguide', label: 'Style Guide', icon: Palette, desc: 'Colors, Typography, UI' },
  ] as const;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-12 mt-8">
        <h1 className="text-5xl font-serif text-ink mb-2">Index</h1>
        <p className="text-ink-light uppercase tracking-[0.2em] text-sm">2026 Digital Planner</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {sections.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="group flex flex-col items-center p-6 bg-white border border-transparent hover:border-accent-beige hover:shadow-sm rounded-lg transition-all duration-300 text-center"
          >
            <div className="mb-4 p-3 rounded-full bg-paper-dark text-stone-500 group-hover:bg-accent-beige/20 group-hover:text-stone-800 transition-colors">
              <item.icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-lg text-ink mb-1 group-hover:translate-y-[-2px] transition-transform">{item.label}</h3>
            <p className="text-xs text-ink-light font-sans">{item.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
