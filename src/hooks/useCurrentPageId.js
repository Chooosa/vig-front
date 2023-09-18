import { useContext } from 'react';
import { PageContext } from '../utils/contexts/pageContext';

/**
 * @returns {string}
 */
function useCurrentPageId() {
  const { pageId } = useContext(PageContext);

  return pageId;
}

export default useCurrentPageId;
