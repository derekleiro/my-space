import { Routes } from "@constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const NavigationSlice: any = createSlice({
  name: "navigation",
  initialState: { route: Routes._ },
  reducers: {
    changeRoute: (
      state: { route: Routes },
      action: PayloadAction<Routes>
    ) => {
      state.route = action.payload;
    },
    resetRoute: (state: { route: Routes }, action: PayloadAction<void>) => {
      state.route = Routes.home;
    },
  },
});

export const { changeRoute, resetRoute } = NavigationSlice.actions;
export default NavigationSlice.reducer;
