import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

// @ts-ignore
import storage from "redux-persist/lib/storage";
// @ts-ignore
import persistReducer from "redux-persist/es/persistReducer";
// @ts-ignore
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer"],
};

const persistedReducer: typeof rootReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
