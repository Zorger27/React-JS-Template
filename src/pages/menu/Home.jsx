import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '@/pages/menu/Home.scss';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home">
      <div className="container">
        <h1>{t('home.title')}</h1>
        <p className="flex-center">{t('home.description')}</p>
        <line></line>
        <div className="projects-grid">
          <Link to="/project1" className="project-card-link">
            <div className="project-card">
              <h3>{t('project1.name')}</h3>
              <p>{t('project1.disc')}</p>
              <span className="arrow">➡️</span>
            </div>
          </Link>
          <Link to="/project2" className="project-card-link">
            <div className="project-card">
              <h3>{t('project2.name')}</h3>
              <p>{t('project2.disc')}</p>
              <span className="arrow">➡️</span>
            </div>
          </Link>
          <Link to="/project3" className="project-card-link">
            <div className="project-card">
              <h3>{t('project3.name')}</h3>
              <p>{t('project3.disc')}</p>
              <span className="arrow">➡️</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;