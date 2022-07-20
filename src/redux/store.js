import thunk from "redux-thunk";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Reducer from "./reducer";


import { configureStore } from "@reduxjs/toolkit";



const persistConfig = {
  key: 'persist-key',
  storage,
}

const persistedReducer = persistReducer(persistConfig, Reducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})



export const persistor = persistStore(store)
