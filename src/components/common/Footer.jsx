import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';
import { addressHref, companyMail, companyMailHref, phoneNumber, phoneNumberHref } from '@/utils/companyInfo';
import LogoLink from '@/components/common/LogoLink';
import NavLink from '@/components/common/NavLink';
import PhoneIcon from '@/assets/svg/phone.svg';
import PinIcon from '@/assets/svg/map-pin.svg';
import MailIcon from '@/assets/svg/mail.svg';

function Footer() {
  const { t } = useTranslation('common');
  const navLinks = Object.entries(t('nav', { returnObjects: true }));
  const serviceLinks = Object.entries(t('services', { returnObjects: true }));
  const router = useRouter();
  const { asPath } = router;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns-wrap">
          <div className="footer-column _logo">
            <LogoLink className="footer-link" />
          </div>

          <div className="footer-column _nav">
            <span className="column-title">{t('navigation')}</span>
            <div className="nav-links-wrapper">
              <NavLink href="/" className="footer-link" active={asPath === '/'}>
                {t('home')}
              </NavLink>
              {navLinks.map(([key, value]) => (
                <NavLink key={key} href={key} className="footer-link" active={asPath.includes(key)}>
                  {value}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="footer-column _services">
            <span className="column-title">{t('our-services')}</span>
            <div className="nav-links-wrapper">
              {serviceLinks.map(([key, value]) => (
                <NavLink key={key} href={key} className="footer-link" active={asPath.includes(key)}>
                  {value}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="footer-column _contacts">
            <a href={phoneNumberHref} className="phone-link">
              {/*<PhoneIcon className="phone-icon" />*/}
              {phoneNumber}
            </a>

            <a href={addressHref} className="address-link" target="_blank" rel="noreferrer noopener nofollow">
              {/*<PinIcon className="pin-icon" />*/}
              <span className="link-content">{t('address')}</span>
            </a>

            <a href={companyMailHref} className="mail-link">
              {/*<MailIcon className="mail-icon" />*/}
              {companyMail}
            </a>

            {/*  TODO add socials links */}
          </div>

        </div>

        <div className="footer-bottom-row">
          {t('company-name')} © 2024
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  pageId: PropTypes.string.isRequired,
};

export default Footer;

