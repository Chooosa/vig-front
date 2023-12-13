import useYMaps from '../hooks/useYMaps';
import { useEffect } from 'react';
import mapPointLayoutFactory from '../utils/mapPointLayoutFactory';

/**
 * @param {MutableRefObject} mapRef
 */
function useContactsMap(mapRef) {
  const promise = useYMaps();

  useEffect(() => {
    let map = null;

    promise.then(() => {
      const state = {
        controls: ['zoomControl'],
        center: [55.790970, 37.492329],
        zoom: 15,
      };
      const options = {
        yandexMapDisablePoiInteractivity: true,
        suppressMapOpenBlock: true,
      };
      map = new window.ymaps.Map(mapRef.current, state, options);
      const point = new window.ymaps.Placemark([55.787989, 37.490973], {}, {
        // iconLayout: mapPointLayoutFactory(window.ymaps),
        hideIconOnBalloonOpen: false,
        openBalloonOnClick: false,
      });

      map.geoObjects.add(point);
    });

    window.addEventListener('resize', handleWindowResize);

    return () => {
      map?.destroy(); // eslint-disable-line no-unused-expressions
      window.removeEventListener('resize', handleWindowResize);
    };

    function handleWindowResize() {
      map?.container.fitToViewport(); // eslint-disable-line no-unused-expressions
    }
  }, []);
}

export default useContactsMap;
