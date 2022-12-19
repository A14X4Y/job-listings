import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { filterReducer } from "./features/filters/filter-slice";
import { positionReducer } from "./features/positions/positions-slice";

const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});

const persistConfig = {
  key: "root",
  storage,
  //указываем, что хотим хранить
  // whitelist: ["filter", "positions"],
  // указываем, что не хотим хранить
  blacklist: ["positions"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // чтобы не конфликтовали с middleware
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
