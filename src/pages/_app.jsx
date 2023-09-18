import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import '../styles/app.scss';
// import Head from '../components/common/Head';
import Root from '../components/common/Root';
// import { useHMR } from '../hooks';
import config from '../../next-i18next.config';

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();

  // useHMR();

  useEffect(() => {
    /* eslint-disable no-console */
    console.log(`
 /$$    /$$ /$$$$$$  /$$$$$$ 
| $$   | $$|_  $$_/ /$$__  $$
| $$   | $$  | $$  | $$  \\__/
|  $$ / $$/  | $$  | $$ /$$$$
 \\  $$ $$/   | $$  | $$|_  $$
  \\  $$$/    | $$  | $$  \\ $$
   \\  $/    /$$$$$$|  $$$$$$/
    \\_/    |______/ \\______/ 
    `);

    console.log('Version:', process.env.VERSION);
    /* eslint-enable no-console */
  }, []);

  return (
    <>
      {/*<Head />*/}
      <Root Component={Component} pageProps={pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp, config);
