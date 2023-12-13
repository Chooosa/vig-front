import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page from '../components/common/Page';

function Projects() {

  return (
    <Page id="projects">
      projects!!!
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
