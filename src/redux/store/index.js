import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favoriteReducer from "../reducers/favorite"
import jobReducer from "../reducers/job"

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  job: jobReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
