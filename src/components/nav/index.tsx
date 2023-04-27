import { colors } from "@constants/colors";
import { fonts, Themes } from "@constants/types";
import _ from "./nav.module.css";
import logo from "@assets/images/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { sleep } from "@util/functions";
import Icon from "@components/icon";
import { useDispatch } from "react-redux";
import { changeTheme } from "@store/slices/theme";

type NavProps = {
  props: {
    darkMode: boolean;
    name: string;
  };
};

const styles = {
  name: {
    fontFamily: fonts.light as fonts,
  },
};

const Nav = (component: NavProps) => {
  const { darkMode, name } = component.props;
  const [navName, setNavName] = useState<string>("");
  const dispatch = useDispatch();

  const handleTyping = async () => {
    for (let i = 0; i < name.length; i++) {
      setNavName((curr) => curr + name[i]);
      await sleep(50);
    }
  };

  const handleThemeChange = () => {
    if (darkMode) {
      dispatch(changeTheme(Themes.light));
      localStorage.setItem("theme", Themes.light);
      colors.setLightMode();
    } else {
      dispatch(changeTheme(Themes.dark));
      localStorage.setItem("theme", Themes.dark);
      colors.setDarkMode();
    }
  };

  useEffect(() => {
    setNavName("");
    handleTyping();

    return () => {
      setNavName("");
    };
  }, [name]);

  return (
    <section
      className={_.nav}
      style={{
        backgroundColor: colors.primary,
        transition: "all 400ms ease-in-out",
      }}
    >
      <div style={{ position: "sticky", top: "0", height: "100vh" }}>
        <div className={_.logo}>
          <Link to="/">
            <img
              style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}
              src={logo}
              alt="Derek Leiro"
            />
          </Link>
        </div>
        <div style={styles.name} className={_.name}>
          {navName.toUpperCase()}
        </div>
        <div className={_.theme}>
          <Icon
            clickHandler={handleThemeChange}
            name={darkMode ? "sun" : "moon"}
            size={35}
            alt={`Change to ${darkMode ? "light" : "dark"} mode`}
          />
        </div>
      </div>
    </section>
  );
};

export default Nav;
