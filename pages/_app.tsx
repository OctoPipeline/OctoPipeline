import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";

export default function App({ Component, pageProps }: any) {
  const Layout = Component.layout || (({ children }: any) => <>{children}</>);
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}