import getSneakersListApiSlice from '@/app/(Main)/api/getSneakersListApi'
import adminApiSlice from '@/app/admin/api/adminApi'
import { apiSlice } from '@/app/api/authApi'
import authSlice from '@/app/api/slices/authSlice'
import cartSlice from '@/app/api/slices/cartSlice'
import { configureStore, Tuple } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [cartSlice.reducerPath]: cartSlice.reducer,
      [authSlice.reducerPath]: authSlice.reducer,
      [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(apiSlice.middleware)
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']