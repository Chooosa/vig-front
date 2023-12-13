import RequestModal from '@/components/common/RequestModal';
import Section from '@/components/common/Section';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';

function SectionHomeGoals(props) {
  const { t } = useTranslation('home');
  const goalsList = t('goals.list', { returnObjects: true });
  const [active, setActive] = useState(false);

  return (
    <Section id="goals">
      <h2 className="goals-title">{t('goals.title')}</h2>

      <ul className="goals-list">
        {goalsList.map((goal, i) => (
          <li key={goal + i} className="goal-item">{goal}</li>
        ))}
      </ul>

      <span className="goals-conclusion">{t('goals.conclusion')}</span>

      <button className="request-button" onClick={() => setActive(true)}>{t('common:leave-request')}</button>

      <RequestModal active={active} onClose={() => setActive(false)} />
    </Section>
  );
}

export default SectionHomeGoals;
