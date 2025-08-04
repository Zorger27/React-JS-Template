import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from '@dr.pogodin/react-helmet';
import '@/pages/menu/Project1.scss';
import {Link} from "react-router-dom";

export const Project1 = () => {
  const { t } = useTranslation();
  return (
    <div className="project1">
      <Helmet>
        <title>{t('project1.name')}</title>
        <meta name="description" content={t('project1.disc')} />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={t('project1.name')} />
        <meta property="og:description" content={t('project1.disc')} />
        <meta property="og:image" content="https://react-js-template.vercel.app/ogimage/project1.jpg" />
        <meta property="og:url" content="https://react-js-template.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="https://react-js-template.vercel.app" />

        {/* Twitter meta tags */}
        <meta property="twitter:title" content={t('project1.name')} />
        <meta property="twitter:description" content={t('project1.disc')} />
        <meta property="twitter:image" content="https://react-js-template.vercel.app/ogimage/project1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="container">
        <h1><Link to="/" className="back-to-menu" title={t('extra.back')}>
          <i className="fa fa-arrow-circle-left"></i></Link>{t('project1.name')}
        </h1>
        <line></line>
      </div>
    </div>
  );
};
