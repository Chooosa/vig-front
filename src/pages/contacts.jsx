import SectionContactsInfo from '@/components/contacts/SectionContactsInfo';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page from '../components/common/Page';

function News() {
  return (
    <Page id="contacts">
      <SectionContactsInfo />
    </Page>
  );
}

export const getStaticProps = async ({ locale }) => {

  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'contacts']),
    },
  }
};

export default News;
