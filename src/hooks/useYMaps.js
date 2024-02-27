import { useRef } from 'react';

const YANDEX_MAP_API_KEY = 'b6d7a8dd-f46c-4975-8765-f1e115384eeb';
const SCRIPT_SRC = `https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_MAP_API_KEY}&lang=ru_RU`;

const noop = new Promise(() => {});

/**
 * @returns {Promise}
 */
function useYMaps() {
  const ref = useRef();

  if (process.browser) {
    if (!ref.current) {
      ref.current = new Promise((resolve, reject) => {
        if (typeof window.ymaps !== 'undefined') resolve();

        const script = document.createElement('script');
        const head = document.getElementsByTagName('head')[0];

        script.onload = () => {
          window.ymaps.ready(resolve);
        };
        script.onerror = () => reject();
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_MAP_API_KEY}&lang=ru_RU`;
        script.type = 'text/javascript';
        script.async = true;

        const YMapsscript = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
        if (!YMapsscript) {
          head.appendChild(script);
        }
      });
    }
  } else {
    ref.current = noop; // never resolve
  }

  return ref.current;
}

export default useYMaps;
