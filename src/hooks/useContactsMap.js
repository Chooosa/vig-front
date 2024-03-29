import { useTranslation } from 'next-i18next';
import useYMaps from '../hooks/useYMaps';
import { useEffect } from 'react';
import mapPointLayoutFactory from '../utils/mapPointLayoutFactory';

/**
 * @param {MutableRefObject} mapRef
 */
function useContactsMap(mapRef) {
  const promise = useYMaps();
  const { t } = useTranslation('contacts');

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
      const point = new window.ymaps.Placemark([55.787989, 37.490973], {
        balloonContentHeader: t('map.balloon-header'),
        balloonContentBody: t('map.balloon-body'),
        hintContent: t('map.balloon-hint'),
      }, {});

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
