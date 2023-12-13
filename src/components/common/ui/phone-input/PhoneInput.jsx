import { Input } from '@/components/common/ui/input';
import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import IMask from 'imask';

const toMasked = IMask.createPipe({
  mask: '+{7} (000) 000-00-00',
});
const toUnmasked = IMask.createPipe({
  mask: '+{7} (000) 000-00-00',
}, IMask.PIPE_TYPE.MASKED, IMask.PIPE_TYPE.UNMASKED);

const PhoneInput = ({ value, onChange, ...props }) => {
  const handleChange = useCallback((e) => {
    let { value } = e.target;

    if (value.startsWith('8')) {
      value = value.replace('8', '7');
    }

    onChange(
      toUnmasked(value),
    );
  }, [onChange]);

  return (
    <Input
      {...props}
      value={toMasked(value)}
      onChange={handleChange}
    />
  );
};

PhoneInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default memo(PhoneInput);
