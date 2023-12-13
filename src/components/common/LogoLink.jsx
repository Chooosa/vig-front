import NavLink from '@/components/common/NavLink';
import classnames from 'classnames';
import Image from 'next/image';
import React from 'react';
import vigLogo from '../../../public/assets/common/vig.png';

function LogoLink({ className }) {
  return (
    <NavLink href="/" className={classnames('logo-link', className)}>
      <Image src={vigLogo} width={150} height={60} />
    </NavLink>
  );
}

export default LogoLink;
