import Button from "@components/button";
import { useSelector } from "react-redux";
import { colors } from "@constants/colors";
import { fonts } from "@constants/types";
import _ from "./categories.module.css";

type CategoriesProps = {
  sectionData: Array<string>;
  sectionState: string;
  setSectionState: Function;
};

const Categories = (props: CategoriesProps) => {
  const { sectionData, sectionState, setSectionState } = props;
  const isMobile = useSelector((state: any) => state.scroll.isMobile);
  const styles = {
    activeSection: {
      color: colors.accent,
      fontFamily: fonts.bold as fonts,
      textDecoration: "overline",
      fontSize: "1.1em",
    },
  };

  switch (isMobile) {
    case true:
      return (
        <select
          name="interest"
          required
          onChange={(e) => setSectionState(e.target.value)}
          style={{
            position: "sticky",
            top: "0",
            padding: "25px 0",
            backgroundColor: colors.primary,
            color: colors.accent,
            zIndex: "9999",
            borderBottom: `solid 1px ${colors.divider}`,
          }}
        >
          {sectionData.length > 0 &&
            sectionData.map((section, index) => {
              return (
                <option key={index} value={section}>
                  {section}
                </option>
              );
            })}
        </select>
      );
    default:
      return (
        <div
          className={_.sections}
          style={{
            borderLeft: `solid 1px ${colors.divider}`,
          }}
        >
          <ol>
            {sectionData.length > 0 &&
              sectionData.map((section, index) => {
                return (
                  <li key={index}>
                    <Button
                      key={index}
                      type={sectionState === section ? "alternate" : "plain"}
                      clickHandler={() => setSectionState(section)}
                      name={section}
                      customStyle={
                        sectionState === section
                          ? styles.activeSection
                          : { fontSize: "1.1em" }
                      }
                    />
                  </li>
                );
              })}
          </ol>
        </div>
      );
  }
};

export default Categories;
