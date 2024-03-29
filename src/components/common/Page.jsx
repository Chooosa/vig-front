import React, { useMemo } from 'react';
import NextHead from 'next/head';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import { usePageClass } from '../../hooks';
import { PageContext } from '../../utils/contexts/pageContext';

const Page = ({ id, children }) => {
  const transformedId = useMemo(() => id.split('/').join('-'), [id]);
  usePageClass(`page-${transformedId}`);
  const { t } = useTranslation(transformedId);
  const pageContextValue = useMemo(() => ({ pageId: id }), [id]);
  // const ogUrl = id === 'home' ? '' : id;

  return (
    <>
      <NextHead>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.desc')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <meta name="og-title" property="og:title" content={t('meta.title')} />
        <meta name="og-description" property="og:description" content={t('meta.desc')} />
        {/*<meta property="og:url" content={`//vig-domain.ru/${ogUrl}`} />*/}
        {/*<link rel="canonical" href={`https://vig-domain.ru/${ogUrl}`} />*/}
      </NextHead>

      <PageContext.Provider value={pageContextValue}>
        <div className="page-content">
          {children}
        </div>
      </PageContext.Provider>
    </>
  );
}

Page.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Page;
