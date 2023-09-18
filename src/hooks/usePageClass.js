import { useLayoutEffect } from 'react';

export const ssrBodyClassSet = new Set();

function usePageClass(className) {
  if (!process.browser) {
    ssrBodyClassSet.clear();
    className.split(' ').forEach((c) => {
      ssrBodyClassSet.add(c);
    });
    return;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(
    () => {
      document.body.classList.add(...className.split(' '));

      return () => document.body.classList.remove(className.split(' '));
    },
    [className],
  );
}

export default usePageClass;
