import uiReducer from './slices/UIsection'
import userReducer from './slices/userSlice'
import jwtReducer from './slices/jwtSlice'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducerObj = {
    user: userReducer,
    jwt: jwtReducer,
    ui:uiReducer
}

const persistConfig = {
    key: 'ROOT',
    storage
}

const persistedReducer = persistCombineReducers(persistConfig, rootReducerObj)

export default persistedReducer