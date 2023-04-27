import { validEmail } from "@util/functions";

type HandleSubmitProps = {
  setSuccess: Function;
  setErrors: Function;
  e: any;
};
export const handleSubmit = (props: HandleSubmitProps) => {
  const { e, setSuccess, setErrors } = props;
  e.preventDefault();
  const name = e.target["name"].value as string;
  const email = e.target["email"].value as string;
  const interest = e.target["interest"].value as string;
  const message = e.target["message"].value as string;
  const data = { name, email, interest, message };

  if (validEmail(email)) {
    handleFormSubmit({ data, setSuccess });
  } else {
    setErrors([
      "Invalid email. Make sure your email is in the format name@email.com",
    ]);
  }
};

type HandleFormSubmit = {
  data: {
    name: string;
    email: string;
    interest: string;
    message: string;
  };
  setSuccess: Function;
};
export const handleFormSubmit = (props: HandleFormSubmit) => {
  const { data, setSuccess } = props;
  const { name, email, interest, message } = data;

  // TODO: TO be removed
  setSuccess(true);
  try {
  } catch (err) {
    setSuccess(false);
    console.log(err);
  }
};
