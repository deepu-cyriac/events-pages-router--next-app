import Layout from "../components/layout/layout";
import "../styles/globals.css";

//this file is the equivalent of root layout.js in app router
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
