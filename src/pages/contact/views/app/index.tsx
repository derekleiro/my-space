import Button from "@components/button";
import Page from "@components/page";
import { colors } from "@constants/colors";
import { fonts, Routes } from "@constants/types";
import { handleSubmit } from "@pages/contact/functions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import _ from "./app.contact.module.css";
import _2 from "../web/web.contact.module.css";
import { changeRoute } from "@store/slices/navigation";
import Error from "@components/error";

type ContactProps = {
  route: Routes;
};
const ContactMobile = (props: ContactProps) => {
  const { route } = props;
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<Array<string>>([]);
  const [success, setSuccess] = useState<boolean>(false);

  const styles = {
    input: {
      borderBottom: `solid 1px ${colors.divider}`,
    },
  };

  useEffect(() => {
    dispatch(changeRoute(Routes.contact));
  }, []);

  return (
    <Page route={route} mobile={true}>
      {success && (
        <Error type="500" btnName="Go back" clickHandler={() => setSuccess(false)} />
      )}

      {!success && (
        <div
          className={_2.contact}
          style={{ padding: "1.5em", textAlign: "left" }}
        >
          <header>
            <h1
              style={{
                fontFamily: fonts.bold as fonts,
                color: colors.accent,
                fontSize: "2em",
                textAlign: "left",
              }}
            >
              <span>Let's work!</span>
            </h1>
            <h1
              style={{
                fontFamily: fonts.regular as fonts,
                marginBottom: "50px",
                textAlign: "left",
              }}
            >
              Would love to hear from you 👋🏾
              <br />
            </h1>
          </header>

          <form onSubmit={(e) => {
            handleSubmit({ setSuccess, setErrors, e });
            
            }}>
            <div className={_2.formSection}>
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

            <div className={_2.formSection}>
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

            <div className={_2.formSection}>
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

            <div className={_2.formSection}>
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
        </div>
      )}
    </Page>
  );
};

export default ContactMobile;
