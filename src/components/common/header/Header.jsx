import HeaderMenuModal from '@/components/common/header/HeaderMenuModal';
import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { phoneNumber, phoneNumberHref } from '@/utils/companyInfo';
import LogoLink from '@/components/common/LogoLink';
import useDevice from '../../../hooks/useDevice';
import NavLink from '../NavLink';
import LangSwitch from './LangSwitch';
import PhoneIcon from '../../../assets/svg/phone.svg';

const Header = forwardRef(({ pageId }, ref) => {
  const { t } = useTranslation('common');
  const linksById = t('nav', { returnObjects: true });
  const links = Object.entries(linksById);
  const router = useRouter();
  const { asPath } = router;
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isMobile } = useDevice();

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpened((prev) => !prev);
  }, []);

  return (
    <header className="header">
      <div className="header-row top">
        <div className="header-content">
          <a href={phoneNumberHref} className="phone-link">
            <PhoneIcon className="phone-icon" />
            {phoneNumber}
          </a>

          <LangSwitch pageId={pageId} />
        </div>
      </div>

      <div className="header-row">
        <div className="header-content">
          <LogoLink className="header-link" />

          {isMobile ? (
            <button
              className={classnames('burger-button', { _open: isMenuOpened })}
              onClick={handleToggleMenu}
            >
              <span className="burger-line top" />
              <span className="burger-line middle" />
              <span className="burger-line bottom" />
            </button>
          ) : (
            <div className="nav-links-wrapper">
              <NavLink href="/" className="header-link" active={asPath === '/'}>
                {t('home')}
              </NavLink>
              {links.map(([key, value]) => (
                <NavLink key={key} href={key} className="header-link" active={asPath.includes(key)}>
                  {value}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>

      <HeaderMenuModal opened={isMenuOpened} onClose={() => setIsMenuOpened(false)} />
    </header>
  );
});

Header.displayName = 'Header';

Header.propTypes = {
  pageId: PropTypes.string.isRequired,
};

export default Header;
