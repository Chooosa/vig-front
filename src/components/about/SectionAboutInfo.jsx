import Section from '@/components/common/Section';
import HtmlText from '@/components/common/utils/HtmlText';
import { useTranslation } from 'next-i18next';
import React from 'react';

function SectionAboutInfo(props) {
  const { t } = useTranslation('about');
  const descriptions = t('descriptions', { returnObjects: true })

  return (
    <Section id="about">
      <h1 className="title">{t('title')}</h1>

      {descriptions.map((desc, i) => (
        <HtmlText key={desc + i} className="about-description" tag="p">{desc}</HtmlText>
      ))}
    </Section>
  );
}

export default SectionAboutInfo;
