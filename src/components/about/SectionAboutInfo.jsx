import Section from '@/components/common/Section';
import HtmlText from '@/components/common/utils/HtmlText';
import { useTranslation } from 'next-i18next';
import React from 'react';

function SectionAboutInfo(props) {
  const { t } = useTranslation('about');
  const paragraphs = t('paragraphs', { returnObjects: true })

  return (
    <Section id="about">
      <h1 className="title">{t('title')}</h1>

      {paragraphs.map(({ title, descriptions }) => (
        <div key={title} className="about-paragraph-wrap">
          <h2 className="about-paragraph-title">{title}</h2>

          {descriptions.map((desc) => {
            if (Array.isArray(desc)) {
              return (
                <ul key={desc.join(',')} className="about-paragraph-list">
                  {desc.map((item) => (
                    <HtmlText key={item} tag="li" className="about-paragraph-list-item">{item}</HtmlText>
                  ))}
                </ul>
              );
            }

            return (
              <HtmlText key={desc} tag="p" className="about-paragraph-description">
                {desc}
              </HtmlText>
            )
          })}
        </div>
      ))}
    </Section>
  );
}

export default SectionAboutInfo;
