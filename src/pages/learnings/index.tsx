import { pageProps } from "@constants/types";
import { useSelector } from "react-redux";
import LearningsMobile from "./views/app";
import LearningsWeb from "./views/web/Index";

const Learnings = (page: pageProps) => {
  const { route } = page.props;
  const isMobile = useSelector((state: any) => state.scroll.isMobile);

  return isMobile ? (
    <LearningsMobile route={route} />
  ) : (
    <LearningsWeb route={route} />
  );
};

export default Learnings;
