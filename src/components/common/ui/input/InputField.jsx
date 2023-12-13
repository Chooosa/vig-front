import React, { forwardRef, useCallback, useMemo } from 'react';
import { useField, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import Input from './Input';

const InputField = forwardRef((props, ref) => {
  const [field, meta] = useField(props.name);
  const { submitCount } = useFormikContext();

  const handleBlur = useCallback((...args) => {
    field.onBlur(...args);
    props.onBlur?.(...args);
  }, []);

  return useMemo(() => (
    <Input
      {...field}
      {...props}
      onBlur={handleBlur}
      value={field.value || ''}
      state={meta.error && meta.touched && submitCount > 0 ? 'invalid' : undefined}
      ref={ref}
    />
  ), [field.value, props.label, props.disabled, props.type, meta.error, meta.touched, submitCount]);
});

InputField.propTypes = {
  name: PropTypes.string.isRequired,
};

InputField.displayName = 'InputField';

export default InputField;
