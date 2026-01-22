import React from 'react';
import { SectionHeader } from '@/app/components/ui/Headers';

export function FinanceSection() {
  return (
    <div className="animate-in fade-in duration-500">
      <SectionHeader title="Finance" subtitle="Monthly Budget" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
         <div className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm">
            <h3 className="font-serif text-lg mb-4 text-accent-sage font-bold">Income</h3>
            <div className="space-y-2">
               {[1,2].map(i => (
                   <div key={i} className="flex justify-between border-b border-stone-100 py-2">
                       <span className="text-stone-400 text-sm">Source {i}</span>
                       <span className="font-mono text-sm text-ink">$0.00</span>
                   </div>
               ))}
               <div className="flex justify-between pt-4 font-bold">
                   <span>Total</span>
                   <span>$0.00</span>
               </div>
            </div>
         </div>
         <div className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm">
            <h3 className="font-serif text-lg mb-4 text-accent-clay font-bold">Savings Goal</h3>
            <div className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                    <span>Emergency Fund</span>
                    <span>45%</span>
                </div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent-clay h-full w-[45%]"></div>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                    <span>Vacation</span>
                    <span>12%</span>
                </div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent-clay h-full w-[12%]"></div>
                </div>
            </div>
         </div>
      </div>

      <div className="bg-paper-dark border border-stone-200 rounded-sm overflow-hidden">
         <div className="bg-stone-50 p-4 border-b border-stone-200 flex justify-between items-center">
            <h3 className="font-serif text-lg">Expense Tracker</h3>
            <span className="text-xs uppercase tracking-widest text-stone-400">January</span>
         </div>
         <div className="p-0">
            <table className="w-full text-sm">
               <thead className="bg-stone-50 text-xs uppercase tracking-wider text-left text-stone-500">
                  <tr>
                      <th className="p-4 font-medium">Date</th>
                      <th className="p-4 font-medium">Category</th>
                      <th className="p-4 font-medium">Description</th>
                      <th className="p-4 font-medium text-right">Amount</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-stone-100 bg-white">
                  {[1,2,3,4,5].map(i => (
                      <tr key={i} className="group hover:bg-stone-50 transition-colors">
                          <td className="p-4 text-stone-400">Jan {10+i}</td>
                          <td className="p-4"><span className="px-2 py-1 bg-stone-100 rounded-full text-xs">Category</span></td>
                          <td className="p-4 text-ink">Expense description...</td>
                          <td className="p-4 text-right font-mono text-stone-600">$0.00</td>
                      </tr>
                  ))}
               </tbody>
            </table>
            <div className="p-4 text-center border-t border-stone-100">
               <button className="text-xs uppercase tracking-widest text-accent-sage hover:text-ink transition-colors">+ Add Expense</button>
            </div>
         </div>
      </div>
    </div>
  );
}
