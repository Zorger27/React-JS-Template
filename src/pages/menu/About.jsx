import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@/pages/menu/About.scss';

export const About = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="about">
      <div className="container">
        <h1>{t('about.title')}</h1>
        <div className="about-content">
          <section className="about-description">
            <line></line>
            <h2 className="more" onClick={() => setShowMore(!showMore)}>
              {t('about.more01')}
              {/*<i className="fas fa-hand-pointer" style={{ color: 'red', marginLeft: '0.5rem' }}/>*/}
              <i className="fas fa-hand-pointer"/>
            </h2>
            { showMore && (
              <>
                <p>{t('about.more02')}</p>
                <p>{t('about.more03')}</p>
                <p>{t('about.more04')}</p>
                <h3>{t('about.more05')}</h3>
              </>
            )}
            <line></line>
          </section>

          <section className="about-tech">
            <h2 className="tech-title">{t('about.technologies')}</h2>
            <ul className="tech-list">
              <li>React 19</li>
              <li>Vite</li>
              <li>SCSS</li>
              <li>PWA (Progressive Web App)</li>
              <li>React Router</li>
              <li>Workbox</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};