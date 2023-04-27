import Page from "@components/page";
import { colors } from "@constants/colors";
import { fonts, Routes } from "@constants/types";
import { useDispatch } from "react-redux";
import profile from "@assets/images/pfp.jpeg";
import _ from "./app.home.module.css";
import _2 from "../web/web.home.module.css";
import Image from "@components/image";
import { useEffect } from "react";
import { changeRoute } from "@store/slices/navigation";
import Banner from "@pages/home/components/banner";
import Achievements from "@pages/home/components/achievements";
import Footer from "@components/footer";

const styles = {
  intro: {
    fontFamily: fonts.regular as fonts,
    fontSize: "1em",
  },
  name: {
    fontFamily: fonts.bold as fonts,
    color: colors.accent,
  },
};

type HomeProps = {
  route: Routes;
  width: number;
};
const HomeMobile = (props: HomeProps) => {
  const { route } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeRoute(Routes.home));
  }, []);

  return (
    <Page route={route} mobile={true}>
      <div
        className={_2.contact}
        style={{ padding: "1.5em", textAlign: "left" }}
      >
        <header>
          <h1>
            <span style={styles.intro}>
              Hello, <br /> My name is <br />{" "}
            </span>
            <span style={styles.name}>Derek</span>
            <br />
            <span style={{ ...styles.intro, color: "grey" }}>
              Frontend Software Engineer
            </span>
          </h1>
        </header>

        <section>
          <div style={{ textAlign: "center" }}>
            <Image
              customStyle={{
                width: "90%",
                aspectRatio: "1/1",
                border: 0,
              }}
              src={profile}
              alt="Derek Leiro Portrait"
            />
          </div>
        </section>
        <Banner type="js" />
        <section>
          <Achievements />
        </section>
        <Footer />
      </div>
    </Page>
  );
};

export default HomeMobile;
