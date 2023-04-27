import Icon from "@components/icon";
import { colors } from "@constants/colors";
import { fonts, Themes } from "@constants/types";
import { useSelector } from "react-redux";
import _ from "./button.module.css";

type ButtonProps = {
  type: "default" | "alternate" | "plain" | "icon-button" | "submit";
  clickHandler?: any;
  name?: string;
  customStyle?: object;
  children?: any;
  disabled?: boolean;
};

const styles = {
  default: {
    color: colors.alternate,
    fontFamily: fonts.bold as fonts,
  },
  alternate: {
    color: colors.accent,
    fontFamily: fonts.bold as fonts,
  },
  plain: {
    textDecoration: "none",
    fontFamily: fonts.regular as fonts,
  },
};
const Button = (props: ButtonProps) => {
  const { type, clickHandler, name, customStyle, children, disabled } = props;
  const darkMode =
    useSelector((state: any) => state.theme.mode) === Themes.dark;

  switch (type) {
    case "alternate":
      return (
        <button
          disabled={disabled}
          className={_.button}
          onClick={clickHandler}
          style={{ ...styles.alternate, ...customStyle }}
        >
          {name}
        </button>
      );
    case "plain":
      return (
        <button
          disabled={disabled}
          className={_.button}
          onClick={clickHandler}
          style={{
            ...styles.plain,
            ...customStyle,
            color: darkMode ? "white" : "black",
          }}
        >
          {name}
        </button>
      );
    case "icon-button":
      return (
        <button
          disabled={disabled}
          className={_.button}
          onClick={clickHandler}
          style={{
            textDecoration: "none",
            ...customStyle,
          }}
        >
          {children}
        </button>
      );
    case "submit":
      return (
        <button
          disabled={disabled}
          className={_.button}
          type="submit"
          onClick={clickHandler}
          style={{ ...styles.alternate, ...customStyle }}
        >
          {name}
        </button>
      );
    default:
      return (
        <button
          disabled={disabled}
          className={_.button}
          onClick={clickHandler}
          style={{ ...styles.default, ...customStyle }}
        >
          {name}
        </button>
      );
  }
};
export default Button;
