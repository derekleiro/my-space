import Page from "@components/page";
import { colors } from "@constants/colors";
import { fonts, Routes } from "@constants/types";
import { useDispatch} from "react-redux";
import _ from "../web/web.portifolio.module.css";
import { useEffect } from "react";
import { changeRoute } from "@store/slices/navigation";
import WebCard from "@pages/portifolio/components/web-card";

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

type T = {
  title: string;
  preview: string;
  demoLink: string;
  articleLink: string;
};

type HomeProps = {
  route: Routes;
};
const PortifolioMobile = (props: HomeProps) => {
  const { route } = props;
  const dispatch = useDispatch();
  
  const data: Array<T> = [
    {
      title: "Lively",
      preview: `Lively is a 4.9 star rated, to-do list that I developed. It motivates you to get things done and gives you tips to form better habits. With lists, a goals list, a time tracker, a time logger, and detailed progress reports`,
      demoLink: "https://play.google.com/store/apps/details?id=com.lively.life",
      articleLink: "/learning/hi",
    },
    {
      title: "Random-ly",
      preview: `Random-ly is a fun and simple web app that I develop. It enables users to share thoughts and chat with people around the world.`,
      demoLink: "https://randomly-719c6.web.app",
      articleLink: "/learning/hi",
    },
    {
      title: "Fingo",
      preview: `Fingo is a fintech startup that provides digital banking services for youth. As a Frontend dev, I was able to work on many aspects of the app for both Android and iOS.`,
      demoLink: "http://fingo.africa",
      articleLink: "/learning/hi",
    },
    {
      title: "Gezako",
      preview: `Gezako is a Software QA organisation Tool, designed to simplify software QA. Working on the Frontend of the web app and UI design was one of my tasks during the time I worked there.`,
      demoLink: "https://gezako.com/",
      articleLink: "/learning/hi",
    },
    {
      title: "derekleiro.me stack",
      preview: `In addition to developing this website, derekleiro.me is a made up of a backend system, internal dashboard and a blogging system.`,
      demoLink: "https://derekleiro.me",
      articleLink: "/learning/hi",
    },
    {
      title: "React Dashboard",
      preview: `React Dashboard was a fun side project i developed to get out of my comfort zone and venture into problem solving. It runs on Vite and React`,
      demoLink: "https://upwork-77430.web.app",
      articleLink: "/learning/hi",
    },
  ];

  useEffect(() => {
    dispatch(changeRoute(Routes.portifolio));
  }, []);

  return (
    <Page route={route} mobile={true}>
      <div
        className={_.portifolio}
        style={{ padding: "1.5em", textAlign: "left" }}
      >
        <header>
          <h1>
            <span style={styles.intro}>
              A couple of things i've done
              <br />{" "}
            </span>
            <span style={styles.name}>Projects!</span>
            <br />
          </h1>
        </header>

        {data.length !== 0 &&
            data.map((project, index) => {
              return (
                <WebCard
                  demoLink={project.demoLink}
                  articleLink={project.articleLink}
                  key={index}
                  title={project.title}
                  index={index}
                  dataLength={data.length}
                  description={project.preview}
                />
              );
            })}
      </div>
    </Page>
  );
};

export default PortifolioMobile;
