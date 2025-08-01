import React from 'react';
import '@/pages/menu/Project3.scss';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";

export const Project3 = () => {
  const { t } = useTranslation();
  return (
    <div className="project3">
      <div className="container">
        <h1><Link to="/" className="back-to-menu" title={t('extra.back')}><i className="fa fa-arrow-circle-left"></i></Link>{t('project3.name')}</h1>
        <line></line>
      </div>
    </div>
  );
};