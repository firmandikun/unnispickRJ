import React from "react";

type Props = { page: number; lastPage: number; onChange: (p: number) => void };
export default function Pagination({ page, lastPage, onChange }: Props){
  const safeCur  = Number.isFinite(page) ? page : 1;
  const safeLast = Number.isFinite(lastPage) ? lastPage : 1;

  const showNumbers = safeLast > 1;

  const pages = (() => {
    const max = 5;
    const start = Math.max(1, Math.min(safeCur - Math.floor(max/2), safeLast - max + 1));
    return Array.from({ length: Math.min(max, safeLast) }, (_, i) => start + i);
  })();

  return (
    <nav className="flex items-center justify-center gap-3 py-6 select-none">
      <button
        onClick={() => onChange(Math.max(1, safeCur - 1))}
        disabled={safeCur === 1}
        className={`flex items-center gap-1 text-sm ${safeCur===1 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-800'}`}
      >
        <span className="text-lg">‹</span><span>Previous</span>
      </button>

      {showNumbers && (
        <div className="flex items-center gap-3">
          {pages.map(p => (
            <button
              key={p}
              onClick={() => onChange(p)}
              className={p===safeCur
                ? 'h-9 min-w-9 px-3 rounded bg-primary text-white text-sm font-semibold shadow-sm'
                : 'h-9 min-w-9 px-3 rounded text-gray-600 text-sm hover:bg-gray-100'}
            >
              {p}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => onChange(Math.min(safeLast, safeCur + 1))}
        disabled={safeCur === safeLast}
        className={`flex items-center gap-1 text-sm ${safeCur===safeLast ? 'text-gray-300' : 'text-gray-600 hover:text-gray-800'}`}
      >
        <span>Next</span><span className="text-lg">›</span>
      </button>
    </nav>
  );
}
