import signInApiSlice from '@/app/(Auth)/LogIn/api/signInApi'
import adminApiSlice from '@/app/admin/api/adminApi'
import authSlice from '@/app/api/slices/authSlice'
import cartSlice from '@/app/api/slices/cartSlice'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [cartSlice.reducerPath]: cartSlice.reducer,
      [authSlice.reducerPath]: authSlice.reducer,
      [adminApiSlice.reducerPath]: adminApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
          .concat(adminApiSlice.middleware)
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']