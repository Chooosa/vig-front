import React, { useCallback, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import axios from 'axios';
import Modal from '@/components/common/ui/modal';
import Loader from '@/components/common/Loader';
import { InputField } from '@/components/common/ui/input';
import { PhoneInputField } from '@/components/common/ui/phone-input';
import DomHolder from '@/components/common/utils/DomHolder';
import SuccessIcon from '../../assets/svg/success.svg';
import FileInputField from './ui/file-input/FileInputField';


const initialErrors = {
  name: 'Required',
  email: 'Required',
  phone: 'Required',
  message: 'Required',
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  phone: yup.string(),
  message: yup.string(),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

function RequestModalContent({ onClose }) {
  const { t } = useTranslation('common');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState('form');
  const resetTimerIdRef = useRef();

  //TODO добавить согласие на обработку данных

  const handleSubmit = useCallback((values, formikBag) => {
    setLoading(true);

    axios.post(`api/sendMessage`, values)
      .then((data) => {
        setLoading(false);
        setStep('success')

        resetTimerIdRef.current = setTimeout(() => {
          formikBag.resetForm();
        }, 1000);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => () => {
    clearTimeout(resetTimerIdRef.current);
  }, []);

  return (
    <div className="request-modal-content">
      <h2 className="request-modal-title">{t(`request-modal.${step ==='form' ? 'title' : 'success-title'}`)}</h2>

      <div className="steps-wrapper">
        <div className={classnames('steps-content', step)}>
          <div className="step _form">
            <Formik
              initialValues={initialValues}
              initialErrors={initialErrors}
              enableReinitialize
              validationSchema={validationSchema}
              validateOnBlur={false}
              onSubmit={handleSubmit}
            >
              {({ isValid }) => (
                <Form>
                  <div className="request-form-content">
                    <div className="request-form-fields-wrap">
                      <div className="request-form-left-content">
                        <InputField
                          className="request-form-input"
                          name="name"
                          label={t('request-modal.your-name')}
                        />
                        <PhoneInputField
                          className="request-form-input"
                          name="phone"
                          label={t('request-modal.phone-number')}
                        />
                        <InputField
                          className="request-form-input"
                          name="email"
                          label="E-mail"
                        />
                      </div>

                      <div className="request-form-right-content">
                        <InputField
                          className="request-form-textarea"
                          name="message"
                          label={t('request-modal.message')}
                          textarea
                        />
                      </div>
                    </div>

                    <button className="submit-request-button" type="submit" disabled={!isValid || loading}>
                      {loading && <Loader />}
                      {t('request-modal.title')}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="step _success">
            <SuccessIcon className="success-icon" />

            <span className="success-description">{t('request-modal.success-description')}</span>

            <button className="submit-request-button" type="button" onClick={onClose}>
              {t('close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RequestModal({ active, onClose }) {
  return (
    <Modal active={active} onClose={onClose} className="request-modal" >
      <DomHolder>
        {active && (
          <RequestModalContent onClose={onClose} />
        )}
      </DomHolder>
    </Modal>
  );
}

RequestModal.propTypes = {
  active: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RequestModal;
