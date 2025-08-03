import React from 'react';
import { useTranslation } from 'react-i18next';
import footerLogo from '@/assets/img/menu1/footer-logo1.svg';
import '@/components/layout/footer.scss';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const progYear = 2025;

  const navigateToPortfolio = () => {
    window.open('https://zorin.expert', '_blank');
  };

  const displayYear =
    progYear && progYear !== currentYear
      ? `${progYear}–${currentYear}`
      : `${currentYear}`;

  const isProgYearEqual = progYear === currentYear;

  return (
    <footer className="footer">
      <div className="footer-logo" onClick={navigateToPortfolio}>
        <img src={footerLogo} title={t('footer.footerLogo')} alt="Footer Logo Image" />
      </div>

      <div className="footer-content">
        <Author />
        <Copyright displayYear={displayYear} isProgYearEqual={isProgYearEqual} />
      </div>
    </footer>
  );
};

// Вложенный компонент Author
const Author = () => {
  const { t } = useTranslation();
  return (
    <div className="author">
      {t('footer.develop')} <b><a href="https://zorger27.github.io" title={t('footer.linkCV')} target="_blank" rel="noopener noreferrer">{t('footer.zorger')}</a>{t('footer.point')}</b>
    </div>
  );
};

// Вложенный компонент Copyright
const Copyright = ({ displayYear, isProgYearEqual }) => {
  const { t } = useTranslation();
  return (
    <div className={`copyright ${isProgYearEqual ? 'is-prog-year-equal' : ''}`}>
      <b>&copy; {displayYear}</b> – {t('footer.rights')}
    </div>
  );
};

export default Footer;
