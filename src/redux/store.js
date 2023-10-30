import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from './authSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const reducers = combineReducers({
    auth: authReducer
})

const persisteReducer = persistReducer(persistConfig, reducers)
const store = configureStore({
    reducer: persisteReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
export default store;

