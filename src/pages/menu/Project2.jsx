import React from 'react';
import '@/pages/menu/Project2.scss';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";
import {Helmet} from "@dr.pogodin/react-helmet";

export const Project2 = () => {
  const { t } = useTranslation();
  return (
    <div className="project2">
      <Helmet>
        <title>{t('project2.name')}</title>
        <meta name="description" content={t('project2.disc')} />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={t('project2.name')} />
        <meta property="og:description" content={t('project2.disc')} />
        <meta property="og:image" content="https://react-js-template.vercel.app/ogimage/project2.jpg" />
        <meta property="og:url" content="https://react-js-template.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="https://react-js-template.vercel.app" />

        {/* Twitter meta tags */}
        <meta property="twitter:title" content={t('project2.name')} />
        <meta property="twitter:description" content={t('project2.disc')} />
        <meta property="twitter:image" content="https://react-js-template.vercel.app/ogimage/project2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="container">
        <h1><Link to="/" className="back-to-menu" title={t('extra.back')}><i className="fa fa-arrow-circle-left"></i></Link>{t('project2.name')}</h1>
        <line></line>
      </div>
    </div>
  );
};