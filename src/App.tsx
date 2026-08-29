import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainLandingPage from './pages/MainLandingPage';
import RealEstatePage from './pages/RealEstatePage';
import UgcAdsPage from './pages/UgcAdsPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';

// Helper component to handle both pathname and hash routes seamlessly
const AppRoutes = () => {
  const location = useLocation();
  const hash = location.hash.toLowerCase();

  // If user navigates via hash like #/real-estate or #/realstate
  if (hash === '#/real-estate' || hash === '#/realstate' || hash === '#real-estate' || hash === '#realstate') {
    return <RealEstatePage />;
  }

  // If user navigates via hash like #/ugc-ads or #/ugc
  if (hash === '#/ugc-ads' || hash === '#/ugc' || hash === '#ugc-ads' || hash === '#ugc') {
    return <UgcAdsPage />;
  }

  // If user navigates via hash like #/blog
  if (hash === '#/blog' || hash === '#blog') {
    return <BlogListPage />;
  }

  return (
    <Routes>
      <Route path="/" element={<MainLandingPage />} />
      <Route path="/real-estate" element={<RealEstatePage />} />
      <Route path="/realstate" element={<RealEstatePage />} />
      <Route path="/ugc-ads" element={<UgcAdsPage />} />
      <Route path="/ugc" element={<UgcAdsPage />} />
      <Route path="/blog" element={<BlogListPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      {/* Fallback to main landing page */}
      <Route path="*" element={<MainLandingPage />} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

