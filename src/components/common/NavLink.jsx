import classnames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

const NavLink = forwardRef(({ href, className, children, active }, ref) => (
  <Link href={href} passHref>
    <a href={href} className={classnames('nav-link', className, { active })} ref={ref}>
      {children}
    </a>
  </Link>
));

NavLink.displayName = 'NavLink';

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  active: PropTypes.bool,
};

export default NavLink;