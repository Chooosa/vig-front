import AnimatedServiceCard from '@/components/common/AnimatedServiceCard';
import React, { useState } from 'react';
import Section from '@/components/common/Section';
import { useTranslation } from 'next-i18next';

function SectionHomeServices() {
  const { t } = useTranslation('home');
  const services = t('services', { returnObjects: true });
  const [openedCardId, setOpenedCardId] = useState('');

  return (
    <Section id="services">
      {services.map((service) => (
        <AnimatedServiceCard
          key={service.id}
          openedId={openedCardId}
          setOpenedId={setOpenedCardId}
          {...service}
        />
      ))}
    </Section>
  );
}

export default SectionHomeServices;
