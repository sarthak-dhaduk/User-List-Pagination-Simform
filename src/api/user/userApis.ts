import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PeopleDataType } from "../../types/PeopleTypes";

const environment = import.meta.env;

export const USER_API_REDUCER_KEY = "userApi";

export const userApi = createApi({
  reducerPath: USER_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: environment.VITE_APP_USERS_URL,
  }),
  tagTypes: ["users"],
  keepUnusedDataFor: 60 * 5,
  refetchOnReconnect: true,
  endpoints: builder => ({
    getUsers: builder.query<PeopleDataType, number>({
      query: page => `/p?limit=${environment.VITE_APP_LIMIT}&page=${page - 1}`,
    }),
  }),
});
