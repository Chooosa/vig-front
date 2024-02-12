import AnimatedNumber from '@/components/common/AnimatedNumber';
import HtmlText from '@/components/common/utils/HtmlText';
import { useTranslation } from 'next-i18next';
import React from 'react';
import Section from '@/components/common/Section';

function SectionHomeNumbers(props) {
  const { t } = useTranslation('home');
  const numbers = t('numbers', { returnObjects: true });

  return (
    <Section id="numbers">
      <div className="numbers-container">
        {numbers.map(({ number, label }) => (
          <div key={number + label} className="number-wrap">
            <span className="number-title">{t('common:more')}</span>
            <AnimatedNumber className="number-value" end={number} />
            <HtmlText tag="span" className="number-label">{label}</HtmlText>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default SectionHomeNumbers;
