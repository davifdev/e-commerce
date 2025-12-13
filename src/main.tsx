import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CategoriesContextProvider } from "./contexts/categories.tsx";
import { UserContextProvider } from "./contexts/user.tsx";
import { CartContextProvider } from "./contexts/cart.tsx";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store.ts";
// @ts-ignore
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CategoriesContextProvider>
      <UserContextProvider>
        <CartContextProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </CartContextProvider>
      </UserContextProvider>
    </CategoriesContextProvider>
  </StrictMode>
);
