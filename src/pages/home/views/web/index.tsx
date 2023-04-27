import Image from "@components/image";
import Page from "@components/page";
import { fonts, Routes } from "@constants/types";
import _ from "./web.home.module.css";
import profile from "@assets/images/pfp.jpeg";
import { colors } from "@constants/colors";
import TopNav from "@components/top-nav";
import { useEffect } from "react";
import { changeRoute } from "@store/slices/navigation";
import { useDispatch } from "react-redux";
import SideBar from "@components/sidebar";
import Achievements from "@pages/home/components/achievements";
import Banner from "@pages/home/components/banner";
import Footer from "@components/footer";

const styles = {
  page: {
    padding: "0 5% 50px 5%",
    textAlign: "left",
  },
  intro: {
    fontFamily: fonts.regular as fonts,
    fontSize: "1.5em"
  },
  name: {
    fontFamily: fonts.bold as fonts,
    color: colors.accent,
    fontSize: "4em",
  },
  section: {
    display: "flex",
    height: "100vh",
    flexWrap: "wrap" as const,
    alignItems: "center",
    justifyContent: "center",
  },
};

type HomeProps = {
  route: Routes;
  width: number;
};
const HomeWeb = (props: HomeProps) => {
  const { route } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeRoute(Routes.home));
  }, []);

  return (
    <>
      <Page route={route} customStyle={styles.page}>
        <div className="home" style={{width: "100%"}}>
          <section>
            <header>
              <TopNav />
            </header>
            <section id="content" style={styles.section}>
              <div style={{ flex: 1 }}>
                <h1>
                  <span style={styles.intro}>
                    Hello, <br /> My name is <br />{" "}
                  </span>
                  <span style={styles.name}>Derek</span>
                  <br />
                  <span style={{ ...styles.intro, color: "grey" }}>
                    Frontend Software engineer
                  </span>
                </h1>
              </div>
              <div style={{ flex: 1 }}>
                <Image
                  customStyle={{
                    width: "400px",
                    height: "400px",
                    border: 0,
                  }}
                  src={profile}
                  alt="Derek Leiro Portrait"
                />
              </div>
            </section>
          </section>
          <Banner type="js" />
          <section>
            <Achievements />
          </section>
          <Footer />
        </div>
      </Page>
      <SideBar page={"/"} showButtons={false} />
    </>
  );
};

export default HomeWeb;
