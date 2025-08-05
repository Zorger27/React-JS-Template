import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import Canonical from '@/components/seo/Canonical.jsx';
// import GoogleAnalytics from '@/components/seo/GoogleAnalytics.jsx';
// import GoogleSiteVerification from '@/components/seo/GoogleSiteVerification.jsx';

import Header from '@/components/layout/header.jsx';
import Footer from '@/components/layout/footer.jsx';
import Home from '@/pages/menu/Home.jsx';
import { Project1 } from '@/pages/menu/Project1.jsx';
import { Project2 } from '@/pages/menu/Project2.jsx';
import { Project3 } from '@/pages/menu/Project3.jsx';
import { About } from '@/pages/menu/About.jsx';
import PageNotFound from '@/pages/service/PageNotFound.jsx';
import '@/App.scss';

const AppLayout = () => {
  const location = useLocation();
  const isNotFound = location.pathname.startsWith('/404');

  return (
    <div className="app">
      <Canonical url={`https://react-js-template.vercel.app${location.pathname}`} />
      {/*<GoogleAnalytics id="G-RZHR947YVN" />*/}
      {/*<GoogleSiteVerification code="Gq9vrXtN91P1JteGFo-xrlLKT0PR8u-4P4xs21oUr8Y" />*/}

      {!isNotFound && <Header />}
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<PageNotFound />} />
          {/* Обработка неизвестных маршрутов */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      {!isNotFound && <Footer />}
    </div>
  );
};

const App = () => (
  <HelmetProvider>
    <Router>
      <AppLayout />
    </Router>
  </HelmetProvider>
);

export default App;