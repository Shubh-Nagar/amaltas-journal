// ============================================================
// Core Domain Types — IJRHM Platform
// Designed for easy migration to a dynamic API backend.
// ============================================================

export type ArticleType =
  | 'research'
  | 'review'
  | 'case-study'
  | 'editorial'
  | 'letter'
  | 'commentary';

export type AccessType = 'open-access' | 'subscription';

export type EditorRole =
  | 'editor-in-chief'
  | 'deputy-editor'
  | 'managing-editor'
  | 'international-editorial-committee'
  | 'national-editorial-committee';

export interface Author {
  id: string;
  name: string;
  affiliation: string;
  country: string;
  email?: string;
  orcid?: string;
  isCorresponding?: boolean;
}

export interface Citation {
  apa: string;
  mla: string;
  chicago: string;
  bibtex: string;
}

export interface Article {
  id: string;
  doi: string;
  title: string;
  shortTitle?: string;
  authors: Author[];
  abstract: string;
  keywords: string[];
  articleType: ArticleType;
  accessType: AccessType;
  volume: number;
  issue: number;
  year: number;
  publishedDate: string;       // ISO 8601
  pageStart: number;
  pageEnd: number;
  section: string;
  pdfUrl?: string;
  imageUrl?: string;
  citationCount: number;
  viewCount: number;
  downloadCount: number;
  isFeatured: boolean;
  isMostRead: boolean;
  citation: Citation;
}

export interface JournalIssue {
  volume: number;
  issue: number;
  year: number;
  month: string;
  title?: string;
  coverImageUrl?: string;
  description?: string;
  articleIds: string[];
  isLatest: boolean;
}

export interface EditorialBoardMember {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  institution: string;
  country: string;
  role: EditorRole;
  expertise: string[];
  email?: string;
  profileUrl?: string;
}

export interface JournalMetric {
  label: string;
  value: string;
  sub?: string;
  icon: string;
}

// ── Future-facing: API contract shapes ──────────────────────
export interface ApiResponse<T> {
  data: T;
  total?: number;
  page?: number;
  pageSize?: number;
  error?: string;
}

export interface SearchFilters {
  query: string;
  articleType?: ArticleType;
  year?: number;
  volume?: number;
  issue?: number;
  section?: string;
  accessType?: AccessType;
  sortBy?: 'relevance' | 'date' | 'citations' | 'views';
}
