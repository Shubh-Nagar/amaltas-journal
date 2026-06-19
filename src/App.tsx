import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ArchivesPage from './pages/ArchivesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import AboutPage from './pages/AboutPage';
import SubmitPage from './pages/SubmitPage';
import EditorialBoardPage from './pages/EditorialBoardPage';
import SearchPage from './pages/SearchPage';
import ContactPage from './pages/ContactPage';
import AuthorGuidelinesPage from './pages/AuthorGuidelinesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="issues" element={<ArchivesPage />} />
          <Route path="article/:id" element={<ArticleDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="submit" element={<SubmitPage />} />
          <Route path="editorial-board" element={<EditorialBoardPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="author-guidelines" element={<AuthorGuidelinesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
