import { colors } from "@constants/colors";
import { fonts } from "@constants/types";
import { useSelector } from "react-redux";
import _ from "./banner.module.css";

const Banner = (props: { type: "prog" | "js" }) => {
    const isMobile = useSelector((state: any) => state.scroll.isMobile);
  const { type } = props;
  const styles = {
    banner: {
      height: "50vh",
      fontSize: isMobile ? "1em" : "2em",
      display: "flex",
      alignItems: "center",
    },
    highlight: {
      fontSize: "2em",
      fontFamily: fonts.bold,
      color: colors.accent,
    },
  };

  switch (type) {
    case "js":
      return <JSBanner styles={styles} />;
    default:
      return <ProgBanner styles={styles} />;
  }
};

const JSBanner = (props: { styles: any }) => {
  const { styles } = props;
  return (
    <section style={styles.banner}>
      <span>
        <span style={styles.highlight}>"Anything</span>
        <span>that can be made with </span>
        <span style={styles.highlight}>JavaScript</span>
        <span>, will eventually be </span>
        <span style={styles.highlight}>Made </span>
        <span>with JavaScript</span>
        <span style={styles.highlight}>"</span>
      </span>
    </section>
  );
};

const ProgBanner = (props: { styles: any }) => {
  const { styles } = props;
  return (
    <section style={styles.banner}>
      <span>
        <span>"Developing software is </span>
        <span style={styles.highlight}>easy</span>
        <span>finding solutions to new problems is the </span>
        <span style={styles.highlight}>key</span>
        <span> asset</span>
        <span style={styles.highlight}>"</span>
      </span>
    </section>
  );
};

export default Banner;
