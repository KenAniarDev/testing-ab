import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src='https://www.googleoptimize.com/optimize.js?id=OPT-W4T2RGK'
      />
      <Script id='s' strategy='lazyOnload'>
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-RZHCE2NGS5');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
