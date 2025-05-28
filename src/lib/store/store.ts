import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "@/src/lib/store/features/seletedProduct";
import { getSpecialProduct } from "@/src/lib/services/getSpecialProduct";

export const store = () => {
  return configureStore({
    reducer: {
      favorite: favoriteReducer,
       [getSpecialProduct.reducerPath]: getSpecialProduct.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getSpecialProduct.middleware),
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];