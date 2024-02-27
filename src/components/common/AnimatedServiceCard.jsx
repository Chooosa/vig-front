import CollapsibleElement from '@/components/common/utils/CollapsibleElement';
import HtmlText from '@/components/common/utils/HtmlText';
import { useDevice } from '@/hooks';
import classnames from 'classnames';
import { useTranslation } from 'next-i18next';
import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ChevronIcon from '../../assets/svg/chevron-v2.svg';

function AnimatedServiceCard({ id, title, description, openedId, setOpenedId }) {
  const { t } = useTranslation('common');
  const { isMobile } = useDevice();
  const [opened, setOpened] = useState(false);

  const isActive = useMemo(() => (
    typeof openedId === 'string' ? openedId === id : opened
  ), [opened, openedId, id]);

  const handleToggleCard = useCallback(() => {
    if (setOpenedId) {
      return setOpenedId((prev) => prev === id ? '' : id);
    }

    return setOpened((prev) => !prev);
  }, [id]);

  if (!isMobile) {
    //TODO перенести анимацию на CSSTransition
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

  return (
    <div className={classnames('mobile-animated-service-card', { _opened: isActive })}>
      <button className="toggle-card-button" onClick={handleToggleCard}>
        <HtmlText tag="h3" className="card-title">{title}</HtmlText>
        <ChevronIcon className="chevron-icon" />
      </button>

      <CollapsibleElement active={isActive}>
        <div className="card-content">
          <HtmlText tag="p" className="card-description">
            {description}
          </HtmlText>

          <button className="card-button">{t('details')}</button>
        </div>
      </CollapsibleElement>
    </div>
  );
}

AnimatedServiceCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  openedId: PropTypes.string,
  setOpenedId: PropTypes.func,
};

export default AnimatedServiceCard;
