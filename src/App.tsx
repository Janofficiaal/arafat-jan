import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainLandingPage from './pages/MainLandingPage';
import RealEstatePage from './pages/RealEstatePage';

// Helper component to handle both pathname and hash routes seamlessly
const AppRoutes = () => {
  const location = useLocation();
  const hash = location.hash.toLowerCase();

  // If user navigates via hash like #/real-estate or #/realstate
  if (hash === '#/real-estate' || hash === '#/realstate' || hash === '#real-estate' || hash === '#realstate') {
    return <RealEstatePage />;
  }

  return (
    <Routes>
      <Route path="/" element={<MainLandingPage />} />
      <Route path="/real-estate" element={<RealEstatePage />} />
      <Route path="/realstate" element={<RealEstatePage />} />
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

