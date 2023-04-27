import { fonts } from "@constants/types";
import { useEffect, useState } from "react";
import _ from "./portifolio-card.module.css";

type PortifolioCardProps = {
  title: string;
  preview: string;
  articleLink?: string;
  demoLink?: string;
  index: number;
  selectedIndex: number;
  listLength: number;
  backgroundColor: string;
  mobile?: boolean;
  handleClick: any;
};
const PortifolioCard = (props: PortifolioCardProps) => {
  const {
    title,
    preview,
    articleLink,
    demoLink,
    index,
    selectedIndex,
    backgroundColor,
    mobile,
    handleClick,
  } = props;

  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (selectedIndex === index) {
      setTimeout(() => {
        setFade(true);
      }, 500);
    } else {
      setFade(false);
    }
  }, [selectedIndex]);

  return (
    <section
      id="gallery"
      className={_.gallery}
      onClick={handleClick}
      style={{
        backgroundColor: backgroundColor,
        borderTopRightRadius: selectedIndex > index ? "0" : "35px",
        borderBottomRightRadius: selectedIndex > index ? "0" : "35px",
        borderTopLeftRadius: selectedIndex < index ? "0px" : "35px",
        borderBottomLeftRadius: selectedIndex < index ? "0" : "35px",
        marginRight:
          selectedIndex > index ? `-${index + (mobile ? 15 : 10)}%` : 0,
        marginLeft:
          selectedIndex < index ? `-${index + (mobile ? 15 : 10)}%` : 0,
        flex: selectedIndex === index ? 3 : 1,
        zIndex:
          selectedIndex === index
            ? 99
            : index < selectedIndex
            ? 30 + index
            : 30 - index,
      }}
    >
      <section
        className={_.galleryItem}
        style={{
          color: "white",
        }}
      >
        <div>
          <div style={{ textAlign: "center", padding: "0 25px" }}>
            <h1
              style={{
                fontSize: "2em",
                lineHeight: "1em",
                fontFamily: fonts.bold,
                wordBreak: "break-word",
                opacity: selectedIndex === index && fade ? 1 : 0,
                transition: "opacity 250ms ease-in-out",
              }}
            >
              {selectedIndex === index && title}
            </h1>
          </div>
          <div className={_.galleryItemDescription}>
            <p
              style={{
                opacity: selectedIndex === index && fade ? 1 : 0,
                transition: "opacity 1000ms ease-in-out",
              }}
            >
              {selectedIndex === index && preview}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PortifolioCard;
