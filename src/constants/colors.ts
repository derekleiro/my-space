import { Colors } from "./types";

export const colors: Colors = {
  // Default colors
  primary: "#f0f0f0",
  secondary: "#bac4ff",
  accent: "#ac3976",
  alternate: "#9491FF",
  divider: "#2a2648",

  // If you have more than 6 projects in your portfolio, add more colors here
  projectColors: [
    "#ac3976",
    "rgb(157, 116, 143)",
    "rgb(131, 119, 209)",
    "rgb(105, 90, 149)",
    "rgb(77, 65, 125)",
    "rgb(66, 56, 81)",
  ],

  // Theme specific colors (optional)
  setDarkMode: () => {
    /* 
    Here you can set edit colors when dark mode is enabled to fit your dark theme
    e.g.
    colors.dark = "red";
    color.accent = "blue";

    When you call this function, it updates the colors to the ones of your choosing
    for your custom dark theme
    */
    colors.primary = "#11101d";
    colors.divider = "#2a2648";
  },
  setLightMode: () => {
    // Same as with setDarkMode(). Read the comment above for more information
    colors.primary = "#f0f0f0";
    colors.divider = "#ddd";
  },
};
