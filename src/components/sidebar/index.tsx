import Icon from "@components/icon";
import { colors } from "@constants/colors";
import { updateY } from "@store/slices/scroll";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";

import _ from "./sidebar.module.css";

type SideBarProps = {
  showButtons?: boolean;
  page: string;
  sectionsLength?: any;
};
const SideBar = (props: SideBarProps) => {

  const dispatch = useDispatch();
  const currentHeight = useSelector((state: any) => state.scroll.scrollY);
  const documentHeight = document.body.offsetHeight;

  const setScrollHeight = (e: any) => {
    const doc = e.target.documentElement;
    const currHeight = doc.scrollTop;
    dispatch(updateY(currHeight + window.innerHeight));
  };

  useEffect(() => {
    document.addEventListener("scroll", setScrollHeight);
    return () => {
      document.removeEventListener("scroll", setScrollHeight);
      dispatch(updateY(window.innerHeight));
    };
  }, []);

  const styles = {
    nav: {
      backgroundColor: colors.primary,
      transition: "all 400ms ease-in-out",
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "center",
      position: "sticky" as const,
      top: "0px",
    },
    progressIndicator: {
      height: `${(currentHeight / documentHeight) * 100}%`,
      backgroundColor: colors.accent,
    },
  };

  return (
    <section className={_.nav} style={styles.nav}>
      <ArrowUp currentHeight={currentHeight} />
      <div
        className={_.progressBar}
        style={{ backgroundColor: colors.divider }}
      >
        <div
          className={_.progressIndicator}
          style={styles.progressIndicator}
        ></div>
      </div>
      <ArrowDown
        currentHeight={currentHeight}
        documentHeight={documentHeight}
      />
    </section>
  );
};

export default SideBar;

type ArrowUpType = {
  currentHeight: number;
};

type ArrowDownType = {
  currentHeight: number;
  documentHeight: number;
};

const ArrowUp = (props: ArrowUpType) => {
  const {currentHeight } = props;
  return (
    <div className={_.item}>
        <Icon
          customStyle={{
            opacity:
              currentHeight === document.documentElement.clientHeight ? 0.1 : 1,
          }}
          clickHandler={() =>
            document.documentElement.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          name="chevron-left"
          size={25}
          alt="Go to the previous project"
        />
    </div>
  );
};

const ArrowDown = (props: ArrowDownType) => {
  const { currentHeight, documentHeight } = props;
  return (
    <div className={_.item}>
        <Icon
          customStyle={{
            opacity: currentHeight + 10 >= documentHeight ? 0.1 : 1,
          }}
          clickHandler={() => {
            document.documentElement.scrollTo({
              top: documentHeight,
              behavior: "smooth",
            });
          }}
          name="chevron-right"
          size={25}
          alt="Go to the next project"
        />
    </div>
  );
};
