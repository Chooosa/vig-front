import InDeveloping from '@/components/common/InDeveloping';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page from '../components/common/Page';

function Services() {

  return (
    <Page id="services">
      <InDeveloping />
    </Page>
  );
}

export const getStaticProps = async ({ locale }) => {

  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'services']),
    },
  }
};

export default Services;
