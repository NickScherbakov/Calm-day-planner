import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, Layout, List, CheckSquare, 
  Heart, Wallet, PenTool, Home, 
  Settings, ChevronLeft, ChevronRight,
  Maximize2, Download, Moon, Sun
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Context
import { DateProvider } from '@/app/contexts/DateContext';

// Layout
import { PlannerLayout } from '@/app/components/layout/PlannerLayout';

// Sections
import { CoverSection } from '@/app/components/sections/CoverSection';
import { IndexSection } from '@/app/components/sections/IndexSection';
import { YearSection } from '@/app/components/sections/YearSection';
import { MonthSection } from '@/app/components/sections/MonthSection';
import { WeekSection } from '@/app/components/sections/WeekSection';
import { DaySection } from '@/app/components/sections/DaySection';
import { FocusSection } from '@/app/components/sections/FocusSection';
import { SelfCareSection } from '@/app/components/sections/SelfCareSection';
import { FinanceSection } from '@/app/components/sections/FinanceSection';
import { NotesSection } from '@/app/components/sections/NotesSection';
import { StyleGuideSection } from '@/app/components/sections/StyleGuideSection';

// Types
export type Section = 'cover' | 'index' | 'year' | 'month' | 'week' | 'day' | 'focus' | 'selfcare' | 'finance' | 'notes' | 'styleguide';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('cover');
  const [darkMode,SBDarkMode] = useState(false); // Only impacts wrapper, not planner paper itself usually
  
  const navigateTo = (section: Section) => {
    setCurrentSection(section);
  };

  return (
    <div className={clsx(
      "min-h-screen w-full flex flex-col items-center justify-center p-4 transition-colors duration-500",
      darkMode ? "bg-stone-900" : "bg-stone-100"
    )}>
      
      {/* App Controls (Outside Planner) */}
      <div className="fixed top-4 right-4 flex gap-2 z-50 no-print">
        <button 
          onClick={() => window.print()}
          className="p-2 bg-white/50 backdrop-buur-sm rounded-full hover:bg-white transition-colors shadow-sm"
          title="Print / Export PDF"
        >
          <Download size={20} className="text-stone-600" />
        </button>
        {/*
        <button 
          onClick={() => SBDarkMode(!darkMode)}
          className="p-2 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm"
          title="Toggle Ambient Mode"
        >
          {darkMode ? <Sun size={20} className="text-amber-500" /> : <Moon size={20} className="text-stone-600" />}
        </button>
        */}
      </div>

      <DateProvider>
        <PlannerLayout 
          activeSection={currentSection} 
          onNavigate={navigateTo}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full"
            >
              {currentSection === 'cover' && <CoverSection onEnter={() => navigateTo('index')} />}
              {currentSection === 'index' && <IndexSection onNavigate={navigateTo} />}
              {currentSection === 'year' && <YearSection onNavigate={navigateTo} />}
              {currentSection === 'month' && <MonthSection onNavigate={navigateTo} />}
              {currentSection === 'week' && <WeekSection onNavigate={navigateTo} />}
              {currentSection === 'day' && <DaySection />}
              {currentSection === 'focus' && <FocusSection />}
              {currentSection === 'selfcare' && <SelfCareSection />}
              {currentSection === 'finance' && <FinanceSection />}
              {currentSection === 'notes' && <NotesSection />}
              {currentSection === 'styleguide' && <StyleGuideSection />}
            </motion.div>
          </AnimatePresence>
        </PlannerLayout>
      </DateProvider>
    </div>
  );
}
