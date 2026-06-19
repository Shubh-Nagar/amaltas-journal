import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Mail, MapPin, Clock, CheckCircle2,
  BookOpen, Users, Building2, Send,
} from 'lucide-react';

const CONTACTS = [
  // {
  //   role: 'Editorial Office',
  //   name: 'Dr. Kavitha Sundaram',
  //   subtitle: 'Managing Editor',
  //   email: 'managing.editor@ijrhm.amaltas.edu.in',
  //   phone: '+91-761-2690-212',
  //   icon: Mail,
  // },
  {
    role: 'Editor-in-Chief',
    name: 'Dr. Salil Bhargava',
    subtitle: 'MD, PhD, FAMS',
    email: 'editor@ijrhm.com',
    note: 'For editorial escalations and senior correspondence only.',
    icon: BookOpen,
  },
  {
    role: 'Technical Support',
    name: 'Online Submission Portal',
    subtitle: 'Website & submission issues',
    email: 'contactus@ijrhm.com',
    icon: Building2,
  },
];

const FOR_PANELS = [
  {
    icon: BookOpen,
    title: 'For Authors',
    color: 'bg-navy-800',
    items: [
      { label: 'Author Guidelines', to: '/submit' },
      { label: 'Submission Portal', to: '/submit' },
      { label: 'Track Your Manuscript', to: '/contact' },
      { label: 'APC & Open Access Policy', to: '/about#open-access' },
      { label: 'Copyright & Permissions', to: '/contact' },
    ],
  },
  {
    icon: Users,
    title: 'For Reviewers',
    color: 'bg-maroon-800',
    items: [
      { label: 'Reviewer Registration', to: '/contact' },
      { label: 'Reviewer Guidelines', to: '/contact' },
      { label: 'Peer Review Ethics', to: '/about#peer-review' },
      { label: 'Acknowledge a Review', to: '/contact' },
    ],
  },
  {
    icon: Building2,
    title: 'For Institutions',
    color: 'bg-teal-700',
    items: [
      { label: 'Institutional Subscriptions', to: '/contact' },
      { label: 'Abstracting & Indexing Info', to: '/about#indexing' },
      { label: 'Reprints & Permissions', to: '/contact' },
      { label: 'Media & Press Inquiries', to: '/contact' },
    ],
  },
];

export default function ContactPage() {
  useEffect(() => { document.title = 'Contact Us — IJRHM'; }, []);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', category: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-cream min-h-screen">

      {/* Hero */}
      <div className="bg-navy-800 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-1.5 text-sm text-white/55 mb-5">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Contact Us</span>
          </nav>
          <h1 className="font-playfair text-3xl sm:text-4xl mb-3">Contact Us</h1>
          <p className="text-white/75 max-w-xl">
            Reach out to the IJRHM editorial team for author inquiries, reviewer registration,
            institutional access, or general questions.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

        {/* ── Contact Cards ─────────────────────────────── */}
        <section>
          <h2 className="font-playfair text-2xl text-gray-900 mb-6">Editorial Contacts</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {CONTACTS.map((c) => (
              <div key={c.role} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-card transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 bg-navy-100 text-navy-700 rounded-lg flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{c.role}</p>
                    <p className="font-semibold text-navy-900 text-sm leading-tight">{c.name}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-2">{c.subtitle}</p>
                <a href={`mailto:${c.email}`} className="flex items-center gap-1.5 text-xs text-navy-600 hover:underline break-all">
                  <Mail className="w-3.5 h-3.5 shrink-0" />{c.email}
                </a>
                {c.note && <p className="text-xs text-amber-700 bg-amber-50 rounded-lg p-2 mt-3">{c.note}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* ── Office info ───────────────────────────────── */}
        <section className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-playfair text-lg text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold-500" /> Office Address
            </h3>
            <address className="not-italic text-sm text-gray-600 leading-relaxed">
              Editorial Office, IJRHM<br />
              Amaltas University<br />
              Bangar, Dewas<br />
              Madhya Pradesh, India<br />
            </address>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-playfair text-lg text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-gold-500" /> Working Hours
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="font-semibold text-navy-800">9:00 AM – 5:30 PM IST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold text-navy-800">10:00 AM – 1:00 PM IST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday & Public Holidays</span>
                <span className="text-gray-400">Closed</span>
              </div>
              <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-gray-100">
                Online submissions are accepted 24/7. Responses within 5 business days.
              </p>
            </div>
          </div>
        </section>

        {/* ── For Authors / Reviewers / Institutions ────── */}
        <section>
          <h2 className="font-playfair text-2xl text-gray-900 mb-6">Quick Resources</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {FOR_PANELS.map((panel) => (
              <div key={panel.title} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className={`${panel.color} text-white px-5 py-4 flex items-center gap-3`}>
                  <panel.icon className="w-5 h-5" />
                  <span className="font-semibold text-sm">{panel.title}</span>
                </div>
                <ul className="p-3 space-y-1">
                  {panel.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        className="flex items-center gap-2 text-sm text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-lg px-3 py-2 transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-navy-300" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact Form ──────────────────────────────── */}
        <section>
          <h2 className="font-playfair text-2xl text-gray-900 mb-6">Send a Message</h2>
          {sent ? (
            <div className="bg-navy-50 border border-navy-200 rounded-2xl p-8 text-center">
              <CheckCircle2 className="w-14 h-14 text-navy-700 mx-auto mb-3" />
              <p className="font-playfair text-xl text-gray-900 mb-2">Message Sent!</p>
              <p className="text-gray-600 text-sm">
                Thank you for reaching out. We will reply to <strong>{form.email}</strong> within 5 business days.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '', category: '' }); }}
                className="mt-5 text-sm text-navy-600 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <FieldC label="Your Name" name="name" value={form.name} onChange={handleChange} required />
                <FieldC label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Category <span className="text-red-500">*</span></label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 bg-white"
                >
                  <option value="">Select a category…</option>
                  {['Manuscript Submission', 'Manuscript Status Inquiry', 'Reviewer Registration', 'Permissions & Reprints', 'Institutional Access', 'Technical Issue', 'General Inquiry'].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <FieldC label="Subject" name="subject" value={form.subject} onChange={handleChange} required />
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Message <span className="text-red-500">*</span></label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 resize-y"
                  placeholder="Please describe your inquiry in detail…"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-navy-800 hover:bg-navy-900 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
              <p className="text-xs text-gray-400 text-center">
                This is a demo form. In production, messages route to the editorial management system.
              </p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

function FieldC({ label, name, value, onChange, required = false, type = 'text' }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        name={name} type={type} value={value} onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 bg-white"
        required={required}
      />
    </div>
  );
}
