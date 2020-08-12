const isValidEmail = (emailValue, setEmailError) => {
  if (!emailValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    setEmailError(true);
  } else if (emailValue === "") {
    setEmailError(false);
  } else {
    setEmailError(false);
  }

  return true;
};

export default isValidEmail;
