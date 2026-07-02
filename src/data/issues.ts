import type { JournalIssue } from '../types';

export const issues: JournalIssue[] = [
  {
    volume: 1, issue: 1, year: 2026, month: 'July',
    title: 'Inaugural Issue',
    description: 'The inaugural issue of the International Journal of Rural Health and Medicine, featuring original research, review articles and case reports spanning neonatology, otorhinolaryngology, endocrinology, pulmonology, ophthalmology and general surgery.',
    articleIds: [
      'ijrhm-2026-v1i1-001',
      'ijrhm-2026-v1i1-002',
      'ijrhm-2026-v1i1-003',
      'ijrhm-2026-v1i1-004',
      'ijrhm-2026-v1i1-005',
      'ijrhm-2026-v1i1-006',
      'ijrhm-2026-v1i1-007',
    ],
    isLatest: true,
  },
];

export function getLatestIssue(): JournalIssue {
  return issues.find((i) => i.isLatest) ?? issues[0];
}

export function getIssuesByYear(): Record<number, JournalIssue[]> {
  return issues.reduce<Record<number, JournalIssue[]>>((acc, issue) => {
    if (!acc[issue.year]) acc[issue.year] = [];
    acc[issue.year].push(issue);
    return acc;
  }, {});
}
