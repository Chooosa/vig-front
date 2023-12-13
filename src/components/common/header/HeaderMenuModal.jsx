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

function HeaderMenuModal({ opened }) {
  const ref = useRef(null);

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
        Модалка
      </div>
    </CSSTransition>
  );
}

HeaderMenuModal.propTypes = {
  opened: PropTypes.bool.isRequired,
};

export default HeaderMenuModal;
