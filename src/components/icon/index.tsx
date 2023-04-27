import { Icons, Themes } from "@constants/types";
import { useSelector } from "react-redux";
import _ from "./icon.module.css";

type IconProps = {
  size: number;
  name: Icons;
  alt: string;
  leftSpacing?: number;
  rightSpacing?: number;
  clickHandler?: any;
  invert?: boolean;
  customStyle?: object | {};
};
const Icon = (props: IconProps) => {
  const { size, name, alt, leftSpacing, rightSpacing, clickHandler, customStyle, invert } = props;
  const darkMode =
    useSelector((state: any) => state.theme.mode) === Themes.dark;
  return (
    <img
      style={{
        width: size,
        height: size,
        marginLeft: leftSpacing || "0px",
        marginRight: rightSpacing || "10px",
        filter: darkMode && invert !== false ? "invert(1)" : "invert(0)",
        ...customStyle
      }}
      onClick={clickHandler}
      src={require(`@assets/icons/${name}.png`)}
      title={alt}
      alt={alt}
    />
  );
};

export default Icon;
