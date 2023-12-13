import SectionAboutInfo from '@/components/about/SectionAboutInfo';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page from '../components/common/Page';

function About() {
  return (
    <Page id="about">
      <SectionAboutInfo />
    </Page>
  );
}

export const getStaticProps = async ({ locale }) => {

  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'about']),
    },
  }
};

export default About;
