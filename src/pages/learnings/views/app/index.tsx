import Page from "@components/page";
import { colors } from "@constants/colors";
import { fonts, Routes } from "@constants/types";
import { useDispatch } from "react-redux";
import _ from "../web/web.learnings.module.css";
import { useEffect, useState } from "react";
import { changeRoute } from "@store/slices/navigation";
import { useNavigate } from "react-router-dom";
import Categories from "@pages/learnings/components/Categories";
import Learnings from "@pages/learnings/components/Learnings";

const styles = {
  page: {
    padding: "0 0 50px 0",
    textAlign: "left",
  },
  intro: {
    fontFamily: fonts.regular as fonts,
    fontSize: "1em",
  },
  highlight: {
    fontFamily: fonts.bold as fonts,
    color: colors.accent,
  },
};

type T = {
  title: string;
  preview: string;
  date: string;
  year: number;
  section: string;
};

type LearningsMobileProps = {
  route: Routes;
};
const LearningsMobile = (props: LearningsMobileProps) => {
  const { route } = props;
  const navigate = useNavigate();
  const [sectionState, setSectionState] = useState<string>("Life");
  const dispatch = useDispatch();
  const data: Array<T> = [
    {
      title: "This one skill is very important" as string,
      preview:
        `We are in an ever changing world. Identifying and predicting opportunities is not as easy as you think. Changing our frame of thinking with this one skill, can prove crucial to your life ahead.` as string,
      date: "21st February",
      year: 2023 as number,
      section: "Life",
    },
  ];

  const [mutableData, setMutableData] = useState<Array<T>>([]);
  const [sectionData, setSectionData] = useState<Array<string>>([
    "Life",
    // "Work",
    // "Projects",
  ]);

  useEffect(() => {
    const newData: Array<T> = data.filter(
      (data_) => data_.section === sectionState
    );
    setMutableData(() => [...newData]);
  }, [sectionState]);

  useEffect(() => {
    dispatch(changeRoute(Routes.learnings));
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
              I have learned a couple of things over the years
              <br />{" "}
            </span>
            <span style={styles.highlight}>Learnings!</span>
            <br />
          </h1>
        </header>

        <section style={{ display: "flex", flexDirection: "column" }}>
          <Categories
            sectionData={sectionData}
            sectionState={sectionState}
            setSectionState={setSectionState}
          />
          <Learnings mutableData={mutableData} navigate={navigate} />
        </section>
      </div>
    </Page>
  );
};

export default LearningsMobile;
