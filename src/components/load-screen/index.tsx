import "./load-screen.css";

const LoadScreen = () => {
  const styling = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    flexDirection: "column" as const,
  };

  return (
    <div style={styling}>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadScreen;
