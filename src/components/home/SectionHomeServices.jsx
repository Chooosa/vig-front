import AnimatedServiceCard from '@/components/common/AnimatedServiceCard';
import React from 'react';
import Section from '@/components/common/Section';
import { useTranslation } from 'next-i18next';

function SectionHomeServices(props) {
  const { t } = useTranslation('home');
  const services = t('services', { returnObjects: true });

  return (
    <Section id="services">
      {services.map((service) => (
        <AnimatedServiceCard key={service.id} {...service} />
      ))}
    </Section>
  );
}

export default SectionHomeServices;
