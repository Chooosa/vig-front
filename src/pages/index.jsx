import SectionHomeEnd from '@/components/home/SectionHomeEnd';
import SectionHomeGreetings from '@/components/home/SectionHomeGreetings';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page from '../components/common/Page';
import SectionHomeNumbers from '@/components/home/SectionHomeNumbers';
import SectionHomeGoals from '@/components/home/SectionHomeGoals';
import SectionHomeProjects from '@/components/home/SectionHomeProjects';
import SectionHomeServices from '@/components/home/SectionHomeServices';
import SectionHomeProjectsMap from '@/components/home/SectionHomeProjectsMap';

function Home() {
  return (
    <Page id="home">
      <SectionHomeGreetings />
      {/*<SectionHomeTyping />*/}
      <SectionHomeGoals />
      <SectionHomeProjects />
      <SectionHomeNumbers />
      <SectionHomeServices />
      <SectionHomeProjectsMap />
      <SectionHomeEnd />
    </Page>
  );
}

export const getStaticProps = async ({ locale }) => {

  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'home']),
    },
  }
};

export default Home;
