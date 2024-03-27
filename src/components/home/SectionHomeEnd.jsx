import Section from '@/components/common/Section';
import HtmlText from '@/components/common/utils/HtmlText';
import { useTranslation } from 'next-i18next';
import React from 'react';

function SectionHomeEnd() {
  const { t } = useTranslation('home');

  return (
    <Section id="end">
      <HtmlText tag="p" className="end-page-description">
        {t('end-section-desc')}
      </HtmlText>
    </Section>
  );
}

export default SectionHomeEnd;
