import React from "react";
import { Provider } from "next-auth/client";
import { RecoilRoot } from "recoil";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import "reflect-metadata";

export default function App({ Component, pageProps }: any) {
  const Layout = Component.layout || (({ children }: any) => <>{children}</>);
  return (
    <Provider session={pageProps.session}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </Provider>
  );
}
