import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import '@/pages/menu/About.scss';

export const About = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  const [tableView, setTableView] = useState(false);
  const infoList = useSelector((state) => state.info);

  return (
    <div className="about">
      <div className="container">
        <h1 className="main">
          {t('about.title')}{' '}
          <i onClick={() => setTableView(!tableView)}><span className={`fa ${tableView ? 'fa-list' : 'fa-th'}`}></span></i>
        </h1>

        <div className="about-content">
          <section className="about-description">
            <line></line>
            <h2 className="more" onClick={() => setShowMore(!showMore)}>
              {t('about.more01')}
              <i className="fas fa-hand-pointer" />
            </h2>
            {showMore && (
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
            {tableView ? (
              <div className="table">
                <table>
                  <thead>
                  <tr>
                    <th className="tech-title" colSpan="3">
                      {t('about.technologies')}
                    </th>
                  </tr>
                  <tr>
                    <th>№</th>
                    <th>{t('about.name')}</th>
                    <th>{t('about.version')}</th>
                  </tr>
                  </thead>
                  <tbody>
                  {infoList.map((info) => (
                    <tr key={info.id}>
                      <td className="nomer">{info.id}</td>
                      <td className="name">
                        <a href={info.url} title={t('extra.detail')} target="_blank" rel="noopener noreferrer">
                          {info.title}
                        </a>
                      </td>
                      <td className="version">{info.version}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <>
                <h2 className="tech-title">{t('about.technologies')}</h2>
                {infoList.map((info) => (
                  <div className="card-info" key={info.id}>
                    <a className="card-link" href={info.url} target="_blank" rel="noopener noreferrer" title={t('extra.detail')}>
                      <h3>
                        <span style={{ color: 'black' }}>{info.id}.</span>{' '}
                        <span>{info.title}</span>{' '}
                        <span style={{ color: 'red' }}>{info.version ? `v.${info.version}` : ''}</span>
                      </h3>
                    </a>
                  </div>
                ))}
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
