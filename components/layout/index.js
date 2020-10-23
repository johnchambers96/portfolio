import { Fragment } from "react";
import Head from "next/head";
import NavBar from "./nav";
import Footer from "./footer";

const Layout = ({ children, toggleTheme, theme }) => {
  return (
    <Fragment>
      <Head>
        <title>{"John Chambers"}</title>
        <meta name={"description"} content={""} />
        <meta name={"keywords"} content={""} />
        <meta charSet={"UTF-8"} />
        <meta
          name={"viewport"}
          content={"initial-scale=1.0, width=device-width"}
        />
      </Head>
      <NavBar toggleTheme={toggleTheme} theme={theme} />
      {children}
      <Footer theme={theme} />
    </Fragment>
  );
};

export default Layout;
