import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//components
import App from "./App";

//style
import "./index.css";

//theming
import { ThemeProvider } from '@mui/styles';
import theme from "./theme/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <ThemeProvider theme={theme}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
 </ThemeProvider> 
);
