import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, BookOpen, Shield, Globe, Award, ChevronRight, Archive, Clock } from 'lucide-react';

const INDEXING = [
  'PubMed / MEDLINE', 'Scopus', 'Web of Science (ESCI)', 'DOAJ', 'ROAD',
  'Google Scholar', 'IndMED', 'NLM Catalog', 'SHERPA/RoMEO', 'OpenAIRE',
  'WorldCat', 'EBSCOhost', 'ProQuest', 'Semantic Scholar',
];

const SECTIONS = [
  { name: 'Public Health & Epidemiology', desc: 'Disease burden, surveillance, social determinants, population health.' },
  { name: 'Environmental Science & Health', desc: 'Air, water, soil quality, toxicology, climate-health nexus.' },
  { name: 'Digital Health & Technology', desc: 'AI diagnostics, telehealth, health informatics, mHealth.' },
  { name: 'Maternal, Neonatal & Child Health', desc: 'MNCH outcomes, nutrition, reproductive health.' },
  { name: 'Climate & Society', desc: 'Climate adaptation, migration, displacement health, resilience.' },
  { name: 'Behavioural & Mental Health Sciences', desc: 'Mental health, substance use, behaviour change interventions.' },
  { name: 'Health Policy & Systems Research', desc: 'UHC, financing, governance, health workforce studies.' },
  { name: 'One Health & Zoonoses', desc: 'Human-animal-environment interface, AMR, emerging infections.' },
];

export default function AboutPage() {
  useEffect(() => { document.title = 'About IJRHM — International Journal of Rural Health and Medicine'; }, []);

  return (
    <div className="bg-cream min-h-screen">

      {/* ── Page Hero ───────────────────────────────────── */}
      <div className="bg-navy-800 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-1.5 text-sm text-white/55 mb-5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">About the Journal</span>
          </nav>
          <h1 className="font-playfair text-3xl sm:text-4xl mb-3">About the Journal</h1>
          <p className="text-white/75 text-lg max-w-2xl">
            A peer-reviewed, open-access quarterly journal dedicated to publishing rigorous, interdisciplinary research in rural health and medicine.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

        {/* ── Aims & Scope ─────────────────────────────── */}
        <section id="aims-scope">
          <SectionHeader icon={BookOpen} title="Aims & Scope" />
          <div className="prose-academic">
            <p>
              The <strong>International Journal of Rural Health and Medicine (IJRHM)</strong> is a peer-reviewed
              publication established in 2026. IJRHM publishes original research, systematic reviews,
              meta-analyses, and case studies.
            </p>
            <p>
              We welcome submissions from various disciplines across medicine and epidemiology.
            </p>
          </div>

          {/* <h3 className="font-playfair text-xl text-navy-800 mt-8 mb-4">Thematic Sections</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {SECTIONS.map((s) => (
              <div key={s.name} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-card transition-shadow">
                <p className="font-semibold text-navy-800 text-sm mb-1">{s.name}</p>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div> */}
        </section>

        {/* ── Peer Review ──────────────────────────────── */}
        <section id="peer-review">
          <SectionHeader icon={Shield} title="Peer Review Process" />
          <div className="prose-academic">
            <p>
              IJRHM employs a rigorous <strong>double-blind peer review</strong> process. All manuscripts are assessed
              for scope, originality, and methodological soundness before being sent to a minimum of two independent
              subject-matter experts drawn from our international reviewer panel of 20+ scholars in 4 countries.
            </p>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Submission', desc: 'Author submits via online portal. Initial screening by Editorial Office within 5 business days.' },
              { step: '02', title: 'Editorial Assessment', desc: 'Editor-in-Chief evaluates scope, fit and desk review (reject or proceed). ~7 days.' },
              { step: '03', title: 'Peer Review', desc: 'Double-blind review by ≥2 experts. Authors receive detailed feedback. Average: 4 to 6 weeks.' },
              { step: '04', title: 'Decision & Publication', desc: 'Accept / Minor Revision / Major Revision / Reject. Accepted papers published online-first.' },
            ].map((s) => (
              <div key={s.step} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm relative overflow-hidden">
                <span className="absolute top-3 right-4 font-playfair text-4xl text-navy-50 font-bold select-none">{s.step}</span>
                <p className="font-semibold text-navy-800 text-sm mb-2 relative">{s.title}</p>
                <p className="text-xs text-gray-500 relative leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              'Double-Blind Review', 'Average 6-8 Weeks to Decision', 'Structured Reviewer Reports',
              // 'COPE Guidelines Followed', 'Post-Rejection Appeal Process',
            ].map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1.5 text-xs bg-navy-50 text-navy-700 border border-navy-200 px-3 py-1.5 rounded-full font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-navy-700" />
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ── Open Access Policy ───────────────────────── */}
        <section id="open-access">
          <SectionHeader icon={Globe} title="Open Access Policy" />
          <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6 mb-6">
            <p className="text-gold-800 font-semibold text-sm mb-2">✦ Diamond Open Access Journal</p>
            <p className="text-gold-700 text-sm leading-relaxed">
              IJRHM is a <strong>fully Open Access</strong> journal. All published articles are freely available to read,
              download, and share immediately upon publication.
              Publication costs are supported by Amaltas University's research fund and institutional grants.
            </p>
          </div>
          <div className="prose-academic">
            <p>
               Authors retain full copyright of their published work.
            </p>
            {/* <p>
              IJRHM is listed in the Directory of Open Access Journals (DOAJ) and complies with the Budapest Open Access
              Initiative (BOAI) principles. We actively support preprint servers (bioRxiv, medRxiv, SSRN) and encourage
              authors to deposit accepted manuscripts in institutional repositories.
            </p> */}
          </div>
        </section>

        {/* ── Publication Ethics ───────────────────────── */}
        <section id="ethics">
          <SectionHeader icon={Award} title="Publication Ethics" />
          <div className="prose-academic">
            {/* <p>
              IJRHM is committed to the highest standards of research and publication ethics, adhering to COPE (Committee
              on Publication Ethics) guidelines, ICMJE recommendations, and WAME policies. Our editorial office actively
              investigates allegations of misconduct including plagiarism, data fabrication, authorship disputes, and
              undisclosed conflicts of interest.
            </p> */}
          </div>
          <div className="mt-6 space-y-3">
            {[
              { title: 'Plagiarism Detection', desc: 'All submissions are screened with iThenticate. Similarity index above 20% requires author explanation.' },
              { title: 'Data Availability', desc: 'Authors are encouraged to share research data in public repositories (Zenodo, Figshare, OSF). Data availability statements are mandatory.' },
              { title: 'Conflict of Interest', desc: 'All authors, reviewers, and editors must disclose any financial or personal relationships that could influence the work.' },
              { title: 'Informed Consent & IRB', desc: 'Human-subjects research must include IRB/Ethics Committee approval details and evidence of informed consent.' },
              // { title: 'Corrections & Retractions', desc: 'Issued promptly and transparently per COPE guidelines. All changes are permanently linked to the original article.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <p className="font-semibold text-navy-800 text-sm mb-1">{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Digital Archiving ────────────────────────── */}
        {/* <section id="digital-archiving">
          <SectionHeader icon={Archive} title="Digital Archiving" />
          <div className="prose-academic mb-6">
            <p>
              IJRHM provides for long-term digital preservation through partnerships with two globally recognised
              archiving services, ensuring the scholarly record remains permanently accessible regardless of future
              changes to the journal or its platform.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: 'Portico',
                desc: 'A leading worldwide digital preservation service. Content is preserved as an archival version and made available under specific trigger conditions, such as discontinuation of the journal or catastrophic failure of the website.',
              },
              {
                name: 'CLOCKSS',
                desc: 'Enables libraries worldwide to maintain their own archive of journal content with minimal technical effort. Provides decentralised, community-governed dark archiving that activates when content becomes unavailable.',
              },
            ].map((item) => (
              <div key={item.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-navy-800 text-sm mb-2">{item.name}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* ── Ahead of Print Policy ─────────────────────── */}
        <section id="ahead-of-print">
          <SectionHeader icon={Clock} title="Ahead of Print Policy" />
          <div className="prose-academic">
            <p>
              Articles accepted for publication are made available online under an <strong>Ahead of Print</strong> model
              before their formal issue assignment. These articles are considered fully published upon online posting
              and may be cited and quoted immediately, using the article's <strong>DOI</strong> as the reference source.
            </p>
            <p>
              In accordance with responsible publishing standards, changes will not be made to an Ahead of Print article
              after online publication without following accepted procedures for issuing corrections to the scientific record.
              Any necessary amendments are handled as formal corrigenda or errata, permanently linked to the original article.
            </p>
          </div>
        </section>

        {/* ── Indexing ─────────────────────────────────── */}
        {/* <section id="indexing">
          <SectionHeader icon={Globe} title="Indexing & Abstracting" />
          <div className="prose-academic mb-6">
            <p>
              IJRHM is indexed and abstracted in major international databases, ensuring maximum discoverability and
              citation tracking for all published works.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {INDEXING.map((db) => (
              <span key={db} className="bg-white border border-navy-200 text-navy-700 text-sm font-medium px-3.5 py-1.5 rounded-full shadow-sm">
                {db}
              </span>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Impact Factor', value: '3.82', sub: '2024 JCR' },
              { label: 'CiteScore', value: '4.1', sub: 'Scopus 2024' },
              { label: 'h-Index', value: '24', sub: 'Google Scholar' },
            ].map(({ label, value, sub }) => (
              <div key={label} className="bg-navy-800 text-white rounded-2xl p-5 text-center">
                <p className="text-4xl font-playfair font-bold text-gold-400 mb-1">{value}</p>
                <p className="text-sm font-semibold">{label}</p>
                <p className="text-xs text-navy-300 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* ── CTA ──────────────────────────────────────── */}
        <div className="bg-white border border-gold-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-playfair text-lg text-gray-900 mb-1">Ready to Submit Your Research?</p>
            {/* <p className="text-sm text-gray-500">No article processing charges. Free for authors and readers alike.</p> */}
          </div>
          <Link
            to="/submit"
            className="shrink-0 bg-navy-800 hover:bg-navy-900 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Author Guidelines
          </Link>
        </div>

      </div>
    </div>
  );
}

function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
      <span className="w-9 h-9 bg-navy-100 text-navy-700 rounded-lg flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5" />
      </span>
      <h2 className="font-playfair text-2xl text-gray-900">{title}</h2>
    </div>
  );
}
