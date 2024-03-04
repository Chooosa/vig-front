import classnames from 'classnames';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated, useInView } from 'react-spring';

function AnimatedNumber({ end, from, delay, className }) {
  const [ref, inView] = useInView({ treshold: 1 });
  const { number } = useSpring({
    from: { number: from },
    number: end,
    delay,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  // useEffect(() => {
  //   if (!inView) {
  //     number.set(0);
  //   }
  // }, [inView]);

  return (
    <animated.div ref={ref} className={classnames('ui-animated-number', className)}>
      {inView ? number.to((n) => n.toFixed(0)) : null}
    </animated.div>
  );
}

AnimatedNumber.propTypes = {
  end: PropTypes.number.isRequired,
  from: PropTypes.number,
  delay: PropTypes.number,
  className: PropTypes.string,
};

AnimatedNumber.defaultProps = {
  from: 0,
  delay: 500,
};

export default AnimatedNumber;
