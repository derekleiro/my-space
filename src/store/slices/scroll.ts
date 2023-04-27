import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getViewportWidth } from "@util/functions";

export const ScrollSlice: any = createSlice({
  name: "scroll",
  initialState: {
    scrollY: window.innerHeight,
    width: getViewportWidth(),
    isMobile: getViewportWidth() < 921,
  },
  reducers: {
    updateY: (state: { scrollY: number }, action: PayloadAction<number>) => {
      state.scrollY = action.payload;
    },
    updateX: (state: { width: number }, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    updatePlatform: (
      state: { isMobile: boolean },
      action: PayloadAction<boolean>
    ) => {
      state.isMobile = action.payload;
    },
  },
});

export const { updateY, updateX, updatePlatform } = ScrollSlice.actions;
export default ScrollSlice.reducer;
