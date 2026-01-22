import React, { useState } from 'react';
import { SectionHeader } from '@/app/components/ui/Headers';
import { clsx } from 'clsx';

type NoteType = 'lined' | 'dotted' | 'blank' | 'grid';

export function NotesSection() {
  const [type, setType] = useState<NoteType>('lined');

  return (
    <div className="animate-in fade-in duration-500 h-full flex flex-col">
      <SectionHeader 
        title="Notes" 
        subtitle="Ideas & Sketches"
        action={
           <div className="flex gap-2">
              {(['lined', 'dotted', 'grid', 'blank'] as const).map(t => (
                  <button 
                    key={t}
                    onClick={() => setType(t)}
                    className={clsx(
                        "w-8 h-8 rounded-full border flex items-center justify-center transition-all",
                        type === t ? "border-ink bg-ink text-white" : "border-stone-200 text-stone-400 hover:border-ink"
                    )}
                    title={t}
                  >
                      <div className={clsx(
                          "w-4 h-4 opacity-80",
                          t === 'lined' && "bg-[linear-gradient(transparent_50%,currentColor_50%)] bg-[length:100%_4px]",
                          t === 'dotted' && "bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-[length:4px_4px]",
                          t === 'grid' && "bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] bg-[length:4px_4px]",
                          t === 'blank' && "border border-current"
                      )} />
                  </button>
              ))}
           </div>
        }
      />
      
      <div className={clsx(
          "flex-1 bg-white shadow-sm border border-stone-200 relative min-h-[500px] p-8",
          type === 'lined' && "bg-[linear-gradient(transparent_23px,#E5E0D8_24px)] bg-[length:100%_24px]",
          type === 'dotted' && "bg-[radial-gradient(#C5C5C5_1px,transparent_1px)] bg-[length:20px_20px]",
          type === 'grid' && "bg-[linear-gradient(#E5E0D8_1px,transparent_1px),linear-gradient(90deg,#E5E0D8_1px,transparent_1px)] bg-[length:20px_20px]",
      )}>
          <textarea 
            className="w-full h-full bg-transparent resize-none outline-none text-lg leading-[24px] font-serif text-ink placeholder:text-stone-300"
            style={{ lineHeight: type === 'lined' ? '24px' : '1.5' }}
            placeholder="Start writing..."
          />
      </div>
    </div>
  );
}
