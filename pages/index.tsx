/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Header from "../components/Header/Header";
import Main from "../components/Main/index";
import MyFooter from "../components/MyFooter";

const App = () => {
  // const Slider = dynamic(() => import("../pages/Slider/Slider"), {
  //   ssr: false,
  // });

  return (
    <>
      <Head>
        <title>Portfolio - Denis SON</title>
      </Head>
      <Header />
      <Main />
      <MyFooter />
    </>
  );
};

export default App;
