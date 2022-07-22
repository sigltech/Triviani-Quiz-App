import thunk from "redux-thunk";
import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import Reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";



// 'persist-key'
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

  whitelist:['username', 'intScore', 'player', 'online_player','online_username', 'online_room', 'local_players'],

  blacklist: ['question_category',
    'question_difficulty',
    'question_type',
    'questionsAmount',
    'players']
}

const persistedReducer = persistReducer(persistConfig, Reducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})



export const persistor = persistStore(store)
