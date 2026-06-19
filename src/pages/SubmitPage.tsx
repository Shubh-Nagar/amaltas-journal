import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, CheckCircle2, FileText, AlertCircle,
  Upload, ChevronDown, ChevronUp,
} from 'lucide-react';

type ArticleTypeOpt = { label: string; desc: string; wordCount: string };
const ARTICLE_TYPES: ArticleTypeOpt[] = [
  { label: 'Original Research Article', desc: 'Primary empirical studies presenting new findings.', wordCount: '3,000–5,000' },
  { label: 'Systematic Review / Meta-Analysis', desc: 'Comprehensive synthesis of existing evidence on a defined question.', wordCount: '5,000–8,000' },
  { label: 'Case Report', desc: 'In-depth investigation of a specific case, programme, or community.', wordCount: '1,500–3,000' },
  { label: 'Commentary / Perspective', desc: 'Evidence-based opinion on a policy, practice, or research gap.', wordCount: '1,000–2,000' },
  { label: 'Letter to the Editor', desc: 'Brief response to a recently published article.', wordCount: '≤ 800' },
  { label: 'Editorial', desc: 'By invitation only. Contact the Managing Editor.', wordCount: '≤ 1,500' },
];

const FAQ = [
  { q: 'Are there article processing charges?', a: 'No. IJRHM is a Diamond Open Access journal. There are no submission fees or APCs for any author, from any country.' },
  { q: 'Can I submit a preprint?', a: 'Yes. We welcome submissions previously posted on recognised preprint servers (bioRxiv, medRxiv, SSRN, Research Square). Please declare this in your cover letter and include the preprint DOI.' },
  { q: 'What reference format does IJRHM use?', a: 'APA 7th edition. In-text citations follow the author–date format. A reference management template is available in our Supplementary Files.' },
  { q: 'Do you accept submissions in languages other than English?', a: 'Manuscripts must be submitted in English. We strongly encourage authors to use professional language-editing services if English is not their first language.' },
  { q: 'What is the typical time from submission to first decision?', a: 'Our target is 21 days from submission to first editorial decision (post desk review). We aim to publish accepted articles online within 15 days of final acceptance.' },
  { q: 'Can I suggest peer reviewers?', a: 'Yes. You may suggest up to four potential reviewers (name, affiliation, email) with no competing interests. You may also list reviewers you wish to exclude, with reasons.' },
];

export default function SubmitPage() {
  useEffect(() => { document.title = 'Submit Manuscript — IJRHM'; }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', affiliation: '', country: '',
    coAuthors: '', title: '', articleType: '', abstract: '', keywords: '',
    ethicsApproval: false, originalWork: false, noConflict: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <CheckCircle2 className="w-20 h-20 text-navy-700 mb-5" />
        <h1 className="font-playfair text-3xl text-gray-900 mb-3">Submission Received</h1>
        <p className="text-gray-600 max-w-md mb-2">
          Thank you for submitting to IJRHM. A confirmation has been sent to <strong>{form.email}</strong>.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          Your manuscript will undergo initial screening within 5 business days. Reference ID:{' '}
          <code className="bg-gray-100 px-2 py-0.5 rounded font-mono text-navy-700">
            IJRHM-{new Date().getFullYear()}-{Math.floor(Math.random() * 9000 + 1000)}
          </code>
        </p>
        <Link to="/" className="bg-navy-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy-900 transition-colors">
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen">

      {/* Hero */}
      <div className="bg-navy-800 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-1.5 text-sm text-white/55 mb-5">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Submit Manuscript</span>
          </nav>
          <h1 className="font-playfair text-3xl sm:text-4xl mb-3">Submit Your Manuscript</h1>
          <p className="text-white/75 max-w-2xl">
            No article processing charges. No submission fees. Free for all authors, everywhere.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:grid lg:grid-cols-[1fr_300px] gap-10">

        {/* ── Main column ── */}
        <div className="space-y-10">

          {/* Article types */}
          <section>
            <h2 className="font-playfair text-2xl text-gray-900 mb-5">Article Types & Word Limits</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {ARTICLE_TYPES.map((t) => (
                <div key={t.label} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <p className="font-semibold text-navy-800 text-sm mb-1">{t.label}</p>
                  <p className="text-xs text-gray-500 mb-2">{t.desc}</p>
                  <span className="text-xs bg-navy-50 text-navy-700 border border-navy-200 px-2 py-0.5 rounded-full font-mono">
                    {t.wordCount} words
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Preparation checklist */}
          <section>
            <h2 className="font-playfair text-2xl text-gray-900 mb-5">Manuscript Preparation</h2>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-3">
              {[
                'Title page with all author names, affiliations, and corresponding author email',
                'Structured abstract (Background, Methods, Results, Conclusions) — 200–300 words',
                '5–8 keywords from MeSH or relevant controlled vocabularies',
                'Manuscript body: double-spaced, 11pt Times New Roman or Arial',
                'References must follow the Vancouver citation and referencing style',
                'All tables and figures submitted as separate high-resolution files (≥300 DPI)',
                'Ethics Committee / IRB approval number and date',
                'Disclosure of funding sources and conflicts of interest',
                'Informed consent statement (for human-subjects research)',
                'Cover letter stating originality and no simultaneous submission',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-navy-700 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Submission Form ── */}
          <section>
            <h2 className="font-playfair text-2xl text-gray-900 mb-2">Online Submission Form</h2>
            <p className="text-sm text-gray-500 mb-6">
              Complete the form below. Fields marked <span className="text-red-500">*</span> are required.
            </p>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">

              {/* Corresponding author */}
              <fieldset>
                <legend className="font-semibold text-navy-800 text-sm mb-3">Corresponding Author</legend>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required />
                  <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} required />
                  <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                  <Field label="Affiliation / Institution" name="affiliation" value={form.affiliation} onChange={handleChange} required />
                  <div className="sm:col-span-2">
                    <Field label="Country" name="country" value={form.country} onChange={handleChange} required />
                  </div>
                </div>
              </fieldset>

              <hr className="border-gray-100" />

              {/* Manuscript info */}
              <fieldset>
                <legend className="font-semibold text-navy-800 text-sm mb-3">Manuscript Details</legend>
                <div className="space-y-4">
                  <Field label="Full Manuscript Title" name="title" value={form.title} onChange={handleChange} required />
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Article Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="articleType"
                      value={form.articleType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 bg-white"
                      required
                    >
                      <option value="">Select article type…</option>
                      {ARTICLE_TYPES.map((t) => (
                        <option key={t.label} value={t.label}>{t.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Abstract <span className="text-red-500">*</span>
                      <span className="font-normal text-gray-400 ml-1">(200–300 words, structured)</span>
                    </label>
                    <textarea
                      name="abstract"
                      value={form.abstract}
                      onChange={handleChange}
                      rows={6}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 resize-y"
                      placeholder="Background: … Methods: … Results: … Conclusions: …"
                      required
                    />
                  </div>
                  <Field label="Keywords (comma-separated, 5–8)" name="keywords" value={form.keywords} onChange={handleChange} required placeholder="e.g. public health, India, urban environment" />
                  <Field label="Co-Authors (name, affiliation — one per line)" name="coAuthors" value={form.coAuthors} onChange={handleChange} textarea rows={3} placeholder="Dr. Ravi Sharma, AIIMS Delhi&#10;Ms. Preethi Nair, Amaltas University" />
                </div>
              </fieldset>

              <hr className="border-gray-100" />

              {/* File upload mock */}
              <fieldset>
                <legend className="font-semibold text-navy-800 text-sm mb-3">File Upload</legend>
                <div className="border-2 border-dashed border-navy-200 rounded-xl p-8 text-center hover:border-navy-400 transition-colors cursor-pointer bg-navy-50/40">
                  <Upload className="w-8 h-8 text-navy-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-navy-700 mb-1">Drop files here or click to upload</p>
                  <p className="text-xs text-gray-400">Manuscript (DOCX/PDF), Figures (PNG/TIFF), Cover Letter. Max 25 MB each.</p>
                </div>
              </fieldset>

              <hr className="border-gray-100" />

              {/* Declarations */}
              <fieldset>
                <legend className="font-semibold text-navy-800 text-sm mb-3">Author Declarations</legend>
                <div className="space-y-3">
                  {[
                    { name: 'originalWork', label: 'This manuscript is original, has not been previously published, and is not under consideration elsewhere.' },
                    { name: 'ethicsApproval', label: 'The research has received ethics committee / IRB approval, or ethics approval was not required (with justification provided).' },
                    { name: 'noConflict', label: 'All authors have disclosed any conflicts of interest, and all funding sources are acknowledged in the manuscript.' },
                  ].map(({ name, label }) => (
                    <label key={name} className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name={name}
                        checked={form[name as keyof typeof form] as boolean}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-navy-700 focus:ring-navy-400"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">{label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <AlertCircle className="w-5 h-5 shrink-0 text-amber-600" />
                This is a demo form. In production, submissions connect to the editorial management system.
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-navy-800 hover:bg-navy-900 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Submit Manuscript
              </button>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-playfair text-2xl text-gray-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {FAQ.map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-navy-800 text-sm">{item.q}</span>
                    {openFaq === i ? <ChevronUp className="w-4 h-4 text-navy-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-navy-400 shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Sidebar ── */}
        <aside className="mt-10 lg:mt-0 space-y-5">
          <div className="bg-navy-800 text-white rounded-2xl p-5 sticky top-24">
            <p className="text-xs text-navy-300 uppercase tracking-widest mb-3">Quick Facts</p>
            {[
              { label: 'No APCs', sub: 'Free for all authors' },
              { label: '21 days', sub: 'Average to first decision' },
              { label: 'Online-first', sub: '15 days post-acceptance' },
              { label: 'CC BY 4.0', sub: 'Open access licence' },
              { label: 'APA 7th', sub: 'Reference format' },
            ].map(({ label, sub }) => (
              <div key={label} className="py-2.5 border-b border-navy-700 last:border-0">
                <p className="font-semibold text-gold-400 text-sm">{label}</p>
                <p className="text-xs text-navy-300">{sub}</p>
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-5 block text-center bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold py-2.5 rounded-xl transition-colors text-sm"
            >
              Contact Editorial Office
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ── Reusable field helper ── */
function Field({
  label, name, value, onChange, required = false, type = 'text',
  textarea = false, rows = 3, placeholder = '',
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean; type?: string; textarea?: boolean; rows?: number; placeholder?: string;
}) {
  const cls = "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 bg-white";
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {textarea ? (
        <textarea name={name} value={value} onChange={onChange} rows={rows} className={`${cls} resize-y`} placeholder={placeholder} />
      ) : (
        <input name={name} type={type} value={value} onChange={onChange} className={cls} placeholder={placeholder} required={required} />
      )}
    </div>
  );
}
