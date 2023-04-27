type HandleChevronClick = {
  motion: "left" | "right";
  index: number;
  setIndex: Function;
  setDisabled: Function;
  dataLength: number;
};
export const handleChevronClick = async (props: HandleChevronClick) => {
  const { setDisabled, setIndex, index, dataLength, motion } = props;
  setDisabled(true);

  if (motion === "left") {
    if (index > 0) {
      setIndex((curr: any) => curr - 1);
    }
  }

  if (motion === "right") {
    if (index < dataLength - 1) {
      setIndex((curr: any) => curr + 1);
    }
  }

  setDisabled(false);
};
