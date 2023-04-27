import { colors } from "@constants/colors";
import "./App.css";
import "@assets/fonts/index.css";
import { fonts, Themes } from "@constants/types";
import Nav from "@components/nav";
import Page from "@components/page";
import Home from "@pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Learnings from "@pages/learnings";
import Contact from "@pages/contact";
import Portifolio from "@pages/portifolio";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "@store/index";
import { useEffect, useState } from "react";
import { changeTheme } from "@store/slices/theme";
import Learning from "@pages/learning";
import { getViewportWidth } from "@util/functions";
import MobileBottomNav from "@components/mobile-bottom-nav";
import { updatePlatform, updateX } from "@store/slices/scroll";
import Error from "@components/error";

const AppParent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const route = useSelector((state: any) => state.navigation.route);
  const theme = useSelector((state: any) => state.theme.mode);
  const width = useSelector((state: any) => state.scroll.width);
  const isMobile = useSelector((state: any) => state.scroll.isMobile);

  const darkMode = theme === Themes.dark;
  const dispatch = useDispatch();
  const [styles, setStyles] = useState<object>({});

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      dispatch(changeTheme(theme));
    } else {
      dispatch(changeTheme(Themes.dark));
    }
  }, []);

  //Check constants/colors.ts to config this if you want custom theme colors
  useEffect(() => {
    if (darkMode) {
      colors.setDarkMode();
    } else {
      colors.setLightMode();
    }

    const color = colors.primary;
    document.body.style.backgroundColor = color;
    setStyles({
      background: colors.primary,
      fontFamily: fonts.regular,
      transition: "all 400ms ease-in-out",
      color: darkMode ? "white" : "black",
    });
  }, [theme]);

  const setViewPortWidth = (e: any) => {
    const width = getViewportWidth();
    dispatch(updateX(width));
    if (width < 921) {
      dispatch(updatePlatform(true));
    } else {
      dispatch(updatePlatform(false));
    }
  };

  useEffect(() => {
    window.addEventListener("resize", setViewPortWidth);
    return () => {
      window.removeEventListener("resize", setViewPortWidth);
    };
  }, []);

  return (
    <Router>
      <div className="App" style={styles}>
        <Page route={route} fastFade={true}>
          {width > 549 && <Nav props={{ darkMode, name: route }} />}

          <Routes>
            <Route path="/" element={<Home props={{ width, route }} />} />
            <Route
              path="/learnings"
              element={<Learnings props={{ width, route }} />}
            />
            <Route
              path="/contact"
              element={<Contact props={{ width, route }} />}
            />
            <Route
              path="/portifolio"
              element={<Portifolio props={{ width, route }} />}
            />
            <Route
              path="/learning/:id"
              element={<Learning props={{ width, route }} />}
            />
            <Route
              path="*"
              element={
                <Error
                  type="404"
                  btnName="Go home"
                  clickHandler={() => (window.location.href = "/")}
                />
              }
            />
          </Routes>
          {isMobile && <MobileBottomNav props={{ darkMode, route }} />}
        </Page>
      </div>
    </Router>
  );
};

export default AppParent;
