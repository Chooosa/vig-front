import { useTranslation } from 'next-i18next';
import React, { useRef } from 'react';
import Section from '@/components/common/Section';
import useProjectsMap from '@/hooks/useProjectsMap';

function SectionHomeProjectsMap(props) {
  const { t } = useTranslation('home');
  const mapRef = useRef();
  useProjectsMap(mapRef);

  return (
    <Section id="projects-map">
      <h2 className="projects-map-title">{t('projects-map-title')}</h2>
      <div className="projects-map-wrap">
        <div className="projects-map" ref={mapRef} />
      </div>
    </Section>
  );
}

export default SectionHomeProjectsMap;
