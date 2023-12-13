import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page from '../components/common/Page';

function Services() {

  return (
    <Page id="services">
      services!!!
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
