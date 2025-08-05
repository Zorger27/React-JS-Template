import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from '@dr.pogodin/react-helmet';

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

  const canonicalUrl = `https://react-js-template.vercel.app${location.pathname}`;

  return (
    <div className="app">
      <Helmet>
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/*/!* Google Analytics *!/*/}
        {/*<script async src="https://www.googletagmanager.com/gtag/js?id=G-RZHR947YVN" />*/}
        {/*<script>*/}
        {/*  {`*/}
        {/*    window.dataLayer = window.dataLayer || [];*/}
        {/*    function gtag(){dataLayer.push(arguments);}*/}
        {/*    gtag('js', new Date());*/}
        {/*    gtag('config', 'G-RZHR947YVN');*/}
        {/*  `}*/}
        {/*</script>*/}

        {/*/!* Google Site Verification *!/*/}
        {/*<meta name="google-site-verification" content="Gq9vrXtN91P1JteGFo-xrlLKT0PR8u-4P4xs21oUr8Y" />*/}
      </Helmet>

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
          <Route path="*" element={<Navigate to="/404" replace />} />
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
