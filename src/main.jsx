import React, { StrictMode, } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

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
