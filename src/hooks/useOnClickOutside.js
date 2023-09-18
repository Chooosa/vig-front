import { useEffect, useRef } from 'react';

const defaultEventTypes = ['mousedown', 'touchstart'];

/**
 * @typedef {Object} ClickOutsideOptions
 * @property {string[]} [eventTypes]
 * @property {string} [ignoreClass]
 */

/**
 * @param {Function} callback
 * @param {boolean} [active]
 * @param {ClickOutsideOptions} [options]
 */
function useOnClickOutside(callback, active, options = {}) {
  const ref = useRef();
  const {
    eventTypes = defaultEventTypes,
    ignoreClass,
  } = options;

  useEffect(
    () => {
      let listeners = null;

      if (ref.current && callback && (typeof active === 'undefined' || active)) {
        listeners = eventTypes.reduce(
          (map, type) => {
            const listener = (e) => {
              if (!ref.current.contains(e.target) && (!ignoreClass || !e.target.closest(`.${ignoreClass}`))) {
                callback(e);
              }
            };

            document.addEventListener(type, listener);

            map[type] = listener;

            return map;
          },
          {},
        );
      }

      return () => {
        if (listeners) {
          Object.keys(listeners).forEach((type) => {
            document.removeEventListener(type, listeners[type]);
          });
        }
      };
    },
    [ref.current, active, ignoreClass, eventTypes],
  );

  return ref;
}

export default useOnClickOutside;
