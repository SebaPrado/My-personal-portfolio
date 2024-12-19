import React, { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function Root() {
 

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<Root />);
} else {
  console.error("No se encontró el elemento raíz");
}