//import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
