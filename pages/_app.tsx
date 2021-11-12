import React from "react";
import { Provider } from "next-auth/client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
// import type { AppProps } from "next/app";
import "reflect-metadata";

export default function App({ Component, pageProps }: any) {
  const Layout = Component.layout || (({ children }: any) => <>{children}</>);
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
