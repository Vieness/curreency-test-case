import {rootApi} from "../app/rootApi";

export const currencyApi = rootApi.injectEndpoints({
  endpoints: build => ({
    getCurrency: build.query({
      query: () => {
        return {
          url: `pubinfo?json&exchange&coursid=5`,
        }
      }
    })
  }),
  overrideExisting: true
})

export const {useGetCurrencyQuery} = currencyApi;