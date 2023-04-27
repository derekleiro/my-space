import Button from "@components/button";
import Image from "@components/image";
import { fonts, Themes } from "@constants/types";
import { useSelector } from "react-redux";
import _ from "./card.module.css";

type CardProps = {
  title: string;
  preview: string;
  date?: string;
  image?: any;
  year?: number;
  handleButtonClick: any;
  limitWidth?: boolean;
  mobile?: boolean;
};

const styles = {
  h1: {
    fontFamily: fonts.regular as fonts,
  },
};
const Card = (props: CardProps) => {
  const { title, preview, image, handleButtonClick, limitWidth, mobile, date } =
    props;
  const darkMode =
    useSelector((state: any) => state.theme.mode) === Themes.dark;
  return (
    <div
      className={_.card}
      style={{
        width: limitWidth ? "30%" : "auto",
        margin: mobile ? "0" : "15px 15px 15px 0",
      }}
    >
      {image && <Image src={image} alt={title} />}
      <div>
        {date && (
          <h4
            style={{ opacity: darkMode ? "0.8" : "1", fontFamily: fonts.light }}
          >
            {date}
          </h4>
        )}

        <h1 className={_.h1} style={styles.h1}>
          {title}
        </h1>

        <p className={_.p} style={{ opacity: darkMode ? "0.8" : "1" }}>
          {preview}
        </p>
      </div>

      <Button
        name="read more"
        type="alternate"
        clickHandler={handleButtonClick}
      />
    </div>
  );
};

export default Card;
