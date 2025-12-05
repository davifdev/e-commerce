import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CategoriesContextProvider } from "./contexts/categories.tsx";
import { UserContextProvider } from "./contexts/user.tsx";
import { CartContextProvider } from "./contexts/cart.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CategoriesContextProvider>
      <UserContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </UserContextProvider>
    </CategoriesContextProvider>
  </StrictMode>
);
