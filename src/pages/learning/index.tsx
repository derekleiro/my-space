import Page from "@components/page";
import { colors } from "@constants/colors";
import { fonts, pageProps, Routes, Themes } from "@constants/types";
import { changeRoute } from "@store/slices/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "./article.module.css";
import { useNavigate } from "react-router-dom";
import SideBar from "@components/sidebar";
import Error from "@components/error";
import Icon from "@components/icon";
import LoadScreen from "@components/load-screen";

const Learning = (props: pageProps) => {
  const { route } = props.props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useSelector((state: any) => state.scroll.isMobile);
  const darkMode =
    useSelector((state: any) => state.scroll.theme) === Themes.dark;

  const [switchedView, setSwitchedView] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const styles = {
    page: {
      padding: isMobile ? "1.5em" : "50px 5% 50px 5%",
      textAlign: "left",
      width: isMobile ? "100%" : "60%",
      margin: "0 auto",
    },
    intro: {
      fontFamily: fonts.light as fonts,
      marginTop: "50px",
      marginBottom: "-25px",
    },
    title: {
      fontFamily: fonts.bold as fonts,
      color: colors.accent,
      fontSize: isMobile ? "2em" : "3em",
      lineHeight: "0.9em",
    },
    section: {
      display: "flex",
      flexWrap: "wrap" as const,
      alignItems: "center",
    },
  };

  useEffect(() => {
    dispatch(changeRoute(Routes.learnings));

    console.log(window.location.pathname);
    if (
      window.location.pathname === "/learning/This-one-skill-is-very-important"
    ) {
      setSwitchedView(true);
    }

    setTimeout(() => setLoading(false), 1500);
  }, []);

  switch (loading) {
    case true:
      return <LoadScreen />;
    default:
      return (
        <>
          <Page
            mobile={isMobile ? true : false}
            route={route}
            customStyle={styles.page}
          >
            <div className="home">
              {switchedView && (
                <header>
                  <span style={{ marginLeft: isMobile ? 0 : -30 }}>
                    <Icon
                      clickHandler={() => {
                        navigate(`../../learnings`);
                      }}
                      name="chevron-left"
                      size={20}
                      alt="Go back"
                    />
                  </span>
                  <span style={{ fontFamily: fonts.light }}>
                    {Routes.learnings}
                  </span>
                </header>
              )}

              <section style={styles.section}>
                {switchedView ? (
                  <Article darkMode={darkMode} styles={styles} />
                ) : (
                  <Error type="500" btnName="Go back" clickHandler={() => navigate(-1)} />
                )}
              </section>
            </div>
          </Page>
          {!isMobile && <SideBar page={"/learning"} />}
        </>
      );
  }
};

export default Learning;

type articleType = {
  styles: any;
  darkMode: boolean;
};
const Article = (props: articleType) => {
  const { styles, darkMode } = props;

  return (
    <div style={{ flex: 1 }}>
      <h4 style={styles.intro}>February 21</h4>

      <h1 style={styles.title}>This one skill is very important</h1>
      <p
        className={_.p}
        style={{
          flex: 1,
          opacity: darkMode ? "0.8" : "1",
        }}
      >
        We are in an ever changing world. Identifying and predicting
        opportunities is not as easy as you think.
        <br />
        <br />
        We often ask the question, what will change in the next 10 years? But,
        the better question to ask is, what is not going to change in the next
        10 years. When you invest in a company, what are their fundamentals,
        their core business? Will the core fundametals remain the same or at the
        very least change slowly? If so, then that is good company or skill to
        invest your time and/or money in.
        <br />
        <br />
        <i>
          Focus on areas that are virtually guaranteed to be valuable in the
          future no matter what happens.
        </i>
        <br />
        <br />
        Focusing on stable knowledge is a powerful approach to build a life
        around. This skill is the Trunk Technique. Some forms of knowledge arise
        quickly and then just as quickly become obsolete. Other forms stay
        relevant for a very long time.
        <br />
        <br />
        <blockquote>
          “It is important to view knowledge as sort of a semantic tree — make
          sure you understand the fundamental principles, i.e. the trunk and big
          branches, before you get into the leaves/details or there is nothing
          for them to hang onto.” - Elon Musk
        </blockquote>
        <br />
        <br />
        People who use the Trunk Technique focus on mastering the fundamental
        mental models or first principles first and then move on to the leaves
        second. By doing this, they build a more stable and adaptable tree, and
        therefore career. Trees lose their leaves every winter, but they thrive
        for decades (and sometimes hundreds of years) because they have strong
        trunks and roots.
        <br />
        <br />
        <ul>
          <li>Build a knowledge tree that lasts forever</li>
          <li>Adapt to any future fast and thrive</li>
          <li>Better understand what’s happening and what it means.</li>
          <li>
            Reduce the risk of investing in an area that turns out to not be a
            winner. Balance your understanding of trends with what is never
            going to change. Build a portfolio of extremes, a large pool of safe
            bets, and a small pool of high risk-reward bets. Meaning you have a
            sizeable pool of safe investments that allows you to venture into
            the extremes without losing everything.
          </li>
        </ul>
      </p>
    </div>
  );
};
