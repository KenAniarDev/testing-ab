import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src='https://www.googletagmanager.com/gtag/js?id=G-FMMGP3DJE7'
      />

      <Script id='s' strategy='lazyOnload'>
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-FMMGP3DJE7');`}
      </Script>
      <Script
        strategy='lazyOnload'
        src='https://www.googleoptimize.com/optimize.js?id=OPT-PDXN32M'
      ></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
