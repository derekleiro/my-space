import { pageProps } from "@constants/types";
import { useSelector } from "react-redux";
import HomeMobile from "./views/app";
import HomeWeb from "./views/web";

const Home = (page: pageProps) => {
  const { route, width } = page.props;
  const isMobile = useSelector((state: any) => state.scroll.isMobile);

  return isMobile ? (
    <HomeMobile width={width} route={route} />
  ) : (
    <HomeWeb width={width} route={route} />
  );
};

export default Home;
