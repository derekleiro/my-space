import { Routes } from "@constants/types";
import { useEffect, useState } from "react";
import _ from "./page.module.css";

type Props = {
  children: any;
  customStyle?: object;
  route: Routes;
  fastFade?: boolean;
  mobile?: boolean;
};
const Page = (props: Props) => {
  const { children, customStyle, route, fastFade, mobile } = props;
  const [fade, setFade] = useState(true);
  const fadeStyle = {
    opacity: fade ? 0 : 1,
    width: "100%",
    transition: fastFade
      ? "opacity 400ms ease-in-out"
      : "opacity 1000ms ease-in-out",
    paddingBottom: mobile ? "75px" : "0px",
    ...customStyle,
  };

  useEffect(() => {
    setFade(false);
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [route]);
  return (
    <main style={fadeStyle} className={_.page}>
      {children}
    </main>
  );
};

export default Page;
