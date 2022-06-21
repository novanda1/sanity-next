import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { apolloClient } from "../lib/apolloClient";
import "../styles/globals.css";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
