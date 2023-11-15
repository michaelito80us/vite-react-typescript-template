import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root");

if (!container) throw new Error("Couldn't find root element");

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
