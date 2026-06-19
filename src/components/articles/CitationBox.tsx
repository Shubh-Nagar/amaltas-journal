import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import type { Citation } from '../../types';
import clsx from 'clsx';

interface CitationBoxProps {
  citation: Citation;
  doi: string;
}

type Format = 'apa' | 'mla' | 'chicago' | 'bibtex';

export default function CitationBox({ citation, doi }: CitationBoxProps) {
  const [format, setFormat] = useState<Format>('apa');
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(citation[format]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const formats: { key: Format; label: string }[] = [
    { key: 'apa', label: 'APA' },
    { key: 'mla', label: 'MLA' },
    { key: 'chicago', label: 'Chicago' },
    { key: 'bibtex', label: 'BibTeX' },
  ];

  return (
    <div className="border border-navy-200 rounded-xl overflow-hidden">
      <div className="bg-navy-50 px-4 py-3 flex items-center justify-between border-b border-navy-200">
        <h3 className="font-ui text-sm font-semibold text-navy-800">Cite This Article</h3>
        <a
          href={`https://doi.org/${doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui text-xs text-navy-500 hover:text-navy-700 transition-colors"
          aria-label="DOI link"
        >
          DOI: {doi}
        </a>
      </div>

      {/* Format tabs */}
      <div className="flex border-b border-navy-200" role="tablist" aria-label="Citation formats">
        {formats.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={format === f.key}
            aria-controls={`citation-${f.key}`}
            onClick={() => setFormat(f.key)}
            className={clsx(
              'flex-1 px-3 py-2 font-ui text-xs font-medium transition-colors',
              format === f.key
                ? 'bg-white text-navy-800 border-b-2 border-gold-400'
                : 'text-navy-500 hover:text-navy-700 hover:bg-navy-50'
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="p-4 bg-white" id={`citation-${format}`} role="tabpanel">
        <pre className="font-ui text-xs text-navy-700 leading-relaxed whitespace-pre-wrap break-words">
          {citation[format]}
        </pre>
        <button
          onClick={handleCopy}
          className="mt-3 flex items-center gap-1.5 text-xs font-ui font-medium text-navy-600 hover:text-navy-800 transition-colors"
          aria-label="Copy citation to clipboard"
        >
          {copied
            ? <><Check size={13} className="text-navy-700" aria-hidden="true" /> Copied!</>
            : <><Copy size={13} aria-hidden="true" /> Copy to clipboard</>
          }
        </button>
      </div>
    </div>
  );
}
