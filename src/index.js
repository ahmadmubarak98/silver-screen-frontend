import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

// redux
import { Provider } from "react-redux";
import { configureStore } from "~Store";

// main entry point
import App from "./app";

// stylesheets
import "~Styles/global.css";
import "~Styles/colors.css";
import "~Styles/spacing.css";
import "~Styles/utils.css";

const generateClassName = createGenerateClassName({
  productionPrefix: "ss",
});

const store = configureStore();

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <StylesProvider injectFirst generateClassName={generateClassName}>
        <App />
      </StylesProvider>
    </Provider>
  </HashRouter>,
  document.getElementById("app")
);
