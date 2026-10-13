import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { FAQItem } from '../types.ts';

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQAccordion({ items, title = 'Frequently Asked Questions', subtitle }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = items.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display">{title}</h2>
          {subtitle && <p className="text-sm text-slate-600 mt-1.5">{subtitle}</p>}
        </div>

        {/* Live Filter Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 transition-all text-slate-800 placeholder-slate-400"
          />
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-sm text-slate-500">
          No questions matched your search query. Try another keyword.
        </div>
      ) : (
        <div className="space-y-3">
          {filteredItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-white rounded-xl border border-slate-200 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900 font-display">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
