import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Notification from "components/Notification";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import theme from "./config/theme/theme";
import App from "./core";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <Notification />
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
