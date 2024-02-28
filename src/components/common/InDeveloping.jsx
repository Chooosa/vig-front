import { useTranslation } from 'next-i18next';
import React from 'react';

function InDeveloping() {
  const { t } = useTranslation();

  return (
    <div className="in-developing-container">
      <h2 className="in-developing-title">{t('in-developing-title')}</h2>

      <span className="in-developing-loader" />
    </div>
  );
}

export default InDeveloping;

