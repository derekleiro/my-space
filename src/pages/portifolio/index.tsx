import { pageProps } from "@constants/types";
import { useSelector } from "react-redux";
import PortifolioMobile from "./views/app";
import PortifolioWeb from "./views/web";

const Portifolio = (page: pageProps) => {
  const { route, width } = page.props;
  const isMobile = useSelector((state: any) => state.scroll.isMobile);

  return isMobile ? (
    <PortifolioMobile route={route} />
  ) : (
    <PortifolioWeb route={route} />
  );
};

export default Portifolio;
