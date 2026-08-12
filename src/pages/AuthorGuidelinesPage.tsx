import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, FileText, Users, BookOpen, ClipboardList,
  CheckCircle2, AlertCircle, Globe, Microscope, MessageSquare,
  DollarSign, Shield, RefreshCw, Eye, Award,
} from 'lucide-react';

const NAV_SECTIONS = [
  { id: 'editorial-process',   label: 'Editorial Process',       icon: ClipboardList },
  { id: 'ai-policy',           label: 'AI Policy',               icon: AlertCircle },
  { id: 'general-format',      label: 'Manuscript Format',       icon: BookOpen },
  { id: 'article-types',       label: 'Article Types',           icon: FileText },
  { id: 'preparation',         label: 'Manuscript Preparation',  icon: ClipboardList },
  { id: 'references',          label: 'References',              icon: MessageSquare },
  { id: 'tables',              label: 'Tables',                  icon: Microscope },
  { id: 'figures',             label: 'Figures',                 icon: Eye },
  { id: 'coi',                 label: 'Conflicts of Interest',   icon: Shield },
  { id: 'clinical-trials',     label: 'Clinical Trial Registry', icon: Award },
  { id: 'authorship',          label: 'Authorship Criteria',     icon: Users },
  { id: 'financial-support',   label: 'Financial Support',       icon: DollarSign },
  { id: 'acknowledgements',    label: 'Acknowledgements',        icon: CheckCircle2 },
  { id: 'revision',            label: 'Revision of Manuscripts', icon: RefreshCw },
  { id: 'patient-privacy',     label: 'Patient Privacy',         icon: Shield },
  { id: 'open-access',         label: 'Open Access & Copyright', icon: Globe },
];

const ARTICLE_TYPES = [
  {
    type: 'Original Research Article',
    words: '3,000–5,000',
    desc: 'Includes randomized controlled trials, prospective and retrospective observational studies, interventional studies, cross-sectional surveys, qualitative studies, and quality-of-life studies relating to rural health and medicine.',
  },
  {
    type: 'Systematic Review / Meta-Analysis',
    words: '5,000–8,000',
    desc: 'Comprehensive synthesis of existing evidence following PRISMA or MOOSE reporting guidelines. A PRISMA flow diagram is mandatory. Pre-registration on PROSPERO or a similar registry is strongly encouraged; the registration number must be stated.',
  },
  {
    type: 'Case Report / Case Series',
    words: '1,500–3,000',
    desc: 'Reports a unique patient, community, or programme case that adds to existing knowledge. Must follow CARE guidelines. A case series must include a minimum of three and a maximum of ten cases addressing the same scenario. Patient informed consent is mandatory.',
  },
  {
    type: 'Commentary / Perspective',
    words: '1,000–2,000',
    desc: 'Evidence-based expert opinion on a current public health issue, policy gap, or research challenge. Authors should present a clearly argued original position grounded in available evidence. Standalone commentaries are considered; those responding to a published article must be submitted within two months of publication.',
  },
  {
    type: 'Letter to the Editor',
    words: '≤ 800',
    desc: 'Short letters responding to articles published in IJRHM within the preceding three months, or concise reports of novel observations of public health significance. No abstract or subheadings required. Authors of the original article may be invited to submit a letter in response.',
  },
  {
    type: 'Research Methodology',
    words: '2,000–3,000',
    desc: 'Papers describing critical methodological aspects of health research — including statistical methods, study design, qualitative approaches, mixed methods, and systematic review methodology — that are of broad relevance to rural and global health researchers.',
  },
  {
    type: 'Editorial',
    words: '≤ 1,500',
    desc: 'By invitation from the Editor-in-Chief only. Editorials contextualise published research within the issue or address emerging priorities in rural health and medicine. Authors wishing to propose an editorial should contact the editorial office with a brief outline.',
  },
];

export default function AuthorGuidelinesPage() {
  useEffect(() => { document.title = 'Information for Authors — IJRHM'; }, []);
  const [activeSection, setActiveSection] = useState('editorial-process');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: '-15% 0px -75% 0px' }
    );
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      <title>Information for Authors — IJRHM</title>

      {/* ── Hero ── */}
      <div className="bg-navy-800 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-1.5 text-sm text-white/55 mb-5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Information for Authors</span>
          </nav>
          <h1 className="font-playfair text-3xl sm:text-4xl mb-3">Information for Authors</h1>
          <p className="text-white/75 max-w-2xl text-lg">
            Submission guidelines, manuscript preparation standards, and editorial policies of the
            International Journal of Rural Health and Medicine (IJRHM).
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              'No Submission Fees · No APCs',
              'Double-Blind Peer Review',
              '21-Day First Decision Target',
              'Vancouver Style References',
            ].map((tag) => (
              <span key={tag} className="text-xs font-ui bg-white/10 border border-white/20 text-white/80 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-[220px_1fr] gap-12">

          {/* ── Sticky sidebar ── */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-0.5 max-h-[80vh] overflow-y-auto pr-1" aria-label="Page sections">
              {NAV_SECTIONS.map(({ id, label, icon: Icon }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-ui transition-colors ${
                    activeSection === id
                      ? 'bg-navy-800 text-white font-medium'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  {label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-200">
                <Link
                  to="/submit"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold text-sm rounded-lg transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" /> Submit Now
                </Link>
              </div>
            </nav>
          </aside>

          {/* ── Main content ── */}
          <main className="space-y-14 min-w-0">

            {/* ══ 1. Editorial Process ══════════════════════ */}
            <section id="editorial-process" className="scroll-mt-24">
              <SectionHead icon={ClipboardList} title="The Editorial Process" />
              <Prose>
                <p>
                  A manuscript will be considered for publication in IJRHM on the understanding that
                  it is being submitted exclusively to this journal, has not been published elsewhere
                  in any form, and is not simultaneously under consideration at another journal. Upon
                  submission, one author must be designated as the <strong>Corresponding Author</strong> and
                  will serve as the sole point of contact for all editorial correspondence.
                </p>

                <h3>Receipt & Acknowledgement</h3>
                <p>
                  All manuscripts are promptly acknowledged upon receipt and assigned a unique
                  Manuscript Reference Number (e.g., IJRHM-2025-0312). Authors should quote this
                  number in all subsequent correspondence with the editorial office.
                </p>

                <h3>Desk Review</h3>
                <p>
                  The editorial team conducts an initial desk review within five working days to
                  assess scope alignment, originality, and compliance with submission requirements.
                  Manuscripts requiring technical correction are returned to authors before entering
                  formal peer review. Manuscripts lacking originality, presenting major scientific
                  or methodological flaws, or falling outside IJRHM's scope may be declined at desk
                  review. Authors are encouraged to ensure that the blinded
                  manuscript file contains no identifying information; manuscripts revealing author
                  identity may be returned at this stage.
                </p>

                <h3>Peer Review</h3>
                <p>
                  Manuscripts that pass desk review are assigned to at least two independent expert
                  reviewers via a strict <strong>double-blind</strong> process — neither authors nor
                  reviewers are aware of each other's identities. Authors may suggest up to four
                  potential reviewers (name, institutional affiliation, and contact email) with no
                  competing interests, and may also request the exclusion of specific reviewers with
                  written justification. Final reviewer selection is at the editors' sole discretion.
                  Suggested reviewers must not share an institutional affiliation with any of the
                  authors.
                </p>
                <p>
                  Each manuscript is assigned to a member of the editorial team who, based on
                  reviewer feedback, issues one of four decisions: <strong>Accept</strong>,{' '}
                  <strong>Minor Revision</strong>, <strong>Major Revision</strong>, or{' '}
                  <strong>Reject</strong>. Reviewer comments are conveyed to the corresponding
                  author. When revisions are requested, authors must submit a detailed point-by-point
                  response in the provided tabulated format together with a revised manuscript. This
                  iterative process continues until both reviewers and the editorial team are
                  satisfied. IJRHM targets a first editorial decision within <strong>21 days</strong> of submission.
                </p>

                <h3>After Acceptance</h3>
                <p>
                  Accepted manuscripts undergo copy-editing for grammar, punctuation, style, and
                  formatting. Page proofs are sent to the corresponding author and must be reviewed
                  and returned within <strong>three working days</strong>. The journal targets
                  online publication within 15 days of final acceptance.
                  All manuscripts undergo a final editorial review before publication; changes made
                  at this stage to correct grammar, style, or formatting do not require author approval.
                </p>

                <h3>Manuscript Withdrawal</h3>
                <p>
                  Authors who wish to withdraw a submitted manuscript must notify the editorial
                  office in writing as soon as possible. Withdrawal is permitted free of charge
                  at any stage prior to acceptance. IJRHM does not levy withdrawal fees, in keeping
                  with its Diamond Open Access policy. Authors who withdraw a manuscript after
                  acceptance are required to provide a written explanation; the editors reserve the
                  right to publish a note regarding the withdrawal.
                </p>

                <h3>Publication Misconduct</h3>
                <p>
                  Authors found to have engaged in publication misconduct — including plagiarism,
                  data fabrication or falsification, duplicate submission, or undisclosed conflicts
                  of interest — will face appropriate sanctions as determined by the Editorial
                  Board, which may include immediate rejection, retraction of published articles,
                  and notification of the authors' institutions.
                </p>
              </Prose>
            </section>

            {/* ══ 2. AI Policy ══════════════════════════════ */}
            <section id="ai-policy" className="scroll-mt-24">
              <SectionHead icon={AlertCircle} title="Generative AI Policy" />

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6 flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-amber-800">
                  AI tools cannot be listed as authors. Authorship requires intellectual
                  accountability that only human contributors can bear.
                </p>
              </div>

              <Prose>
                <p>
                  Authors who use generative AI or AI-assisted technologies in drafting text,
                  producing images or graphical elements, or in collecting and analysing data,
                  must be transparent in disclosing this in the manuscript. The specific tool used
                  and the purpose for which it was used must be described in a dedicated
                  <strong> AI Use Statement</strong> within the Methods or Acknowledgements section.
                </p>
                <p>
                  Authors are fully responsible for the accuracy, originality, and ethical integrity
                  of their submitted manuscript, including any content produced with AI assistance,
                  and are liable for any breach of publication ethics arising from such content.
                  Undisclosed use of AI tools, or use of AI to fabricate data, generate fictitious
                  citations, or misrepresent results, constitutes a serious breach of research
                  integrity and will result in rejection or retraction.
                </p>
                <p>
                  Manuscripts in which AI has been used to generate the substantive intellectual
                  content — such that there is no meaningful original contribution from the listed
                  human authors — are not eligible for publication in IJRHM.
                </p>
              </Prose>
            </section>

            {/* ══ 3. General Format ═════════════════════════ */}
            <section id="general-format" className="scroll-mt-24">
              <SectionHead icon={BookOpen} title="Manuscript Format — General Requirements" />
              <Prose>
                <p>
                  Each submission to IJRHM must include three separate files:
                  <strong> (i) First Page File</strong> (Cover Letter, Title Page, and Author
                  Contributions / Copyright Transfer),
                  <strong> (ii) Blinded Manuscript File</strong>, and
                  <strong> (iii) Supplementary Files</strong> (figures, tables if large, data files,
                  etc.). Non-compliance with submission requirements will result in the manuscript
                  being returned before it enters review.
                </p>

                <h3>Points for an Organised Submission</h3>
                <ul>
                  <li>Include page numbers at the bottom of every page and continuous line numbering throughout.</li>
                  <li>Use a spell-checker and proofread carefully before submission. IJRHM accepts manuscripts written in English (British or American spelling, applied consistently).</li>
                  <li>Follow Vancouver style for references.</li>
                  <li>The article file submitted for review must be a <strong>clean file</strong> with no Track Changes or comments.</li>
                  <li>Revised manuscript files must highlight all changes in a contrasting colour. Revision submissions must include the authors' point-by-point response to reviewer comments in the mandatory tabulated format.</li>
                </ul>

                <h3>Submission</h3>
                <p>
                  All manuscripts must be submitted by email to{' '}
                  <a href="mailto:editor@ijrhm.com">editor@ijrhm.com</a>{' '}
                  or through the online submission form at <Link to="/submit">ijrhm.amaltas.edu.in/submit</Link>.
                  Authors must ensure that all co-author contact details (email, affiliation)
 are accurately provided at submission. All editorial correspondence
                  will be directed to the corresponding author only.
                </p>
                <p>
                  Manuscripts prepared in accordance with the{' '}
                  <em>Uniform Requirements for Manuscripts Submitted to Biomedical Journals</em>{' '}
                  (ICMJE guidelines) are strongly preferred.
                </p>

                <h3>I. First Page File</h3>
                <p><strong>(a) Cover Letter</strong></p>
                <p>
                  The cover letter is a critical communication between the authors and the
                  Editor-in-Chief. It must:
                </p>
                <ol>
                  <li>State that the manuscript is original, has not been previously published, and is not under consideration elsewhere.</li>
                  <li>Indicate the article type (e.g., Original Research Article, Systematic Review).</li>
                  <li>Disclose whether the manuscript was previously submitted to another journal; if so, detail the outcome and the revisions made in response to that journal's feedback.</li>
                  <li>For manuscripts with original data, the corresponding author must confirm they had full access to all study data and take responsibility for the integrity and accuracy of the data analysis.</li>
                  <li>For revised manuscripts, the cover letter must respond to each reviewer comment point by point, demonstrating how each concern has been addressed.</li>
                </ol>
                <p>Authors submitting previously rejected manuscripts are encouraged to include the prior reviews and their responses.</p>

                <p><strong>(b) Title Page</strong></p>
                <ul>
                  <li><strong>Title:</strong> Concise and informative; no longer than 150 characters including spaces.</li>
                  <li><strong>Running title:</strong> Maximum 60 characters.</li>
                  <li><strong>Keywords:</strong> 5–8 keywords from MeSH or a recognised controlled vocabulary.</li>
                  <li><strong>Author details:</strong> Full names of all authors in order, with complete institutional affiliations. Do not include academic degrees.</li>
                  <li><strong>Corresponding author:</strong> Full name, postal address, telephone number, and email address. This email must remain active for at least one year after publication.</li>
                  <li><strong>Manuscript particulars:</strong> Word count of abstract and main text separately (excluding references, tables, and legends); number of tables; number of figures; funding sources; ethics approval number and issuing body; clinical trial registration number and registry (if applicable); details of any prior conference presentation.</li>
                  <li><strong>Acknowledgements:</strong> Include on the title page only, not in the blinded file.</li>
                </ul>

                <p><strong>(c) Author Contributions & Copyright Transfer</strong></p>
                <p>
                  All authors must provide a description of their contribution to the manuscript
                  across the following categories (as applicable): concept and design; literature
                  search; data acquisition; data analysis; statistical analysis; manuscript
                  preparation; manuscript editing; manuscript review.
                  Copyright is transferred to Amaltas University Press upon acceptance; a completed
                  copyright transfer form must be submitted within two weeks of acceptance.
                </p>

                <h3>II. Blinded Manuscript File</h3>
                <p>
                  This file must not contain any mention of author names, initials, institutional
                  affiliations, or acknowledgements. It must include, in the following order:
                  Abstract → Keywords → Body of Manuscript (IMRAD or as appropriate) → References
                  → Tables (with titles and footnotes) → Figure Legends. Pages must be numbered
                  consecutively. Running headers may include the manuscript title but not author names.
                </p>
                <p>
                  Formatting: double-spaced, single column; 2.5 cm (1 inch) margins on all sides;
                  justified right margin; 11pt or 12pt Times New Roman or Arial; sentence case
                  for all headings (not ALL CAPITALS).
                </p>
              </Prose>
            </section>

            {/* ══ 4. Article Types ══════════════════════════ */}
            <section id="article-types" className="scroll-mt-24">
              <SectionHead icon={FileText} title="Types of Manuscripts" />
              <p className="text-gray-600 text-sm mb-6">
                Word counts apply to the main text only and exclude the abstract, references,
                table content, and figure legends.
              </p>
              <div className="space-y-4">
                {ARTICLE_TYPES.map((a) => (
                  <div key={a.type} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{a.type}</h3>
                      <div className="flex flex-wrap gap-2 text-xs font-ui">
                        <span className="bg-navy-50 text-navy-700 border border-navy-200 px-2 py-0.5 rounded-full font-mono">{a.words} words</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ══ 5. Manuscript Preparation ═════════════════ */}
            <section id="preparation" className="scroll-mt-24">
              <SectionHead icon={ClipboardList} title="Manuscript Preparation" />
              <Prose>
                <h3>Abstract</h3>
                <p>
                  For <strong>Original Research Articles and Systematic Reviews</strong>, provide a
                  structured abstract of 250 words or fewer using the following five headings:
                </p>
                <ul>
                  <li><strong>Background:</strong> State the research question or objective and the primary hypothesis being tested.</li>
                  <li><strong>Methods:</strong> Describe the study design; specify setting, study population, selection criteria, key interventions or exposures, and primary outcome measures. State randomisation and blinding procedures where applicable.</li>
                  <li><strong>Results:</strong> Describe key outcomes and measurements, with confidence intervals and the level of statistical significance where applicable. Note any significant limitations of the data.</li>
                  <li><strong>Conclusions:</strong> State the conclusions directly supported by the data and their implications. Highlight both positive and negative findings. Avoid generalisations not supported by the data.</li>
                </ul>
                <p>
                  For all other manuscript types (except Letters to the Editor), submit an
                  <strong> unstructured abstract</strong> of approximately 150 words. Letters to
                  the Editor do not require an abstract.
                </p>

                <h3>Body of Manuscript — Original Research / Systematic Review</h3>
                <p>The main text must follow the IMRAD structure:</p>
                <ol>
                  <li>
                    <strong>Introduction:</strong> State the study purpose, underlying rationale,
                    and primary hypothesis. Reference only the most pertinent prior publications.
                  </li>
                  <li>
                    <strong>Methods:</strong> Provide sufficient detail to enable replication.
                    The opening paragraph must identify the study design and address human informed
                    consent and animal care. State whether IRB/Ethics Committee approval was
                    prospective or retrospective, name the approving body, and provide the approval
                    number. If IRB review was waived, explain the basis. Confirm compliance with
                    the Declaration of Helsinki (2013 revision). Include: study setting
                    (multicentre, institutional, community); participant selection criteria;
                    randomisation and blinding procedures; intervention or observation procedures;
                    and primary outcome measures. Use generic (non-proprietary) drug and chemical
                    names; brand names may be given in parentheses on first mention.
                  </li>
                  <li>
                    <strong>Results:</strong> Present outcomes objectively with minimal
                    interpretation. Cite tables and figures in sequence; do not duplicate data
                    in text and tables. Report confidence intervals (95% level) and exact P-values.
                  </li>
                  <li>
                    <strong>Discussion:</strong> Interpret findings without repeating results.
                    Address limitations and contradictory literature. State conclusions supported
                    by the data and their clinical or policy implications. Do not assert priority
                    of publication unless the systematic literature search protocol used is stated.
                  </li>
                </ol>
                <p>
                  Following the main text, include in this order: Acknowledgements / Disclosure
                  statement → References → Tables (with titles and footnotes) → Figure Legends.
                </p>
              </Prose>
            </section>

            {/* ══ 6. References ═════════════════════════════ */}
            <section id="references" className="scroll-mt-24">
              <SectionHead icon={MessageSquare} title="References" />
              <Prose>
                <p>
                  IJRHM uses <strong>Vancouver style</strong> throughout. 
                </p>
                <p>
                  Journal titles should be abbreviated according to the PubMed/Index Medicus style;
                  spell the title out in full if unsure of the standard abbreviation. Avoid using
                  conference abstracts as references. Unpublished observations and personal
                  communications may be cited in the text only (not in the reference list),
                  with the source's written permission; personal communications must include the
                  communicator's name and date.
                </p>

                <h3>Common Reference Formats</h3>

                <p><strong>Articles in Journals</strong></p>
                <ol>
                  <li>
                    <strong>Standard journal article (for up to six authors):</strong><br />
                    Tiwari US, Aishwarya A, Gandhi S, Sisodia P. Angiostrongylus cantonensis in
                    anterior chamber. Indian J Ophthalmol 2019;67:158-60.
                  </li>
                  <li>
                    <strong>Standard journal article (for more than six authors):</strong> List the
                    first six contributors followed by et al.<br />
                    Roddy P, Goiri J, Flevaud L, Palma PP, Morote S, Lima N, et al. Field Evaluation
                    of a Rapid Immunochromatographic Assay for Detection of Trypanosoma cruzi
                    Infection by Use of Whole Blood. J Clin Microbiol. 2008;46:2022-7.
                  </li>
                  <li>
                    <strong>Volume with supplement:</strong><br />
                    Otranto D, Capelli G, Genchi C. Changing distribution patterns of canine vector
                    borne diseases in Italy: leishmaniosis vs. dirofilariosis. Parasites &amp;
                    Vectors 2009; Suppl 1:S2.
                  </li>
                </ol>

                <p><strong>Books</strong></p>
                <p><strong>Chapter in a book:</strong></p>
                <blockquote>
                  Nesheim MC. Ascariasis and human nutrition. In: Crompton DWT, Nesheim MC,
                  Pawlowski ZS, editors. Ascariasis and its prevention and control. London:
                  Taylor and Francis; 1989. p. 87-100.
                </blockquote>

                <p><strong>Electronic Sources as Reference</strong></p>
                <p><strong>Journal article on the Internet:</strong></p>
                <blockquote>
                  Parija SC, Khairnar K. Detection of excretory Entamoeba histolytica DNA in the
                  urine, and detection of E. histolytica DNA and lectin antigen in the liver
                  abscess pus for the diagnosis of amoebic liver abscess. BMC Microbiology 2007,
                  7: 41. doi:10.1186/1471-2180-7-41. Available from:
                  http://www.biomedcentral.com/1471-2180/7/41
                </blockquote>
              </Prose>
            </section>

            {/* ══ 7. Tables ═════════════════════════════════ */}
            <section id="tables" className="scroll-mt-24">
              <SectionHead icon={Microscope} title="Tables" />
              <Prose>
                <p>
                  Tables must not duplicate information presented in the text. All tables should
                  be created using word-processor table tools; do not format using columns or tabs.
                </p>
                <ul>
                  <li>Number tables consecutively with Arabic numerals in the order of their first citation in the text.</li>
                  <li>Each table must have a concise, self-explanatory title placed <strong>above</strong> the table on the same line as the table number.</li>
                  <li>Tables with their legends must be provided at the end of the blinded manuscript file, after the reference list — do not upload as separate files.</li>
                  <li>Tables with more than <strong>5 columns</strong> and <strong>20 rows</strong> are not acceptable.</li>
                  <li>A maximum of <strong>five tables</strong> is permitted for original research articles and systematic reviews; two tables for case reports and commentaries.</li>
                  <li>Place all explanatory matter — including definitions of all non-standard abbreviations — in footnotes, using the following symbols in sequence: *, †, ‡, §, ‖, ¶, **, ††, ‡‡.</li>
                  <li>Use additional pages if a table extends beyond one page, but keep the title and column headings on the first page.</li>
                </ul>
              </Prose>
            </section>

            {/* ══ 8. Figures ════════════════════════════════ */}
            <section id="figures" className="scroll-mt-24">
              <SectionHead icon={Eye} title="Figures" />
              <Prose>
                <p>
                  IJRHM does not charge for colour figures. All accepted figures are published
                  in colour online at no cost to authors.
                </p>
                <ul>
                  <li>Upload figures individually as separate files in <strong>JPEG</strong> (preferred) or <strong>TIFF</strong> format, minimum <strong>300 DPI</strong> (1800 × 1600 pixels minimum for print-quality production).</li>
                  <li>Maximum file size per image: <strong>5 MB</strong>.</li>
                  <li>Number figures consecutively in the order in which they are first cited in the text.</li>
                  <li>Name each figure file using the format: <code>IJRHM_[ManuscriptRef]_Figure[N]</code> — e.g., <code>IJRHM_2025-0312_Figure1A</code>.</li>
                  <li>Ensure photographs and figures do not reveal the identity of patients or the study site. Remove all patient-identifying information from images. If photographs of identifiable individuals are used, include written signed consent.</li>
                  <li>Images should be professionally cropped to show only the relevant area of interest.</li>
                </ul>

                <h3>Composite Figures</h3>
                <ul>
                  <li>Keep component images equal in size where possible; maintain a symmetric pattern (square or rectangle). Prefer an even number of components.</li>
                  <li>Label components a, b, c… in the order they are cited in the legend, using Arial font in a contrasting colour (black or white), placed 2 mm from each edge or within a small contrasting box at the bottom-right corner of each component.</li>
                  <li>A maximum of <strong>eight components</strong> per composite figure is permitted.</li>
                </ul>

                <h3>Legends</h3>
                <ul>
                  <li>Legends must be typed double-spaced at the end of the blinded manuscript file, after the tables.</li>
                  <li>Each legend must be self-contained and must not exceed <strong>60 words</strong> excluding credit lines.</li>
                  <li>Symbols, arrows, or letters used in images must be explained in the legend.</li>
                  <li>For graphs and histograms, supply the underlying numerical data.</li>
                  <li>Previously published figures require written permission from the copyright holder; the credit line must appear in the legend.</li>
                </ul>

                <p>
                  The editorial team reserves the right to crop, rotate, reduce, or enlarge
                  photographs to an acceptable size for publication. If higher-resolution images
                  are required for print production, the production team will contact the
                  corresponding author.
                </p>
              </Prose>
            </section>

            {/* ══ 9. Conflicts of Interest ══════════════════ */}
            <section id="coi" className="scroll-mt-24">
              <SectionHead icon={Shield} title="Conflicts of Interest" />
              <Prose>
                <p>
                  All authors must disclose any financial or personal relationships that could
                  influence — or could be perceived to influence — the submitted work. Disclosable
                  interests include, but are not limited to: employment, consultancies, honoraria,
                  stock ownership or options, expert testimony, grants, patents (applied for or
                  held), and travel or accommodation support from organisations with a stake in
                  the research.
                </p>
                <p>
                  Authors should also disclose interests in products or organisations that compete
                  with those discussed in the manuscript. It is mandatory to upload a completed
                  <strong> Conflict of Interest Declaration</strong> for each author separately at
                  the time of submission. This form is distinct from the copyright transfer form.
                </p>
                <p>
                  If no conflicts of interest exist, the title page must include the statement:
                  <em> "Conflicts of interest: None declared."</em>
                </p>
              </Prose>
            </section>

            {/* ══ 10. Clinical Trial Registry ═══════════════ */}
            <section id="clinical-trials" className="scroll-mt-24">
              <SectionHead icon={Award} title="Clinical Trial Registration" />
              <Prose>
                <p>
                  IJRHM supports prospective registration of clinical trials and is a signatory to
                  the principles of the World Health Organization's International Clinical Trials
                  Registry Platform (ICTRP). Clinical trials that begin enrolment of participants
                  from the date of this policy must be registered in an approved registry before
                  the first participant is enrolled.
                </p>
                <p>The following registries are acceptable:</p>
                <ul>
                  <li>Clinical Trials Registry – India (CTRI): https://ctri.nic.in</li>
                  <li>ClinicalTrials.gov: https://www.clinicaltrials.gov</li>
                  <li>ISRCTN Registry: https://www.isrctn.com</li>
                  <li>WHO ICTRP: https://www.who.int/clinical-trials-registry-platform</li>
                  <li>ANZCTR: https://www.anzctr.org.au</li>
                </ul>
                <p>
                  The registry name and unique trial registration number must be stated on the
                  title page and in the last line of the abstract. Trials commenced before this
                  policy's effective date will be considered for publication only if they have
                  been registered retrospectively with a publicly accessible, free-to-access registry.
                </p>
              </Prose>
            </section>

            {/* ══ 11. Authorship ════════════════════════════ */}
            <section id="authorship" className="scroll-mt-24">
              <SectionHead icon={Users} title="Authorship Criteria" />
              <Prose>
                <p>
                  Authorship credit must be based solely on substantial contributions to{' '}
                  <strong>all three</strong> of the following components:
                </p>
                <ol>
                  <li>Conception or design of the study, or acquisition, analysis, or interpretation of data; <strong>and</strong></li>
                  <li>Drafting the manuscript or critically revising it for important intellectual content; <strong>and</strong></li>
                  <li>Final approval of the version submitted for publication.</li>
                </ol>
                <p>
                  Participation solely in the acquisition of funding or the collection of data does
                  not qualify for authorship. General supervision of the research group is
                  insufficient for authorship. Each author must have participated sufficiently in
                  the work to take public responsibility for appropriate portions of its content.
                </p>
                <p>
                  The order of authors must reflect the relative contribution of each to the study
                  and manuscript. Once submitted, the author order cannot be changed without written
                  consent from all listed authors, submitted to the editorial office.
                </p>
                <p>
                  IJRHM prescribes the following maximum author limits: <strong>12 authors</strong>{' '}
                  for original research articles and systematic reviews; <strong>8 authors</strong>{' '}
                  for all other manuscript types. For multicentre studies, up to 15 authors are
                  permitted; additional investigators may be listed in a named Study Group, with
                  the Study Group definition provided at the end of the manuscript. Authors must
                  provide written justification if these limits are exceeded.
                </p>
                <p>
                  One or more authors should be designated as <strong>guarantor</strong> — taking
                  responsibility for the integrity of the work as a whole, from inception to
                  publication. Ghost authorship (listing individuals who did not fulfil authorship
                  criteria) and guest authorship (excluding individuals who did) are both
                  prohibited and constitute publication misconduct.
                </p>
              </Prose>
            </section>

            {/* ══ 12. Financial Support ═════════════════════ */}
            <section id="financial-support" className="scroll-mt-24">
              <SectionHead icon={DollarSign} title="Financial Support" />
              <Prose>
                <p>
                  All sources of funding — public and private — must be disclosed on the title page.
                  State either <em>"Financial Support: None"</em> or provide the full name and city
                  of each funding agency, company, or fellowship, together with the grant or award
                  number.
                </p>
                <p>If financial support was received, include one of the following statements:</p>
                <ul>
                  <li><em>"The sponsor or funding organisation had no role in the design or conduct of this research, data collection, analysis, interpretation, or in the preparation, review, or approval of the manuscript."</em></li>
                  <li><em>"The sponsor or funding organisation participated in [specify role, e.g., study design / data analysis / manuscript review]."</em></li>
                </ul>
              </Prose>
            </section>

            {/* ══ 13. Acknowledgements ══════════════════════ */}
            <section id="acknowledgements" className="scroll-mt-24">
              <SectionHead icon={CheckCircle2} title="Acknowledgements" />
              <Prose>
                <p>
                  Individuals who made significant contributions to the manuscript but do not
                  meet full authorship criteria must be acknowledged. This includes persons who
                  provided: general departmental support, technical assistance, language editing,
                  statistical guidance, provision of essential materials or equipment, or patient
                  referral. Written permission from each acknowledged individual is required prior
                  to submission.
                </p>
                <p>
                  Acknowledgements should be placed on the title page only (not in the blinded
                  manuscript file) and must specify the nature of each person's contribution.
                  IJRHM does not permit ghost authorship; individuals who contributed
                  intellectually to the work must be listed as authors, not merely acknowledged.
                </p>
              </Prose>
            </section>

            {/* ══ 14. Revision of Manuscripts ═══════════════ */}
            <section id="revision" className="scroll-mt-24">
              <SectionHead icon={RefreshCw} title="Revision of Manuscripts" />
              <Prose>
                <p>
                  Revised manuscripts should be submitted in the same manner as the original
                  submission. The First Page file and Cover Letter do not need to be re-submitted
                  unless changes have been made to authorship or institutional affiliations.
                </p>
                <p>
                  The revised blinded manuscript file must include, at the beginning, the
                  reviewers' comments followed by the authors' point-by-point response in the
                  mandatory tabulated format. All changes made to the manuscript must be
                  highlighted in a contrasting colour throughout the revised text.
                </p>
                <p>
                  Authors are strongly encouraged to submit revisions within the timeframe
                  specified in the decision letter. Revisions submitted after the deadline may
                  be treated as new submissions at the editors' discretion.
                </p>
              </Prose>
            </section>

            {/* ══ 15. Patient Privacy ═══════════════════════ */}
            <section id="patient-privacy" className="scroll-mt-24">
              <SectionHead icon={Shield} title="Protection of Patients' Rights to Privacy" />
              <Prose>
                <p>
                  Identifying information — including names, initials, hospital or registration
                  numbers, dates of birth, photographs, imaging (CT, MRI, ultrasound), and
                  pedigrees — must not be published unless it is scientifically essential and the
                  patient (or parent or guardian, as applicable) has provided explicit written
                  informed consent for publication. IJRHM follows ICMJE guidelines on patient
                  privacy:
                </p>
                <ol>
                  <li>Authors, not the journal or publisher, are responsible for obtaining and archiving patient consent forms prior to publication. Consent forms must <strong>not</strong> be uploaded with the submission or sent by email to the editorial office.</li>
                  <li>If a manuscript contains patient images that preclude anonymity, or written descriptions that clearly identify a patient, the Methods section must include a statement confirming that written informed consent was obtained from the patient (or their legal guardian) for publication.</li>
                </ol>
                <p>
                  Authors must remove all patient identifiers from figures. Where removal of
                  identifiers is not possible (e.g., facial photographs), written consent must
                  be obtained and confirmed in the manuscript.
                </p>
              </Prose>
            </section>

            {/* ══ 16. Open Access & Copyright ═══════════════ */}
            <section id="open-access" className="scroll-mt-24">
              <SectionHead icon={Globe} title="Open Access & Copyright" />

              <div className="bg-gold-50 border border-gold-200 rounded-2xl p-5 mb-6">
                <p className="font-semibold text-gold-800 text-sm mb-1">✦ Diamond Open Access Journal</p>
                <p className="text-gold-700 text-sm leading-relaxed">
                  IJRHM is a Diamond Open Access journal. There are absolutely no submission fees,
                  article processing charges (APCs), or any publication costs for authors,
                  regardless of country or institution.
                </p>
              </div>

              <Prose>
                <p>
                  All articles published in IJRHM are made freely and permanently available online
                  immediately upon publication under an open-access licence.
                </p>
                {/* <p>
                  Unlike more restrictive open-access licences, this licence permits derivative works
                  and commercial reuse, maximising the reach and impact of published research.
                  Authors retain copyright of their work. By submitting to IJRHM, authors grant
                  Amaltas University Press a non-exclusive, irrevocable, worldwide licence to
                  publish, distribute, and archive the article in perpetuity.
                </p> */}
                <p>
                  Publication costs are supported by Amaltas University Press through institutional
                  funding. This model ensures that high-quality rural health research is accessible
                  to clinicians, policymakers, students, and communities worldwide, free of any
                  financial barriers — on both the author and reader side.
                </p>
                <p>
                  All authors are required to submit a completed digital copyright transfer form
                  within two weeks of acceptance. Proofs are provided to the corresponding author
                  before publication; no free printed reprints are provided, but authors may
                  download and share the published PDF freely under the journal's open-access licence.
                </p>
              </Prose>
            </section>

            {/* ── CTA ── */}
            <div className="bg-navy-800 text-white rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <p className="font-playfair text-xl mb-1">Ready to Submit?</p>
                <p className="text-white/70 text-sm">
                  No fees. No barriers. Open to all authors worldwide.
                  Contact us at{' '}
                  <a href="mailto:editor@ijrhm.com" className="text-gold-400 hover:text-gold-300 underline">
                    editor@ijrhm.com
                  </a>
                </p>
              </div>
              <Link
                to="/submit"
                className="shrink-0 bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Submit Your Manuscript
              </Link>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}

/* ── Helpers ── */
function SectionHead({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
      <span className="w-9 h-9 bg-navy-100 text-navy-700 rounded-lg flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5" />
      </span>
      <h2 className="font-playfair text-2xl text-gray-900">{title}</h2>
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-gray-700 text-sm leading-relaxed space-y-4 [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:text-gray-900 [&_em]:text-gray-600 [&_blockquote]:pl-4 [&_blockquote]:border-l-2 [&_blockquote]:border-gray-200 [&_blockquote]:text-gray-600 [&_blockquote]:italic [&_blockquote]:my-2 [&_a]:text-navy-700 [&_a]:underline [&_a]:hover:text-navy-900 [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono [&_code]:text-gray-700">
      {children}
    </div>
  );
}
