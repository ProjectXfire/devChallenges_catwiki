import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
// Components
import { Layout } from "@components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
