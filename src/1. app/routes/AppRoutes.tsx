import { BrowserRouter } from 'react-router';
import { Routes, Route } from 'react-router-dom';

import PostListPage from '@/2. pages/Board/PostListPage.tsx';
import PostDetailPage from '@/2. pages/Board/PostDetailPage.tsx';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
