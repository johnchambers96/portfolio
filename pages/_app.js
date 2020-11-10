import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/global";
import { useDarkMode } from "../hooks/useDarkMode";
import { themeTypes } from "../constants";
import Layout from "../components/layout";

import rootReducer from "../reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  if (!componentMounted) {
    return <div />;
  }
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <ThemeProvider
        theme={theme === themeTypes.LIGHT ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        <Layout {...pageProps} toggleTheme={toggleTheme} theme={theme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
