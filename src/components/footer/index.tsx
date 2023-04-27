import Button from "@components/button";
import Icon from "@components/icon";
import { colors } from "@constants/colors";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2em",
        height: "100vh",
      }}
    >
      <div>
        <h1>Let's explore some ideas.<br/> Get in touch today!</h1>
        <Button
          type="icon-button"
          clickHandler={handleClick}
          customStyle={{ display: "flex", alignItems: "center" }}
        >
          <h1 style={{ color: colors.accent, fontSize: "2em", }}>
            Contact
          </h1>
          <Icon
          customStyle={{marginLeft: "15px"}}
            name="chevron-right"
            size={35}
            alt="Move to the previous project"
          />
        </Button>
      </div>
    </section>
  );
};

export default Footer;
