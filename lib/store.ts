import { sneakersApi } from '@/app/api/getSneakersList'
import storeSlice from '@/app/api/cartSlice'
import { configureStore } from '@reduxjs/toolkit'
import authSlice from '@/app/api/authSlice'
import { apiSlice } from '@/app/api/authApi'

export const makeStore = () => {
  return configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        isCartOpen: storeSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [sneakersApi.reducerPath]: sneakersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
          .concat(sneakersApi.middleware)
          .concat(apiSlice.middleware)
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']