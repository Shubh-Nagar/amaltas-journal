import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Globe, FileText } from 'lucide-react';
import { editorialBoard } from '../data/editorialBoard';
import { editorRoleLabel } from '../utils/helpers';
import type { EditorRole, EditorialBoardMember } from '../types';

const ROLE_ORDER: EditorRole[] = [
  'editor-in-chief',
  'deputy-editor',
  'managing-editor',
  'international-editorial-committee',
  'national-editorial-committee',
];

const ROLE_COLORS: Record<EditorRole, string> = {
  'editor-in-chief': 'bg-gold-400 text-navy-900',
  'deputy-editor': 'bg-navy-700 text-white',
  'managing-editor': 'bg-navy-600 text-white',
  'international-editorial-committee': 'bg-navy-100 text-navy-800',
  'national-editorial-committee': 'bg-gray-100 text-gray-700',
};

function MemberCard({ member }: { member: EditorialBoardMember }) {
  const initials = member.name.split(' ').filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join('');
  const isLeader = member.role === 'editor-in-chief' || member.role === 'deputy-editor' || member.role === 'managing-editor';

  return (
    <div className={`bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-card transition-shadow flex flex-col ${isLeader ? 'ring-2 ring-gold-300' : ''}`}>
      <div className="p-5 flex items-start gap-4">
        {/* Avatar */}
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-playfair font-bold text-lg shrink-0 ${isLeader ? 'bg-navy-800 text-gold-400' : 'bg-navy-100 text-navy-700'}`}>
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-0.5">
            <h3 className="font-playfair text-base font-bold text-gray-900 leading-tight">{member.name}</h3>
          </div>
          {/* Qualification is hidden for all cards */}
          {/* {isLeader && <p className="text-xs text-gray-500 mb-1">{member.title}</p>} */}
          {isLeader && <p className="text-xs text-gray-600 leading-snug">{member.institution}</p>}
          <p className="text-xs text-gray-400">{member.country}</p>
        </div>
      </div>

      {/* Role badge */}
      <div className="px-5 pb-2">
        <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${ROLE_COLORS[member.role]}`}>
          {editorRoleLabel(member.role)}
        </span>
      </div>

      {/* Expertise (field of specialisation) is hidden for all cards */}
      {/*
      {isLeader && (
        <div className="px-5 pb-4 flex flex-wrap gap-1.5 mt-1 flex-1">
          {member.expertise.map((tag) => (
            <span key={tag} className="text-[11px] bg-navy-50 text-navy-600 border border-navy-100 rounded-full px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      )}
      */}

      {/* Contact */}
      {(member.email || member.profileUrl || member.cvUrl) && (
        <div className="px-5 pb-4 pt-2 border-t border-gray-100 flex flex-wrap gap-3">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-1 text-xs text-navy-600 hover:text-navy-800 hover:underline"
            >
              <Mail className="w-3.5 h-3.5" />
              {member.email}
            </a>
          )}
          {member.profileUrl && (
            <a
              href={member.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-navy-600 hover:text-navy-800 hover:underline"
            >
              <Globe className="w-3.5 h-3.5" />
              Profile
            </a>
          )}
          {member.cvUrl && (
            <a
              href={member.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-navy-600 hover:text-navy-800 hover:underline"
            >
              <FileText className="w-3.5 h-3.5" />
              CV Brief
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function EditorialBoardPage() {
  useEffect(() => { document.title = 'Editorial Board — IJRHM'; }, []);

  const grouped = ROLE_ORDER.reduce<Record<EditorRole, EditorialBoardMember[]>>(
    (acc, role) => {
      acc[role] = editorialBoard.filter((m) => m.role === role);
      return acc;
    },
    {} as Record<EditorRole, EditorialBoardMember[]>,
  );

  const countries = [...new Set(editorialBoard.map((m) => m.country))];

  return (
    <div className="bg-cream min-h-screen">

      {/* Hero */}
      <div className="bg-navy-800 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-1.5 text-sm text-white/55 mb-5">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Editorial Board</span>
          </nav>
          <h1 className="font-playfair text-3xl sm:text-4xl mb-3">Editorial Board</h1>
          <p className="text-white/75 max-w-2xl">
            IJRHM is guided by an international team of {editorialBoard.length} distinguished scholars
            across countries, committed to rigorous and equitable peer review.
          </p>
          {/* Country flags strip */}
          {/* <div className="flex flex-wrap gap-2 mt-4">
            {countries.map((c) => FLAG[c] ? (
              <span key={c} title={c} className="text-xl">{FLAG[c]}</span>
            ) : (
              <span key={c} className="text-xs text-white/70 bg-white/15 px-2 py-0.5 rounded">{c}</span>
            ))}
          </div> */}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

        {ROLE_ORDER.map((role) => {
          const members = grouped[role];
          if (!members.length) return null;
          return (
            <section key={role}>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
                <h2 className="font-playfair text-2xl text-gray-900">{editorRoleLabel(role)}</h2>
                <span className="text-sm text-gray-400">({members.length})</span>
              </div>
              <div className={`grid gap-5 ${
                role === 'editor-in-chief' ? 'grid-cols-1 max-w-md' :
                role === 'deputy-editor' || role === 'managing-editor' ? 'sm:grid-cols-2 max-w-xl' :
                'sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {members.map((m) => <MemberCard key={m.id} member={m} />)}
              </div>
            </section>
          );
        })}

        {/* Join CTA */}
        <div className="bg-navy-800 text-white rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="font-playfair text-xl mb-1">Interested in Reviewing for IJRHM?</h3>
            <p className="text-white/70 text-sm">
              We welcome applications from qualified researchers to join our international reviewer panel.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Express Interest
          </Link>
        </div>
      </div>
    </div>
  );
}
