import classnames from 'classnames';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { TypeAnimation } from 'react-type-animation';

function TypingText({ data, className, ...props }) {
  const sequence = useMemo(() => data.reduce((acc, { text, delay }) => {
    acc.push(text, delay, '', delay / 2);
    return acc;
  }, []), [data]);

  return (
    <div className="ui-typing-text-wrap">
      <TypeAnimation
        className={classnames('ui-typing-text', className)}
        sequence={sequence}
        repeat={Infinity}
        speed={30}
        {...props}
      />
    </div>
  );
}

TypingText.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired,
  })).isRequired,
  className: PropTypes.string,
};

export default TypingText;
