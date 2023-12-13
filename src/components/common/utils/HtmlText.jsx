import React, { memo } from 'react';
import PropTypes from 'prop-types';

function HtmlText({ tag, children, ...props }) {
  return React.createElement(tag, {
    ...props,
    dangerouslySetInnerHTML: { __html: children },
  });
}

HtmlText.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.string.isRequired,
};

HtmlText.defaultProps = {
  tag: 'div',
};

export default memo(HtmlText);
