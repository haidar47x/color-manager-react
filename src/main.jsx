import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import ColorProvider from "./components/ColorProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </StrictMode>
);
