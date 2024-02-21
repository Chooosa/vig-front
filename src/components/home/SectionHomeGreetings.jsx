import HtmlText from '@/components/common/utils/HtmlText';
import Image from 'next/image';
import React from 'react';
import Section from '@/components/common/Section';
import { useTranslation } from 'next-i18next';
import RewardImageSrc from '../../../public/assets/home/reward-medal.png';

function SectionHomeGreetings() {
  const { t } = useTranslation('home');

  return (
    <Section id="greetings">
      <h1 className="company-name">
        {t('greetings.company-name')}

        <span className="company-description">
          {t('greetings.company-description')}
        </span>
      </h1>

      <div className="reward-wrapper">
        <div className="image-wrap">
          <Image src={RewardImageSrc} alt="Награда" className="reward-img" width={180} height={180} />
        </div>
        <HtmlText tag="span" className="reward-desc">{t('greetings.reward-desc')}</HtmlText>
      </div>

      <h2 className="company-slogan">{t('greetings.company-slogan')}</h2>
    </Section>
  );
}

export default SectionHomeGreetings;
