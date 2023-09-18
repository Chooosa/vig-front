import { SectionsContext } from '../utils/contexts/sectionsContext';
import { useContext, useEffect } from 'react';

/**
 * @returns {React.RefObject}
 */
function useSection(ref) {
  const sectionsContext = useContext(SectionsContext);

  useEffect(() => {
    sectionsContext.pushSectionRef(ref.current);

    return () => {
      sectionsContext.removeSectionRef(ref.current);
    };
  }, []);
}

export default useSection;
