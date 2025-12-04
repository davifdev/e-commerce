import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CategoriesContextProvider } from "./contexts/use-categories.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CategoriesContextProvider>
      <App />
    </CategoriesContextProvider>
  </StrictMode>
);
