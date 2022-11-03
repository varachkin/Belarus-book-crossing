import "../styles/globals.css";
import "antd/dist/antd.css";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Script
        strategy="lazyOnload"
        src={`src="https://www.googletagmanager.com/gtag/js?id=G-3EJFPJX3BK`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-3EJFPJX3BK');
        `}
      </Script>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
