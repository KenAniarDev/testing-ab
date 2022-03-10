import '../styles/globals.css';
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id='ssdas'
        strategy='lazyOnload'
      >{`(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'CONTAINER_ID':true});`}</Script>
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
      <Script id='ss' strategy='lazyOnload'>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K2LK3W9')`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
