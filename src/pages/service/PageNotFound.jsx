import React from 'react';
import { Link } from 'react-router-dom';
import '@/pages/service/PageNotFound.scss';
import {useTranslation} from "react-i18next";

const PageNotFound = () => {
const { t } = useTranslation();
  return (
    <div className="page-not-found">
      <div className="inner">
        <h1>404</h1>
        <p>{t('extra.info404')}</p>
        <Link to="/">{t('extra.btn404')}</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
