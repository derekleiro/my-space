import { colors } from "@constants/colors";
import { fonts } from "@constants/types";
import { useSelector } from "react-redux";
import _ from "./achievement-item.module.css";

const AchievementItem = (props: {
  title: string;
  bodyText: string;
  index: number;
  itemLength: number;
}) => {
  const { bodyText, index, itemLength, title } = props;

  const isMobile = useSelector((state: any) => state.scroll.isMobile);

  const pointContainer = {
    position: "absolute" as const,
    top: "100px",
    backgroundColor: colors.primary,
    height: "40px",
    width: "40px",
    display: "flex",
    zIndex: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "35px",
  };

  const fade = {
    position: "absolute" as const,
    height: "100px",
    width: "1px",
  };
  const style = {
    fadeTop: {
      ...fade,
      top: "0px",
      left: "-1px",
      background: `linear-gradient(to top, ${colors.divider}, ${colors.primary})`,
    },
    fadeBottom: {
      ...fade,
      bottom: "0px",
      right: "-1px",
      background: `linear-gradient(to bottom, ${colors.divider}, ${colors.primary})`,
    },
    pointContainerRight: {
      ...pointContainer,
      right: "-20px",
    },
    pointContainerLeft: {
      ...pointContainer,
      left: "-20px",
    },
    point: {
      height: "20px",
      width: "20px",
      borderRadius: "100%",
      backgroundColor: colors.accent,
    },
  };

  switch (isMobile) {
    case true:
      return (
        <section className={_.achievement}>
          <MobileAchievement
            title={title}
            bodyText={bodyText}
            style={style}
            isMobile={isMobile}
          />
        </section>
      );
    default:
      return (
        <section className={_.achievement}>
          {index % 2 === 0 ? (
            <LeftAchievement
              title={title}
              bodyText={bodyText}
              style={style}
              index={index}
              isMobile={isMobile}
            />
          ) : (
            <RightAchievement
              title={title}
              bodyText={bodyText}
              style={style}
              index={index}
              isMobile={isMobile}
              itemLength={itemLength}
            />
          )}
        </section>
      );
  }
};

export default AchievementItem;

type achievementType = {
  title: string;
  bodyText: string;
  style: any;
  index: number;
  isMobile: boolean;
  itemLength?: number;
};
const LeftAchievement = (props: achievementType) => {
  const { title, bodyText, style, index, isMobile } = props;
  return (
    <>
      <div style={{ flex: 1 }}>
        <h1>{title}</h1>
        <p>{bodyText}</p>
      </div>

      <div
        className={_.divider}
        style={{
          flex: isMobile ? "none" : "1",
          borderLeft: `1px solid ${colors.divider}`,
        }}
      >
        {index === 0 && <div style={style.fadeTop}></div>}

        <div style={style.pointContainerLeft}>
          <div style={style.point}></div>
        </div>
      </div>
    </>
  );
};

const RightAchievement = (props: achievementType) => {
  const { title, bodyText, style, index, isMobile, itemLength } = props;

  return (
    <>
      <div
        className={_.divider}
        style={{
          flex: isMobile ? "none" : "1",
          borderRight: `1px solid ${colors.divider}`,
        }}
      >
        <div style={style.pointContainerRight}>
          <div style={style.point}></div>
        </div>

        {index + 1 === itemLength && <div style={style.fadeBottom}></div>}
      </div>
      <div style={{ flex: 1 }}>
        <h1>{title}</h1>
        <p>{bodyText}</p>
      </div>
    </>
  );
};

type mobileAchievementType = {
  title: string;
  bodyText: string;
  style: any;
  isMobile: boolean;
};
const MobileAchievement = (props: mobileAchievementType) => {
  const { title, bodyText, style, isMobile } = props;
  const textStyle = {
    textAlign: "left" as const,
    paddingLeft: "25px",
  };

  return (
    <>
      <div
        className={_.divider}
        style={{
          flex: isMobile ? "none" : "1",
          borderRight: `1px solid ${colors.divider}`,
          alignItems: "flex-start",
        }}
      >
        <div style={style.pointContainerRight}>
          <div style={style.point}></div>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h1 style={isMobile ? {...textStyle, fontFamily: fonts.bold} : {}}>{title}</h1>
        <p style={isMobile ? textStyle : {}}>{bodyText}</p>
      </div>
    </>
  );
};
