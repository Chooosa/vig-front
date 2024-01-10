import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';
import DomHolder from '../utils/DomHolder';

function CollapsibleElement({
  active,
  children,
  className,
  contentClassName,
  mountOnEnter,
  unmountOnExit,
  transitionDuration,
  initialHeight,
  usingMaxHeight,
  onEntered,
  ...restProps
}) {
  const collapsibleRef = useRef();
  const heightProperty = usingMaxHeight ? 'maxHeight' : 'height';

  const handleEnter = () => {
    const node = collapsibleRef.current;
    node.style[heightProperty] = `${initialHeight}px`;
    node.style.transitionDuration = `${transitionDuration}ms`;
  };

  const handleEntering = () => {
    const node = collapsibleRef.current;
    const height = node.querySelector('.collapsible-element-content').offsetHeight;
    node.style[heightProperty] = `${height}px`;
  };

  const handleEntered = () => {
    const node = collapsibleRef.current;
    node.style[heightProperty] = heightProperty === 'maxHeight' ? 'none' : 'auto';
    node.style.transitionDuration = '';
    onEntered?.(node);
  };

  const handleExit = () => {
    const node = collapsibleRef.current;
    const height = node.querySelector('.collapsible-element-content').offsetHeight;
    node.style[heightProperty] = `${height}px`;
    node.style.transitionDuration = `${transitionDuration}ms`;
  };

  const handleExiting = () => {
    const node = collapsibleRef.current;
    node.style[heightProperty] = `${initialHeight}px`;
  };

  const handleExited = () => {
    const node = collapsibleRef.current;
    node.style[heightProperty] = `${initialHeight}px`;
    node.style.transitionDuration = '';
  };

  return (
    <CSSTransition
      classNames="collapsible-element"
      in={active}
      timeout={transitionDuration}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      onExited={handleExited}
      nodeRef={collapsibleRef}
    >
      <div ref={collapsibleRef} className={classnames('collapsible-element', className)} {...restProps}>
        <div className={classnames('collapsible-element-content', contentClassName)}>
          <DomHolder>
            {children}
          </DomHolder>
        </div>
      </div>
    </CSSTransition>
  );
}

CollapsibleElement.propTypes = {
  active: PropTypes.bool.isRequired,
  initialHeight: PropTypes.number,
  usingMaxHeight: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  transitionDuration: PropTypes.number,
  onEntered: PropTypes.func,
};

CollapsibleElement.defaultProps = {
  initialHeight: 0,
  usingMaxHeight: false,
  mountOnEnter: true,
  unmountOnExit: true,
  transitionDuration: 300,
};

export default CollapsibleElement;
