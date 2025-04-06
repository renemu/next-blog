import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/global.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  );
}
export default App;
