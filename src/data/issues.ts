import type { JournalIssue } from '../types';

export const issues: JournalIssue[] = [
  {
    volume: 14, issue: 2, year: 2025, month: 'April',
    title: 'Climate, Ecology & Post-Pandemic Health',
    description: 'This issue brings together cutting-edge research examining the intersection of climate change, environmental pollution, and the enduring public health consequences of the COVID-19 pandemic.',
    articleIds: ['ijrhm-2025-v14i2-001', 'ijrhm-2025-v14i2-002', 'ijrhm-2025-v14i2-003', 'ijrhm-2025-v14i2-004', 'ijrhm-2025-v14i2-005', 'ijrhm-2025-v14i2-006'],
    isLatest: true,
  },
  {
    volume: 14, issue: 1, year: 2025, month: 'January',
    description: 'Opening the 14th volume with landmark research spanning digital health, environmental contamination, adolescent wellness, and the structural drivers of maternal health inequity.',
    articleIds: ['ijrhm-2025-v14i1-001', 'ijrhm-2025-v14i1-002', 'ijrhm-2025-v14i1-003', 'ijrhm-2025-v14i1-004'],
    isLatest: false,
  },
  {
    volume: 13, issue: 4, year: 2024, month: 'October',
    description: 'The final issue of Volume 13 presents high-impact research on telemedicine barriers, urban carbon sequestration, and behavioural economics approaches to tobacco cessation.',
    articleIds: ['ijrhm-2024-v13i4-001', 'ijrhm-2024-v13i4-002', 'ijrhm-2024-v13i4-003'],
    isLatest: false,
  },
  {
    volume: 13, issue: 3, year: 2024, month: 'July',
    description: 'A thematic issue on water, sanitation, and hygiene (WASH) interventions in peri-urban South Asian contexts.',
    articleIds: [],
    isLatest: false,
  },
  {
    volume: 13, issue: 2, year: 2024, month: 'April',
    description: 'Research at the intersection of environmental exposure, occupational health, and non-communicable disease burden.',
    articleIds: [],
    isLatest: false,
  },
  {
    volume: 13, issue: 1, year: 2024, month: 'January',
    articleIds: [],
    isLatest: false,
  },
  {
    volume: 12, issue: 4, year: 2023, month: 'October',
    articleIds: [],
    isLatest: false,
  },
  {
    volume: 12, issue: 3, year: 2023, month: 'July',
    articleIds: [],
    isLatest: false,
  },
  {
    volume: 12, issue: 2, year: 2023, month: 'April',
    articleIds: [],
    isLatest: false,
  },
  {
    volume: 12, issue: 1, year: 2023, month: 'January',
    articleIds: [],
    isLatest: false,
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
