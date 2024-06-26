"use client";

import { configureStore } from "@reduxjs/toolkit";
import { storage } from "@/lib/redux/storage";
import { persistReducer, persistStore } from "redux-persist";

import { middleware } from "@/lib/redux/middleware";
import shoppingListReducer from "@/store/shoppingList.reducer";

const persistConfig = (key: string) => ({
  key,
  storage,
});

export const store = configureStore({
  reducer: {
    shoppingList: persistReducer(
      persistConfig("shoppingList"),
      shoppingListReducer
    ),
  },

  //@ts-ignore
  middleware,
});

export const persistor = persistStore(store);

export type ReduxStore = typeof store;
export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;