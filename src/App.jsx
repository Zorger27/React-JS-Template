import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/util/LanguageSwitcher.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/header.jsx';
import Footer from '@/components/layout/footer.jsx';
import Home from '@/pages/menu/Home.jsx';
import { Project1 } from '@/pages/menu/Project1.jsx';
import { Project2 } from '@/pages/menu/Project2.jsx';
import { Project3 } from '@/pages/menu/Project3.jsx';
import { About } from '@/pages/menu/About.jsx';
import '@/App.scss'

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          {/*<LanguageSwitcher />*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/project3" element={<Project3 />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
