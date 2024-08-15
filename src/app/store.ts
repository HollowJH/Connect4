import { configureStore } from "@reduxjs/toolkit";
import connectReducer from "../features/connect4/ConnectSlice";

export const store = configureStore({
    reducer: {
        connect: connectReducer,
    },
})

export type RootStat = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch