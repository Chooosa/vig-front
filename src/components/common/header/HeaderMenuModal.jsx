import NavLink from '@/components/common/NavLink';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

function handleEnter() {
  document.body.classList.add('mobile-menu-opened', 'mobile-menu-backdrop-active');
  document.body.querySelector('.main').style.position = 'relative';
}

function handleExit() {
  document.body.classList.remove('mobile-menu-backdrop-active');
  document.body.querySelector('.main').style.top = '';
  document.body.querySelector('.main').style.position = '';
}

function handleExited() {
  document.body.classList.remove('mobile-menu-opened');
}

const mobileMenuTransitionTimeout = {
  appear: 1350,
  enter: 1350,
  exit: 200,
};

function HeaderMenuModal({ opened, onClose }) {
  const { t } = useTranslation('common');
  const ref = useRef(null);
  const linksById = t('nav', { returnObjects: true });
  const links = Object.entries(linksById);
  const router = useRouter();
  const { asPath } = router;

  return (
    <CSSTransition
      classNames="header-menu-modal"
      timeout={mobileMenuTransitionTimeout}
      in={opened}
      onEnter={handleEnter}
      onExit={handleExit}
      onExited={handleExited}
      mountOnEnter
      unmountOnExit
      nodeRef={ref}
    >
      <div className="header-menu-modal" ref={ref}>
        <div className="nav-links-wrapper">
          <NavLink href="/" className="header-link" active={asPath === '/'} onClick={onClose} underlined={false}>
            {t('home')}
          </NavLink>
          {links.map(([key, value]) => (
            <NavLink key={key} href={key} className="header-link" active={asPath.includes(key)} onClick={onClose} underlined={false}>
              {value}
            </NavLink>
          ))}
        </div>
      </div>
    </CSSTransition>
  );
}

HeaderMenuModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default HeaderMenuModal;
