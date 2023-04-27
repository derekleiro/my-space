export const sleep = (milliseconds: any) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const validEmail = (email: string): boolean => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export const getViewportWidth = (): number => {
  return document.body.clientWidth;
};
