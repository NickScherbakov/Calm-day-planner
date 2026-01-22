import React from 'react';
import { SectionHeader } from '@/app/components/ui/Headers';
import { Star, Heart, Cloud, Sun, Moon, Coffee, Music, Camera, MapPin, Tag } from 'lucide-react';

export function StyleGuideSection() {
  return (
    <div className="animate-in fade-in duration-500">
      <SectionHeader title="Style Guide" subtitle="Design System" />

      {/* Colors */}
      <section className="mb-12">
        <h3 className="font-serif text-2xl mb-6 text-ink">Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           <ColorSwatch name="Paper" color="#FDFBF7" hex="#FDFBF7" text="dark" />
           <ColorSwatch name="Ink" color="#4A4A4A"Tb hex="#4A4A4A" text="light" />
           <ColorSwatch name="Sage" color="#C1CFA0" hex="#C1CFA0" text="dark" />
           <ColorSwatch name="Beige" color="#E3D5CA" hex="#E3D5CA" text="dark" />
           <ColorSwatch name="Clay" color="#D5BDAF" hex="#D5BDAF" text="dark" />
           <ColorSwatch name="Divider" color="#E5E0D8"Tb hex="#E5E0D8" text="dark" />
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h3 className="font-serif text-2xl mb-6 text-ink">Typography</h3>
        <div className="space-y-6 border border-stone-200 p-8 rounded-sm bg-white">
           <div>
             <h1 className="text-5xl font-serif text-ink mb-2">Heading 1</h1>
             <p className="text-xs text-stone-400 font-mono">Cormorant Garamond / 48px</p>
           </div>
           <div>
             <h2 className="text-4xl font-serif text-ink mb-2">Heading 2</h2>
             <p className="text-xs text-stone-400 font-mono">Cormorant Garamond / 36px</p>
           </div>
           <div>
             <h3 className="text-2xl font-serif text-ink mb-2">Heading 3</h3>
             <p className="text-xs text-stone-400 font-mono">Cormorant Garamond / 24px</p>
           </div>
           <div>
             <p className="text-base font-sans text-ink mb-2">Body text looks like this. Clean, legible, and simple with adequate line height for readability.</p>
             <p className="text-xs text-stone-400 font-mono">Montserrat / 16px</p>
           </div>
           <div>
             <p className="text-xs uppercase tracking-widest font-sans text-ink-light mb-2">SMALL CAPS LABEL</p>
             <p className="text-xs text-stone-400 font-mono">Montserrat / 12px / Tracking 0.2em</p>
           </div>
        </div>
      </section>

      {/* Components */}
      <section className="mb-12">
        <h3 className="font-serif text-2xl mb-6 text-ink">Components</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="space-y-4">
              <button className="px-6 py-2 bg-ink text-white rounded-sm text-sm uppercase tracking-wider font-medium hover:opacity-90 transition-opacity">
                  Primary Button
              </button>
              <button className="px-6 py-2 border border-ink text-ink rounded-sm text-sm uppercase tracking-wider font-medium hover:bg-ink hover:text-white transition-colors">
                  Secondary Button
              </button>
              <div className="flex gap-2">
                 <input type="checkbox" className="w-5 h-5 accent-accent-sage" defaultChecked />
                 <input type="checkbox" className="w-5 h-5 accent-accent-sage" />
                 <input type="radio" name="r" className="w-5 h-5 accent-accent-sage" defaultChecked />
                 <input type="radio" name="r" className="w-5 h-5 accent-accent-sage" />
              </div>
           </div>
           <div className="space-y-4">
              <input className="w-full bg-stone-50 border border-stone-200 p-2 text-sm rounded-sm outline-none focus:border-accent-sage" placeholder="Text Input" />
              <input className="w-full bg-transparent border-b border-stone-200 p-2 text-sm outline-none focus:border-accent-sage" placeholder="Underlined Input" />
           </div>
        </div>
      </section>

      {/* Stickers */}
      <section>
         <h3 className="font-serif text-2xl mb-6 text-ink">Stickers</h3>
         <div className="flex flex-wrap gap-4 bg-white p-8 rounded-sm border border-stone-200">
             {[Star, Heart, Cloud, Sun, Moon, Coffee, Music, Camera, MapPin, Tag].map((Icon, i) => (
                 <div key={i} className="p-3 hover:bg-stone-50 rounded-lg cursor-pointer transition-colors text-ink-light hover:text-accent-sage">
                     <Icon size={24} strokeWidth={1.5} />
                 </div>
             ))}
         </div>
      </section>
    </div>
  );
}

function ColorSwatch({ name, color, hex, text }: { name: string, color: string, hex: string, text: 'light'|'dark' }) {
    return (
        <div className="bg-white p-3 rounded-sm border border-stone-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-stone-100 shadow-inner" style={{ backgroundColor: color }}></div>
            <div>
                <p className="font-serif text-lg leading-none">{name}</p>
                <p className="font-mono text-xs text-stone-400 mt-1 uppercase">{hex}</p>
            </div>
        </div>
    )
}
