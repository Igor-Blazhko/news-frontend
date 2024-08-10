import { configureStore } from "@reduxjs/toolkit";
import count from "../redusers/count";

const store = configureStore({
    reducer: {
        counter: count
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(),
      devTools: process.env.NODE_ENV !== "production",
})

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
