import React from 'react';
import NextHead from 'next/head';
import { withTranslation } from 'next-i18next';

// https://realfavicongenerator.net/

const Head = ({ t }) => (
  <NextHead>
    {/*<title>{t('page.title')}</title>*/}

    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#6688bd" />
    <meta name="msapplication-TileColor" content="#6688bd" />
    <meta name="theme-color" content="#ffffff" />

    {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />*/}
    {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />*/}
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    {/*<meta name="description" content={t('page.meta.description')} />*/}
    {/*<meta name="og-title" property="og:title" content={t('page.title')} />*/}
    {/*<meta name="og-description" property="og:description" content={t('page.meta.og-description')} />*/}
    {/*<meta name="og-image" property="og:image" content="https://vig.ru/assets/common/logo/og-logo.png" />*/}
    {/*<meta name="og-image-secure" property="og:image:secure_url" content="https://vig.ru/assets/common/logo/og-logo.png" />*/}
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:type" content="website" />
    {/*<meta property="og:url" content="//vig.ru" />*/}
    <meta property="og:site_name" content="VIG" />
  </NextHead>
);

export default withTranslation('common')(Head);
