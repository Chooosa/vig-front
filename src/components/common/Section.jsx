import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useSection } from '../../hooks';

const Section = forwardRef(({ children, id, className }, _ref) => {
  const innerRef = useRef();
  const ref = _ref ?? innerRef;

  useSection(ref);

  return (
    <section className={classnames('section', `section-${id}`, className)} id={id} ref={ref}>
      {children}
    </section>
  );
});

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: '',
};

Section.displayName = 'Section';

export default Section;
