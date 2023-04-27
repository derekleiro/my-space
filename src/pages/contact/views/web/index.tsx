import Button from "@components/button";
import Icon from "@components/icon";
import Page from "@components/page";
import TopNav from "@components/top-nav";
import { colors } from "@constants/colors";
import { fonts, Routes, Themes } from "@constants/types";
import { changeRoute } from "@store/slices/navigation";
import { validEmail } from "@util/functions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "./web.contact.module.css";
import { handleFormSubmit, handleSubmit } from "../../functions";
import Error from "@components/error";

type ContactProps = {
  route: Routes;
};
const ContactWeb = (props: ContactProps) => {
  const { route } = props;
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme.mode);
  const darkMode = theme === Themes.dark;
  const [errors, setErrors] = useState<Array<string>>([]);
  const [success, setSuccess] = useState<boolean>(false);

  const styles = {
    page: {
      padding: "0 5% 50px 5%",
      textAlign: "left",
      flex: 1,
    },
    intro: {
      fontFamily: fonts.regular as fonts,
      marginBottom: "50px",
    },
    highlight: {
      fontFamily: fonts.bold as fonts,
      color: colors.accent,
      fontSize: "3em",
    },
    input: {
      borderBottom: `solid 1px ${colors.divider}`,
    },
  };

  useEffect(() => {
    dispatch(changeRoute(Routes.contact));
  }, []);

  useEffect(() => {
    var textarea: any = document.getElementById("message");

    textarea.oninput = function () {
      textarea.style.height = "";
      textarea.style.height = textarea.scrollHeight + "px";
    };
  }, []);
  return (
    <Page route={route} customStyle={styles.page}>
      {success && (
        <Error type="500" btnName="Go back" clickHandler={() => setSuccess(false)} />
      )}

      {!success && (
        <div className={_.contact}>
          <header>
            <TopNav />
            <h1>
              <span style={styles.highlight}>Let's work!</span>
            </h1>
            <h1 style={styles.intro}>
              Would love to hear from you 👋🏾
              <br />
            </h1>
          </header>

          <div className={_.contactInfoContainer}>
            <form onSubmit={(e) => handleSubmit({ setSuccess, setErrors, e })}>
              <div className={_.formSection}>
                <label>What is your name?</label>
                <br />
                <input
                  title="Enter your name"
                  type="text"
                  name="name"
                  style={{ color: colors.accent, ...styles.input }}
                  placeholder="John Doe"
                  required
                ></input>
              </div>

              <div className={_.formSection}>
                <label>What's your email address?</label>
                <br />
                <input
                  title="Enter your email"
                  type="text"
                  name="email"
                  style={{ color: colors.accent, ...styles.input }}
                  placeholder="johndoe@mail.com"
                  required
                ></input>
              </div>

              <div className={_.formSection}>
                <label>What are you interested in?</label>
                <br />
                <select
                  name="interest"
                  required
                  style={{ color: colors.accent, ...styles.input }}
                >
                  <option value={""}>Select a option</option>
                  <option value={"Consultation"}>Consultation</option>
                  <option value={"I have a job opportunity"}>
                    I have a job opportunity
                  </option>
                  <option value={"Helping hand in a project"}>
                    Helping hand in a project
                  </option>
                </select>
              </div>

              <div className={_.formSection}>
                <label>Message</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  style={{ color: colors.accent, ...styles.input }}
                  placeholder="I was interested to know if you're....."
                  required
                ></textarea>
              </div>
              <Button
                customStyle={{ marginTop: "25px" }}
                name="Submit"
                type="submit"
              />
            </form>

            <div
              className={_.contactInfo}
              style={{
                borderLeft: `solid 1px ${colors.divider}`,
              }}
            >
              <Icon
                rightSpacing={35}
                size={25}
                clickHandler={() =>
                  (window.location.href = "https://github.com/derekleiro")
                }
                name="github"
                alt="My Github profile"
              />
              <Icon
                rightSpacing={35}
                size={25}
                clickHandler={() =>
                  (window.location.href = "https://linkedin.com/in/derekleiro")
                }
                name="linkedin"
                alt="My LinkediIn profile"
              />
              <Icon
                rightSpacing={35}
                size={25}
                clickHandler={() =>
                  (window.location.href = "https://medium.com/@derekleiro")
                }
                name="medium"
                alt="My Medium profile"
              />
              <Icon
                rightSpacing={35}
                size={25}
                clickHandler={() =>
                  (window.location.href = "https://twitter.com/derekleiro")
                }
                name="twitter"
                alt="My Twitter profile"
              />
              <Icon
                rightSpacing={35}
                size={25}
                clickHandler={() =>
                  (window.location.href = "https://instagram.com/derekleiro")
                }
                name="ig"
                alt="My Instagram profile"
              />
            </div>
          </div>
        </div>
      )}
    </Page>
  );
};

export default ContactWeb;
