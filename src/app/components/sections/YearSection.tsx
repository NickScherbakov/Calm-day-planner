import React from 'react';
import { SectionHeader } from '@/app/components/ui/Headers';

export function YearSection() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  return (
    <div className="animate-in fade-in duration-500">
      <SectionHeader title="Yearly Overview" subtitle="2026" />
      
      {/* 2026 Calendar Grid (Mini) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {months.map((month, idx) => (
          <div key={month} className="bg-white p-4 rounded-sm shadow-sm border border-stone-100">
            <h3 className="text-center font-serif text-lg mb-2 text-stone-800 border-b border-stone-100 pb-1">{month}</h3>
            {/* Simple dot grid to simulate days */}
            <div className="grid grid-cols-7 gap-1 text-[8px] text-center text-stone-400 font-sans">
              <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
              {Array.from({ length: 31 }).map((_, d) => (
                <div key={d} className="aspect-square flex items-center justify-center hover:bg-accent-sage/20 rounded-full cursor-default">
                  {d + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
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
