import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from "./rootReducer";
import { persistStore } from "redux-persist";


const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store