import { useTranslation } from 'next-i18next';
import useYMaps from '../hooks/useYMaps';
import { useEffect } from 'react';

/**
 * @param {MutableRefObject} mapRef
 */
function useProjectsMap(mapRef) {
  const promise = useYMaps();
  const { t } = useTranslation('home');
  const projectsCoords = t('projects-coords', { returnObjects: true })

  useEffect(() => {
    let map = null;

    promise.then(() => {
      const state = {
        controls: ['zoomControl'],
        center: [48.870524, 68.065019],
        zoom: 2,
      };
      const options = {
        yandexMapDisablePoiInteractivity: true,
        suppressMapOpenBlock: true,
      };
      map = new window.ymaps.Map(mapRef.current, state, options);

      projectsCoords.map(({ title, coords }) => {
        const point = new window.ymaps.Placemark(coords, {
          balloonContentBody: title,
          hintContent: title,
        }, {});

        map.geoObjects.add(point);
      })
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

export default useProjectsMap;
