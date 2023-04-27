import { colors } from "@constants/colors";
import { fonts, Routes } from "@constants/types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "./top-nav.module.css";

const styles = {
  link: {
    color: colors.alternate,
  },
  active: {
    padding: "5px 15px",
    borderRadius: "15px",
    color: colors.accent,
    textTransform: "uppercase",
    fontSize: "2em",
    fontFamily: fonts.light as fonts,
  },
};

const TopNav = () => {
  const route = useSelector((state: any) => state.navigation.route);

  const handleActiveLink = (routeInput: Routes) => {
    if (route === routeInput) return styles.active;
    return styles.link;
  };

  return (
    <nav className={_.nav}>
      <ul>
        <li>
          <Link style={handleActiveLink(Routes.home)} to="/">
            {Routes.home}
          </Link>
        </li>
        <li>
          <Link style={handleActiveLink(Routes.portifolio)} to="/portifolio">
            {Routes.portifolio}
          </Link>
        </li>
        <li>
          <Link style={handleActiveLink(Routes.learnings)} to="/learnings">
            {Routes.learnings}
          </Link>
        </li>
        <li>
          <Link style={handleActiveLink(Routes.contact)} to="/contact">
            {Routes.contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
