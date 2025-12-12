import { rootReducer } from "./rootReducer";
import { configureStore, Tuple } from "@reduxjs/toolkit";
// @ts-ignore
import storage from "redux-persist/lib/storage";
// @ts-ignore
import persistReducer from "redux-persist/es/persistReducer";
// @ts-ignore
import persistStore from "redux-persist/es/persistStore";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer"],
};

const persistedReducer: typeof rootReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => new Tuple(thunk),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
