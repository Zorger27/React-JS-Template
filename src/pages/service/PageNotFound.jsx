import React from 'react';
import { Link } from 'react-router-dom';
import '@/pages/service/PageNotFound.scss';
import {useTranslation} from "react-i18next";
import {Helmet} from "@dr.pogodin/react-helmet";

const PageNotFound = () => {
const { t } = useTranslation();
  return (
    <div className="page-not-found">
      <Helmet>
        <title>{t('page404.name')}</title>
        <meta name="description" content={t('page404.disc')} />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={t('page404.name')} />
        <meta property="og:description" content={t('page404.disc')} />
        <meta property="og:image" content="https://react-js-template.vercel.app/ogimage/page404.jpg" />
        <meta property="og:url" content="https://react-js-template.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="https://react-js-template.vercel.app" />

        {/* Twitter meta tags */}
        <meta property="twitter:title" content={t('page404.name')} />
        <meta property="twitter:description" content={t('page404.disc')} />
        <meta property="twitter:image" content="https://react-js-template.vercel.app/ogimage/page404.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="inner">
        <h1>404</h1>
        <p>{t('page404.info404')}</p>
        <Link to="/">{t('page404.btn404')}</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
