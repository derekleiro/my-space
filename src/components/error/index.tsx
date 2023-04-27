import Button from "@components/button";
import { fonts } from "@constants/types";

const Error = (props: {
  btnName: string;
  clickHandler: Function;
  type: "404" | "500";
}) => {
  const { btnName, clickHandler, type } = props;

  const styling = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    flexDirection: "column" as const,
  };

  switch (type) {
    case "404":
      return (
        <div style={styling}>
          <h1 style={{ fontFamily: fonts.bold }}>404</h1>
          <h1 style={{ fontSize: "2em" }}>
            Looks like that page doesn't exist 🤷🏾‍♂️.<br/> Let's go home instead! 😃
          </h1>
          <Button type="alternate" name={btnName} clickHandler={clickHandler} />
        </div>
      );
    default:
      return (
        <div style={styling}>
          <h1 style={{ fontSize: "2em" }}>
            Whoops!, Just tying up some lose ends on the backend. It will be up
            and running in no time!
          </h1>
          <Button type="alternate" name={btnName} clickHandler={clickHandler} />
        </div>
      );
  }
};

export default Error;
