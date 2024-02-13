import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import paymentSlice from "./paymentSlice";
import transactionSlice from "./transactionSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["paymentState", "transactionState"],
};

const rootReducer = combineReducers({
    productState: productSlice,
    paymentState: paymentSlice,
    transactionState: transactionSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.node_env !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
