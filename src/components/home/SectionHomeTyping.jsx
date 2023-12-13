import TypingText from '@/components/common/TypingText';
import React from 'react';
import Section from '@/components/common/Section';
import { useTranslation } from 'next-i18next';

function SectionHomeTyping() {
  const { t } = useTranslation('home');
  const typingValues = t('typing.values', { returnObjects: true });

  return (
    <Section id="typing">
      <h3 className="typing-title">{t('typing.title')}</h3>

      <TypingText data={typingValues} />
    </Section>
  );
}

export default SectionHomeTyping;
