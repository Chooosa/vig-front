import HtmlText from '@/components/common/utils/HtmlText';
import classnames from 'classnames';
import { useTranslation } from 'next-i18next';
import React from 'react';
import PropTypes from 'prop-types';

//TODO перенести анимацию на CSSTransition

function AnimatedServiceCard({ id, title, description }) {
  const { t } = useTranslation('common');

  return (
    <div className={classnames('animated-service-card')}>
      <HtmlText tag="h3" className="card-title">{title}</HtmlText>

      <HtmlText tag="p" className="card-description">
        {description}
      </HtmlText>

      <button className="card-button">{t('details')}</button>
    </div>
  );
}

AnimatedServiceCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AnimatedServiceCard;
