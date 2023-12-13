import classnames from 'classnames';
import React, { forwardRef, useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useCombinedRefs } from '@/hooks';

const Input = forwardRef((
  { className, value, name, label, textarea, disabled, state, type, placeholder, ...otherProps },
  ref) => {
  const [focused, setFocused] = useState(false);
  const innerRef = useRef(null)
  const combinedRef = useCombinedRefs(ref, innerRef)
  const cls = classnames('ui-input-wrapper', className, `state-${state}`, {
    disabled,
    focused,
    textarea,
    'label-shown': focused || value || placeholder,
  });

  const handleFocus = useCallback((e) => {
    setFocused(true);
    otherProps.onFocus?.(e);
  }, []);
  const handleBlur = useCallback((e) => {
    setFocused(false);
    otherProps.onBlur?.(e);
  }, []);
  const handleInputWrapMouseDown = useCallback((e) => {
    innerRef.current.focus();
    e.preventDefault();
  }, []);
  const handleInputMouseDown = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const InputComponent = textarea ? 'textarea' : 'input';

  return (
    <div className={cls} onMouseDown={handleInputWrapMouseDown} onClick={handleInputWrapMouseDown}>
      <InputComponent
        className="ui-input"
        ref={combinedRef}
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        {...otherProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseDown={handleInputMouseDown}
      />
      <label htmlFor={name} className="ui-input-label">
        {label}
      </label>
    </div>
  );
})

Input.displayName = 'Input';

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  textarea: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  state: PropTypes.oneOf(['default', 'valid', 'invalid']),
  type: PropTypes.string,
  tabIndex: PropTypes.string,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  className: '',
  disabled: false,
  type: 'text',
  state: 'default',
  placeholder: '',
  tabIndex: '',
  onBlur: () => {},
};

export default Input;
