import Icon from "@components/icon";
import { colors } from "@constants/colors";
import { fonts, Icons, Routes, Themes } from "@constants/types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "./mobile-bottom-nav.module.css";

type PropsItem = {
  name: string;
  icon: Icons;
  style: object;
  route: string;
  currentRoute: Routes;
};
const NavItem = (props: PropsItem) => {
  const { name, icon, style, route, currentRoute } = props;
  const highlightStyle = {
    padding: "7.5px 0",
    flex: 1.5,
    borderRadius: "35px",
  };
  return (
    <li
      className={_.navItem}
      style={currentRoute === name ? highlightStyle : {}}
    >
      <Link to={route}>
        <Icon size={25} customStyle={style} name={icon} alt={name} />
        {currentRoute === name && (
          <span style={{ ...style }}>
            {name === Routes.learnings ? "Learnings" : name}
          </span>
        )}
      </Link>
    </li>
  );
};

type MobileBottomNavProps = {
  props: {
    darkMode: boolean;
    route: Routes;
  };
};
const MobileBottomNav = (component: MobileBottomNavProps) => {
  const { route } = component.props;
  const styles = {
    link: {
      color: "white",
      fontSize: "13px",
    },
    active: {
      filter:
        "brightness(0) saturate(100%) invert(29%) sepia(18%) saturate(3128%) hue-rotate(283deg) brightness(102%) contrast(93%)",
      marginLeft: "5px",
      color: colors.accent,
      fontSize: "13px",
    },
  };

  const handleActiveLink = (routeInput: Routes) => {
    if (route === routeInput) return styles.active;
    return styles.link;
  };

  return (
    <nav
      className={_.mobileBottomNav}
      style={{
        borderTop: `solid 1px ${colors.divider}`,
        backgroundColor: colors.primary,
      }}
    >
      <ul>
        <NavItem
          currentRoute={route}
          style={handleActiveLink(Routes.home)}
          name={Routes.home}
          icon="home"
          route="/"
        />
        <NavItem
          currentRoute={route}
          style={handleActiveLink(Routes.portifolio)}
          name={Routes.portifolio}
          icon="stack"
          route="/portifolio"
        />
        <NavItem
          currentRoute={route}
          style={handleActiveLink(Routes.learnings)}
          name={Routes.learnings}
          icon="writing"
          route="/learnings"
        />
        <NavItem
          currentRoute={route}
          style={handleActiveLink(Routes.contact)}
          name={Routes.contact}
          icon="contact"
          route="/contact"
        />
      </ul>
    </nav>
  );
};

export default MobileBottomNav;
