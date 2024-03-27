import classnames from 'classnames';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';

function LangSwitch({ pageId }) {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { locale, locales, pathname, asPath, query } = router;

  const handleSwitchLanguageClick = useCallback((e) => {
    const { lang } = e.currentTarget.dataset;
    router.push({ pathname, query }, asPath, { locale: lang, shallow: true, scroll: false });
  }, []);

  useEffect(() => {
    const loadNamespace = async (locale, namespace) => {
      const resources = await fetch(`/locales/${locale}/${namespace}.json`)
        .then(res => res.json());

      i18n.addResourceBundle(locale, namespace, resources, true, true);
      return resources;
    };

    let ns = pageId || 'home';

    if (i18n.addResourceBundle && !i18n.hasResourceBundle(locale, ns)) {
      const promises = [loadNamespace(locale, ns)];
      if (!i18n.hasResourceBundle(locale, 'common')) {
        promises.push(loadNamespace(locale, 'common'));
      }
      Promise.all(promises)
        .then(() => {
          i18n.changeLanguage(locale);
        });
    } else {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return (
    <div className="lang-switch">
      <button
        className={classnames('lang-button', { active: locale === 'ru' })}
        data-lang="ru"
        onClick={handleSwitchLanguageClick}
      >
        RU
      </button>
      <button
        className={classnames('lang-button', { active: locale === 'en' })}
        data-lang="en"
        onClick={handleSwitchLanguageClick}
      >
        EN
      </button>
    </div>
  );
}

export default LangSwitch;
