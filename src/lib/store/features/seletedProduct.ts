import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "@/src/lib/store/hooks";

const initialState = 151

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    // addFavorite: (state, action: PayloadAction<FavoriteProductType>) =>  {
    // }
  },
});

export const useFavoriteProduct = () =>
  useAppSelector((state) => state.favorite);

// export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;