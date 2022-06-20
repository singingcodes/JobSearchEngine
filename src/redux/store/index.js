import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favoriteReducer from "../reducers/favorite"
import jobReducer from "../reducers/job"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { encryptTransform } from "redux-persist-transform-encrypt"

const persistConfig = {
  key: "root",
  storage: storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SUPER_SECRET_KEY,
      onError: (error) => {
        console.log(error)
      },
    }),
  ],
}

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  job: jobReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
