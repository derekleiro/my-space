import Icon from "@components/icon";
import { colors } from "@constants/colors";
import { fonts } from "@constants/types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import _ from "./web-card.module.css";

type boxPreviewType = {
  index: number;
  dataLength: number;
  title: string;
};
const BoxPreview = (props: boxPreviewType) => {
  const { index, dataLength, title } = props;
  const isMobile = useSelector((state: any) => state.scroll.isMobile);

  return (
    <div
      className={_.boxPreview}
      style={{
        background:
          index < dataLength - 1
            ? `linear-gradient(to bottom, ${colors.projectColors[index]}, ${
                colors.projectColors[index + 1]
              })`
            : colors.projectColors[index],
        color: "white",
        height: isMobile ? "20em" : "30em",
        margin: isMobile ? "2em 0" : "0",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2em", fontFamily: fonts.bold }}>{title}</div>
      </div>
    </div>
  );
};

type WebCardType = {
  title: string;
  description: string;
  index: number;
  dataLength: number;
  demoLink: string;
  articleLink: string;
};
const WebCard = (props: WebCardType) => {
  const { title, description, index, dataLength, demoLink, articleLink } =
    props;
  const isMobile = useSelector((state: any) => state.scroll.isMobile);
  const navigate = useNavigate();

  return (
    <div
      className={_.card}
      style={{
        height: isMobile ? "auto" : "75vh",
        margin: isMobile && index !== 0 ? "5em 0" : "2em 0",
      }}
    >
      {index % 2 !== 0 && !isMobile && (
        <BoxPreview index={index} dataLength={dataLength} title={title} />
      )}

      <div
        className={_.cardDescription}
        style={{
          padding: isMobile ? "0" : "0 25px",
        }}
      >
        <div
          style={{
            marginBottom: "3em",
          }}
        >
          <div
            style={{
              fontSize: "2em",
              borderRadius: "35px",
              zIndex: "3",
              fontFamily: fonts.bold,
              backgroundColor: colors.primary,
            }}
          >
            {title}
          </div>
        </div>

        <p>{description}</p>
        <section style={{ color: colors.accent, marginTop: "2em" }}>
          <span
            className={_.link}
            onClick={() => window.open(demoLink, "_blank")}
          >
            Demo{" "}
            <Icon
              leftSpacing={5}
              invert={false}
              alt="Go to demo page"
              name="external-link"
              size={15}
            />
          </span>
          {" // "}
          <span
            className={_.link}
            onClick={() => navigate(`/learning/${title}`)}
          >
            Read more
          </span>
        </section>
      </div>
      {isMobile && (
        <BoxPreview index={index} dataLength={dataLength} title={title} />
      )}
      {index % 2 === 0 && !isMobile && (
        <BoxPreview index={index} dataLength={dataLength} title={title} />
      )}
    </div>
  );
};

export default WebCard;
