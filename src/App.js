import React from "react";

import { ThemeProvider } from "styled-components";
import { themes } from "react95";
import GlobalStyle from "./styles/global";

import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./services/history";

const App = () => {
  return (
    <>
      <ThemeProvider theme={themes.default}>
        <Router history={history}>
          <Routes></Routes>
          <GlobalStyle></GlobalStyle>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
