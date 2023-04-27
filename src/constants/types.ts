export type Colors = {
  primary: string;
  secondary: string;
  accent: string;
  alternate: string;
  divider: string;
  projectColors: Array<string>;
  setDarkMode: Function;
  setLightMode: Function;
};

export enum fonts {
  regular = "Regular",
  bold = "Bold",
  light = "Light",
}

export type Icons =
  | "hand-write"
  | "flower"
  | "bolden"
  | "italise"
  | "link"
  | "quote"
  | "code-snip"
  | "add-image"
  | "bullet-list"
  | "number-list"
  | "highlight"
  | "undo"
  | "redo"
  | "sun"
  | "moon"
  | "ig"
  | "github"
  | "twitter"
  | "medium"
  | "linkedin"
  | "chevron-right"
  | "chevron-left"
  | "home"
  | "stack"
  | "writing"
  | "contact"
  | "external-link";

export enum Routes {
  _ = "",
  home = "Home",
  learnings = "My Learnings",
  contact = "Contact",
  portifolio = "Portifolio",
  article = "Article",
  editor = "New Learning",
  dashboard = "Dashboard",
  contactInfo = "Contact Info",
  managePotifolio = "Manage Potifolio",
}

export enum Themes {
  dark = "Dark",
  light = "Light",
}

export type pageProps = {
  props: {
    width: number;
    route: Routes;
  };
};
