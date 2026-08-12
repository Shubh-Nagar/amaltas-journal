const metrics = [
  { label: 'Impact Factor', value: '3.82', sub: 'JCR 2024', color: 'text-navy-800' },
  { label: 'CiteScore', value: '4.1', sub: 'Scopus 2024', color: 'text-navy-800' },
  { label: 'H-Index', value: '24', sub: 'All time', color: 'text-navy-800' },
  { label: 'Acceptance Rate', value: '18%', sub: 'Peer-reviewed', color: 'text-navy-800' },
  { label: 'Articles Published', value: '847+', sub: 'Since 2026', color: 'text-navy-800' },
  { label: 'Time to First Decision', value: '21 days', sub: 'Avg. 2024', color: 'text-navy-800' },
];

export default function JournalMetrics() {
  return (
    <section>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-navy-700">
          {metrics.map((m) => (
            <div key={m.label} className="bg-navy-800 px-4 py-5 text-center">
              <dt className="font-ui text-navy-400 text-xs uppercase tracking-wide">{m.label}</dt>
              <dd className="font-display text-2xl font-semibold text-gold-400 mt-1">{m.value}</dd>
              <dd className="font-ui text-navy-500 text-xs mt-0.5">{m.sub}</dd>
            </div>
          ))}
        </dl>
      </div> */}
    </section>
  );
}
