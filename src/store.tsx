import { configureStore } from "@reduxjs/toolkit";
import memoListReducer from "./store/memoList";

export const store = configureStore({
    reducer: {
        memoList: memoListReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AddDispatch = typeof store.dispatch;
