import type { ArticleType, AccessType, EditorRole } from '../types';

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    month: 'short', year: 'numeric',
  });
}

export function articleTypeLabel(type: ArticleType): string {
  const map: Record<ArticleType, string> = {
    'research': 'Research Article',
    'review': 'Review',
    'case-study': 'Case Study',
    'editorial': 'Editorial',
    'letter': 'Letter',
    'commentary': 'Commentary',
  };
  return map[type] ?? type;
}

export function articleTypeBadgeClass(type: ArticleType): string {
  const map: Record<ArticleType, string> = {
    'research': 'bg-navy-100 text-navy-800',
    'review': 'bg-purple-100 text-purple-800',
    'case-study': 'bg-teal-100 text-teal-800',
    'editorial': 'bg-maroon-100 text-maroon-800',
    'letter': 'bg-amber-100 text-amber-800',
    'commentary': 'bg-slate-100 text-slate-700',
  };
  return map[type] ?? 'bg-gray-100 text-gray-700';
}

export function accessBadgeClass(type: AccessType): string {
  return type === 'open-access'
    ? 'bg-gold-50 text-gold-700 border border-gold-200'
    : 'bg-gray-100 text-gray-700';
}

export function editorRoleLabel(role: EditorRole): string {
  const map: Record<EditorRole, string> = {
    'editor-in-chief': 'Editor-in-Chief',
    'deputy-editor': 'Co-editor in Chief',
    'managing-editor': 'Editor',
    'international-editorial-committee': 'International Editorial Committee',
    'national-editorial-committee': 'National Editorial Committee',
  };
  return map[role] ?? role;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

export function formatAuthors(names: string[], maxShown = 3): string {
  if (names.length <= maxShown) return names.join(', ');
  return `${names.slice(0, maxShown).join(', ')} et al.`;
}
