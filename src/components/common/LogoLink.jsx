import NavLink from '@/components/common/NavLink';
import classnames from 'classnames';
import React from 'react';
import VigLogo from '../../../public/assets/common/vig.svg'

function LogoLink({ className }) {
  return (
    <NavLink href="/" className={classnames('logo-link', className)} underlined={false}>
      <VigLogo />
    </NavLink>
  );
}

export default LogoLink;
