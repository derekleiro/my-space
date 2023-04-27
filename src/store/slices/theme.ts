import { Themes } from "@constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const ThemeSlice: any = createSlice({
  name: "theme",
  initialState: { mode: Themes.dark },
  reducers: {
    changeTheme: (state: { mode: Themes }, action: PayloadAction<Themes>) => {
      state.mode = action.payload;
    },
  },
});

export const { changeTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
