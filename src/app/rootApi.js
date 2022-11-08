import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.privatbank.ua/p24api',
})

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
})