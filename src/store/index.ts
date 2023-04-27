import { configureStore } from "@reduxjs/toolkit";
import NavigationSlice from "./slices/navigation";
import ScrollSlice from "./slices/scroll";
import ThemeSlice from "./slices/theme";

export default configureStore({
  reducer: {
    navigation: NavigationSlice,
    theme: ThemeSlice,
    scroll: ScrollSlice,
  },
});
