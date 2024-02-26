import MailIcon from '@/assets/svg/mail.svg';
import PinIcon from '@/assets/svg/map-pin.svg';
import PhoneIcon from '@/assets/svg/phone.svg';
import Section from '@/components/common/Section';
import useContactsMap from '@/hooks/useContactsMap';
import { addressHref, companyMail, companyMailHref, phoneNumber, phoneNumberHref } from '@/utils/companyInfo';
import { useTranslation } from 'next-i18next';
import React, { useRef } from 'react';

function SectionContactsInfo(props) {
  const { t } = useTranslation('contacts');
  const mapRef = useRef();
  useContactsMap(mapRef);

  return (
    <Section id="contacts">
      <h1 className="title">{t('title')}</h1>

      <div className="contacts-container">
        <div className="contacts-content">
          <span className="contacts-item">{t('company')}</span>
          <span className="contacts-item">{t('common:address')}</span>
          <span className="contacts-item">
            {t('phone')}:
            <a href={phoneNumberHref} className="contacts-link">
              {phoneNumber}
            </a>
          </span>
          <span className="contacts-item">
            E-mail:
            <a href={companyMailHref} className="contacts-link">
              {companyMail}
            </a>
          </span>
          <span className="contacts-item">{t('address-correspondence-title')}:</span>
          <span className="contacts-item">{t('address-correspondence')}</span>
        </div>

        <div className="map-wrap">
          <div className="map" ref={mapRef} />
        </div>
      </div>
    </Section>
  );
}

export default SectionContactsInfo;
