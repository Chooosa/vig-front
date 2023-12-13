import classnames from 'classnames';
import { useTranslation } from 'next-i18next';
import React, { useCallback } from 'react';

function LangSwitch() {
  const { i18n } = useTranslation();

  const handleSwitchLanguageClick = useCallback((e) => {
    const { lang } = e.target.dataset;
    i18n.changeLanguage(lang);
  }, []);


  return (
    <div className="lang-switch">
      <button
        className={classnames('lang-button', { active: i18n.language === 'ru' })}
        data-lang="ru"
        onClick={handleSwitchLanguageClick}
      >
        RU
      </button>
      <button
        className={classnames('lang-button', { active: i18n.language === 'en' })}
        data-lang="en"
        onClick={handleSwitchLanguageClick}
      >
        EN
      </button>
    </div>
  );
}

export default LangSwitch;
