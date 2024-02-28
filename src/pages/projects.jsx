import InDeveloping from '@/components/common/InDeveloping';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page from '../components/common/Page';

function Projects() {

  return (
    <Page id="projects">
      <InDeveloping />
    </Page>
  );
}

export const getStaticProps = async ({ locale }) => {

  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'projects']),
    },
  }
};

export default Projects;
