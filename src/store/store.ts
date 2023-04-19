import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import personReducer from "./features/personSlice";
import { userApi } from "../api/user/userApis";

const environment = import.meta.env;

export const store = configureStore({
  reducer: {
    person: personReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: environment.VITE_APP_MODE === "development",
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
