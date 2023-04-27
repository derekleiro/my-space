import { pageProps } from "@constants/types";
import { useSelector } from "react-redux";
import ContactMobile from "./views/app";
import ContactWeb from "./views/web";

const Contact = (page: pageProps) => {
  const { route } = page.props;
  const isMobile = useSelector((state: any) => state.scroll.isMobile);

  return isMobile ? (
    <ContactMobile route={route} />
  ) : (
    <ContactWeb route={route} />
  );
};

export default Contact;
