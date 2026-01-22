import React from 'react';
import { clsx } from 'clsx';
import { Section } from '@/app/App';
import { Home, Calendar, Grid, CheckSquare, Clock, Heart, DollarSign, FileText } from 'lucide-react';

interface PlannerLayoutProps {
  children: React.ReactNode;
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

export function PlannerLayout({ children, activeSection, onNavigate }: PlannerLayoutProps) {
  // A4 aspect ratio is roughly 1 / 1.414 = 0.707 (Portrait)
  // But we want it to fit on screen nicely.
  
  return (
    <div className="relative w-full max-w-[100vh] aspect-[1/1.414] bg-paper shadow-2xl rounded-sm overflow-hidden flex flex-col border border-stone-200 ring-1 ring-stone-900/5 transition-all duration-300 transform">
      {/* Texture Overlay (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] no-print" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }}></div>
      
      {/* Top Navigation Tabs */}
      {activeSection !== 'cover' && (
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-divider bg-paper/80 backdrop-blur-sm no-print">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar mask-linear-fade">
             <TabButton 
              active={activeSection === 'index'} 
              onClick={() => onNavigate('index')} 
              icon={<Home size={14} />}
              label="Index"
            />
            <div className="w-px h-4 bg-divider mx-2" />
            <TabButton 
              active={activeSection === 'year'} 
              onClick={() => onNavigate('year')} 
              label="Year"
            />
            <TabButton 
              active={activeSection === 'month'} 
              onClick={() => onNavigate('month')} 
              label="Month"
            />
            <TabButton 
              active={activeSection === 'week'} 
              onClick={() => onNavigate('week')} 
              label="Week"
            />
            <TabButton 
              active={activeSection === 'day'} 
              onClick={() => onNavigate('day')} 
              label="Day"
            />
             <div className="w-px h-4 bg-divider mx-2" />
             <TabButton 
              active={activeSection === 'focus'} 
              onClick={() => onNavigate('focus')} 
              label="Focus"
            />
            <TabButton 
              active={activeSection === 'selfcare'} 
              onClick={() => onNavigate('selfcare')} 
              label="Self"
            />
            <TabButton 
              active={activeSection === 'finance'} 
              onClick={() => onNavigate('finance')} 
              label="$$$"
            />
             <TabButton 
              active={activeSection === 'notes'} 
              onClick={() => onNavigate('notes')} 
              label="Notes"
            />
          </div>
        </nav>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative z-0 scroll-smooth no-scrollbar p-8 sm:p-12">
        {children}
        
        {/* Floating Home Button (Back to Index) for deep pages */}
        {activeSection !== 'cover' && activeSection !== 'index' && (
          <button 
            onClick={() => onNavigate('index')}
            className="absolute bottom-6 right-6 p-3 text-ink-light hover:text-ink hover:bg-black/5 rounded-full transition-all no-print"
            title="Back to Index"
          >
            <Home size={18} />
          </button>
        )}
      </main>
    </div>
  );
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
}

function TabButton({ active, onClick, label, icon }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-3 py-1.5 rounded-md text-xs uppercase tracking-widest font-serif font-medium transition-all flex items-center gap-1",
        active 
          ? "bg-stone-800 text-white shadow-sm" 
          : "text-stone-500 hover:bg-stone-100 hover:text-stone-800"
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
