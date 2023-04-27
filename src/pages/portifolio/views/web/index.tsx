import Page from "@components/page";
import TopNav from "@components/top-nav";
import { colors } from "@constants/colors";
import { fonts, Routes } from "@constants/types";
import { changeRoute } from "@store/slices/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import _ from "./web.portifolio.module.css";
import SideBar from "@components/sidebar";
import WebCard from "@pages/portifolio/components/web-card";

type T = {
  title: string;
  preview: string;
  demoLink: string;
  articleLink: string;
};

const styles = {
  page: {
    padding: "0 5% 50px 5%",
    textAlign: "left",
    position: "relative",
  },
  intro: {
    fontFamily: fonts.regular as fonts,
  },
  highlight: {
    fontFamily: fonts.bold as fonts,
    color: colors.accent,
    fontSize: "3em",
  },
  name: {
    fontFamily: fonts.bold as fonts,
    color: colors.accent,
  },
};

type PortifolioWebProps = {
  route: Routes;
};
const PortifolioWeb = (props: PortifolioWebProps) => {
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
    dispatch(changeRoute(Routes.home));
  }, []);

  useEffect(() => {
    dispatch(changeRoute(Routes.portifolio));
  }, []);
  return (
    <>
      <Page route={route} customStyle={styles.page}>
        <div className={_.portifolio} id="section0">
          <header>
            <TopNav />
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
      <SideBar
        sectionsLength={data.length}
        page={"/portifolio"}
      />
    </>
  );
};

export default PortifolioWeb;
