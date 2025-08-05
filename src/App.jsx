import React from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation, Navigate} from 'react-router-dom';
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
// import CatchAllRoute from '@/components/util/CatchAllRoute.jsx';
import '@/App.scss';

const AppLayout = () => {
  const location = useLocation();
  const path = location.pathname;

  // if (/\.(jpg|png|gif|svg)$/.test(path)) return null; // игнор статических файлов

  const isNotFound = path.startsWith('/404');

  // 👉 Посмотреть текущий путь в консоли
  console.log('[AppLayout] location.pathname:', location.pathname);

  return (
    <div className="app">
      <Canonical url={`https://react-js-template.vercel.app${path}`} />
      {/*<GoogleAnalytics id="G-RZHR947YVN" />*/}
      {/*<GoogleSiteVerification code="Gq9vrXtN91P1JteGFo-xrlLKT0PR8u-4P4xs21oUr8Y" />*/}

      {!isNotFound && <Header />}
      {/*<Header />*/}
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />

          {/* Обработка неизвестных маршрутов */}
          {/*<Route path="*" element={<Navigate to="/404" replace />} />*/}

          {/*<Route path="*" element={<CatchAllRoute />} />*/}
        </Routes>
      </main>
      {/*<Footer />*/}
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