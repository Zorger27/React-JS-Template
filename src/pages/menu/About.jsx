import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import '@/pages/menu/About.scss';

export const About = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  const infoList = useSelector((state) => state.info); // ← доступ к store

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

            {infoList.map((info) => (
              <div className="card-info" key={info.id}>
                <a className="card-link" href={info.url} target="_blank" rel="noopener noreferrer" title="In more detail...">
                  <h3>
                    <span style={{ color: 'black' }}>{info.id}.</span>{' '}
                    <span>{info.title}</span>{' '}
                    <span style={{ color: 'red' }}>{info.version ? `v.${info.version}` : ''}</span>
                  </h3>
                </a>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};