import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
// import FileInput from './FileInput';

function FileInputField(props) {
  const [field, meta, helpers] = useField(props.name);

  const handleChange = useCallback((e) => helpers.setValue(e.target.files), [helpers]);

  return (
    <input
      {...props}
      type="file"
      // state={meta.error && meta.touched ? 'invalid' : undefined}
      // files={field.value}
      onChange={handleChange}
    />
  );
}

FileInputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node,
  multiple: PropTypes.bool,
  accept: PropTypes.string,
};

export default FileInputField;
