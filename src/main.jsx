import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SpotifyContextProvider from "./context/SpotifyContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SpotifyContextProvider>
        <App />
      </SpotifyContextProvider>
    </BrowserRouter>
  </StrictMode>
);
