import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useStateWithRef } from '../../hooks';
import isTouchDevice from '../../utils/isTouchDevice';
import isMobileTablet from '../../utils/isMobileTablet';
import { throttle } from '../../utils/throttle';
import { HeaderContext } from '../../utils/contexts/headerContext';
import Header from './header';
import Footer from './Footer';
import FanIcon from '../../assets/svg/fan.svg'
// import UpButton from './UpButton';

const TABLET_MAX_WIDTH = 1023;

function setTrueVhCssVariable() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.document.documentElement.clientHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

const throttledSetTrueVhCssVariable = throttle(setTrueVhCssVariable, 50);

function Root({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [mobileNavOpened, setMobileNavOpened, mobileNavOpenedRef] = useStateWithRef(false);
  const headerRef = useRef(null);
  const [sections, setSections] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const headerContextValue = useMemo(() => ({
    headerRef,
    sections,
    activeSection,
    mobileNavOpened,
    setSections,
    setActiveSection,
  }), [sections, activeSection, mobileNavOpened]);

  const pageId = useMemo(() => pathname.split('/')[1], [pathname]);

  const toggleMobileNavOpen = useCallback(() => {
    setMobileNavOpened((prevMobileNavOpened) => !prevMobileNavOpened);
  }, []);

  useLayoutEffect(() => {
    setIsMounted(true);
    setTrueVhCssVariable();
    window.document.body.classList.add(isTouchDevice() ? 'touch' : 'no-touch');
  }, []);


  useEffect(() => {
    const onResize = () => {
      // disable lags onScroll when mobile/tablet browsers trigger resize event because of nav appearing/disappearing
      if (!isMobileTablet()) {
        throttledSetTrueVhCssVariable();
      }
      if (mobileNavOpenedRef.current && window.innerWidth > TABLET_MAX_WIDTH) {
        setMobileNavOpened(false);
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <div className="animated-background">
        <ul className="squares">
          {Array(10).fill(0).map((li, i) => (
            <li key={i}><FanIcon /></li>
          ))}
        </ul>
      </div>

      {isMounted && (
        <Header
          ref={headerRef}
          pageId={pageId}
          // activeSection={activeSection}
          // sections={sections}
          // mobileNavOpened={mobileNavOpened}
          // setMobileNavOpened={setMobileNavOpened}
        />
      )}

      <main className="main" role="main">
        <HeaderContext.Provider value={headerContextValue}>
          <Component {...pageProps} />
        </HeaderContext.Provider>
      </main>

      <Footer pageId={pageId} />

      {/*<UpButton />*/}
    </>
  );
}

Root.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default Root;
