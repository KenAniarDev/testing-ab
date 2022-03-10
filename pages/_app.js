import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src='https://www.googleoptimize.com/optimize.js?id=OPT-W4T2RGK'
      />
      <Script
        strategy='lazyOnload'
        src='https://www.googletagmanager.com/gtag/js?id=G-RZHCE2NGS5'
      />
      <Script id='s' strategy='lazyOnload'>
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-RZHCE2NGS5');`}
      </Script>
      <Script id='s' strategy='lazyOnload'>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K2LK3W9')`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
