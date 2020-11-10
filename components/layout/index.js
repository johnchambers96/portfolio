import { Fragment } from "react";
import Head from "next/head";
import NavBar from "./nav";
import Footer from "./footer";

const Layout = ({ children, toggleTheme, theme }) => {
  return (
    <Fragment>
      <Head>
        <title>{"Share My 11 - Create and Share Your Chosen Lineup"}</title>
        <meta name={"description"} content={"Football lineup builder. Create and share football squards. Easily create your very own football team. Soccer tactics and formations tool."} />
        <meta name={"keywords"} content={"lineup builder, football formation maker, football formation creator, squad builder, football tactics, formation soccer, formation football, lineup generator"} />
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
