import React from 'react';
import { clsx } from 'clsx';
import { ArrowLeft } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export function SectionHeader({ title, subtitle, action }: SectionHeaderProps) {
  return (
    <div className="mb-8 flex items-end justify-between border-b border-divider pb-4">
      <div>
        <h1 className="text-3xl sm:text-4xl font-serif text-ink tracking-tight">{title}</h1>
        {subtitle && <p className="text-ink-light text-sm mt-1 font-sans uppercase tracking-widest">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

export function BackButton({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick} className="flex items-center gap-2 text-ink-light hover:text-ink text-sm uppercase tracking-wider mb-6 transition-colors">
            <ArrowLeft size={16} />
            <span>Back</span>
        </button>
    )
}
