import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import CloseIcon from '../../../../assets/svg/close.svg';


const modalTransitionTimeout = {
  appear: 300,
  enter: 300,
  exit: 200,
};

let prevActiveElement;

function handleEnter() {
  document.body.classList.add('ui-modal-active');
  document.body.querySelector('.main').style.position = 'relative';
}

function handleExit() {
  prevActiveElement?.focus();
  document.body.classList.remove('ui-modal-active');
  document.body.querySelector('.main').style.position = '';
}

function handleExited() {
  // document.body.classList.remove('');
}

function Modal({ active, className, children, closeOnBackdropClick, onClose }) {
  const ref = useRef();
  const contentRef = useRef();

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handleBackdropClick = useCallback(() => {
    if (closeOnBackdropClick) {
      onClose();
    }
  }, [closeOnBackdropClick, onClose]);

  useEffect(() => {
    if (active) {
      prevActiveElement = document.activeElement;
      contentRef.current.focus();
    }
  }, [active]);

  useEffect(() => {
    return () => {
      if (active) {
        handleExit();
        handleExited();
      }
    };
  }, []);

  return (
    <CSSTransition
      classNames="ui-modal"
      timeout={modalTransitionTimeout}
      in={active}
      mountOnEnter
      unmountOnExit
      onEnter={handleEnter}
      onExit={handleExit}
      onExited={handleExited}
      nodeRef={ref}
    >
      <div ref={ref} className={classnames(className, 'ui-modal')}>
        <div ref={contentRef} tabIndex="0" className="ui-modal-content" onKeyDown={handleKeyDown}>
          <div className="ui-modal-close-btn" tabIndex="-1" onClick={onClose}>
            <CloseIcon className="close-icon" />
          </div>
          <div className="ui-modal-body">
            {children}
          </div>
        </div>
        <div className="ui-modal-backdrop" onClick={handleBackdropClick} />
      </div>
    </CSSTransition>
  );
}

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  closeOnBackdropClick: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  closeOnBackdropClick: true,
};

const ModalPortal = ({ ...props }) => {
  if (!process.browser) return null;
  return createPortal(<Modal {...props} />, window.document.body);
};

export default ModalPortal;
