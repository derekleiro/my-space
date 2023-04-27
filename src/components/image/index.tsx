import { colors } from "@constants/colors";
import _ from "./image.module.css";

type ImageProps = {
  src: any;
  alt: string;
  customStyle?: object;
};
const Image = (props: ImageProps) => {
  const { src, alt, customStyle } = props;

  return (
    <img
      style={{ ...customStyle }}
      className={_.img}
      src={src}
      title={alt}
      alt={alt}
    />
  );
};

export default Image;
