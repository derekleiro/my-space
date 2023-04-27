import { NavigateFunction } from "react-router-dom";
import _ from "./learnings.module.css";
import { fonts } from "@constants/types";
import Card from "@components/card";
import { useSelector } from "react-redux";

type T = {
  title: string;
  preview: string;
  date: string;
  year: number;
  section: string;
};

type LearningsProps = {
  mutableData: Array<T>;
  navigate: NavigateFunction;
};
const Learnings = (props: LearningsProps) => {
  const { mutableData, navigate } = props;
  const isMobile = useSelector((state: any) => state.scroll.isMobile);
  const styles = {
    index: {
      fontSize: "64px",
      lineHeight: "0em",
      fontFamily: fonts.regular as fonts,
      padding: isMobile ? "0px" : "15px",
      marginRight: "15px",
    },
    indexInvisble: {
      fontSize: "64px",
      lineHeight: "0em",
      fontFamily: fonts.regular as fonts,
      padding: "15px",
      marginRight: "15px",
      visibility: "hidden" as const,
    },
  };

  return (
    <div
      className={_.learnings}
      style={{ paddingLeft: isMobile ? "0px" : "25px" }}
    >
      {mutableData.length > 0 &&
        mutableData.map((learning, index) => {
          const year = learning.year;
          const previous =
            index > 0 ? mutableData[index - 1] : mutableData[index];

          // if no date previously, place date
          const condition1: boolean = previous.year === year && index < 1;

          // if different date, then place date
          const condition2: boolean = previous.year !== year;
          const url: string = learning.title.replace(/ /g, "-");

          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              {condition1 || condition2 ? (
                <p style={styles.index}>{learning.year}</p>
              ) : (
                <p
                  style={
                    isMobile
                      ? {
                          visibility: "hidden" as const,
                          fontSize: "0px"
                        }
                      : styles.indexInvisble
                  }
                >
                  {learning.year}
                </p>
              )}

              <Card
                key={index}
                year={learning.year}
                date={learning.date}
                title={learning.title}
                handleButtonClick={() => {
                  navigate(`/learning/${url}`);
                }}
                preview={learning.preview}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Learnings;
