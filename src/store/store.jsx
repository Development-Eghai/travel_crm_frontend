import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import loginSlice from "./slices/loginSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "employee-verification",
  storage,
};

const rootReducer = combineReducers({
  login: loginSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const persistor = persistStore(store);
// persistor.purge();
export { store, persistor };
