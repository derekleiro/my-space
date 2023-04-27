import Page from "@components/page";
import { fonts, Routes, Themes } from "@constants/types";
import _ from "./web.learnings.module.css";
import TopNav from "@components/top-nav";
import { colors } from "@constants/colors";
import { useEffect, useState } from "react";
import { changeRoute } from "@store/slices/navigation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Learnings from "@pages/learnings/components/Learnings";
import Categories from "@pages/learnings/components/Categories";

const styles = {
  page: {
    padding: "0 5% 50px 5%",
    textAlign: "left",
  },
  intro: {
    fontFamily: fonts.regular as fonts,
  },
  highlight: {
    fontFamily: fonts.bold as fonts,
    color: colors.accent,
    fontSize: "3em",
  },
};

type T = {
  title: string;
  preview: string;
  date: string;
  year: number;
  section: string;
};

type LearningsWebProps = {
  route: Routes;
};

const LearningsWeb = (props: LearningsWebProps) => {
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
    <Page route={route} customStyle={styles.page}>
      <div>
        <header>
          <TopNav />
        </header>

        <section style={{ display: "flex" }}>
          <Learnings mutableData={mutableData} navigate={navigate} />
          <Categories
            sectionData={sectionData}
            sectionState={sectionState}
            setSectionState={setSectionState}
          />
        </section>
      </div>
    </Page>
  );
};

export default LearningsWeb;
