import SectionProjectsItem from '@/components/prjects/SectionProjectsItem';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page from '../components/common/Page';

function Projects() {
  const { t } = useTranslation('projects');
  const cases = t('cases', { returnObjects: true });

  return (
    <Page id="projects">
      {cases.map((_case, i) => (
        <SectionProjectsItem key={_case.id} {..._case} index={i} />
      ))}
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
