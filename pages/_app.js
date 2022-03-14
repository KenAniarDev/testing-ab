import '../styles/globals.css';
import Script from 'next/script';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const tagManagerArgs = {
    gtmId: 'GTM-NTJ2DR8',
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
