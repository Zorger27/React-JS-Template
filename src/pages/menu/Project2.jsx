import React from 'react';
import '@/pages/menu/Project2.scss';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";

export const Project2 = () => {
  const { t } = useTranslation();
  return (
    <div className="project2">
      <div className="container">
        <h1><Link to="/" className="back-to-menu" title={t('extra.back')}><i className="fa fa-arrow-circle-left"></i></Link>{t('project2.name')}</h1>
        <line></line>
      </div>
    </div>
  );
};