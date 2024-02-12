import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import paymentSlice from "./paymentSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: [],
};

const rootReducer = combineReducers({
    productState: productSlice,
    paymentState: paymentSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
