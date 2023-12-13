import { useField } from 'formik';
import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';
import PhoneInput from './PhoneInput';

function PhoneInputField(props) {
  const [field, meta, helpers] = useField(props.name);
  const handleChange = useCallback((value) => helpers.setValue(value), []);

  return (
    <PhoneInput
      {...field}
      {...props}
      state={meta.error && meta.touched ? 'invalid' : undefined}
      onChange={handleChange}
    />
  );
}

PhoneInputField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default memo(PhoneInputField);
