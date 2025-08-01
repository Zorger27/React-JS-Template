import React from 'react';
import { useTranslation } from 'react-i18next';
import '@/pages/menu/Project1.scss';
import {Link} from "react-router-dom";

export const Project1 = () => {
  const { t } = useTranslation();
  return (
    <div className="project1">
      <div className="container">
        <h1><Link to="/" className="back-to-menu" title={t('extra.back')}><i className="fa fa-arrow-circle-left"></i></Link>{t('project1.name')}</h1>
        <line></line>
      </div>
    </div>
  );
};
