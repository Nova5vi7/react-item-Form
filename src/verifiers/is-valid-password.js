const isValidPassword = (passwordValue, setPasswordError) => {
  if (
    !passwordValue.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}/g)
  ) {
    setPasswordError(true);
  } else if (passwordValue === "") {
    setPasswordError(false);
  } else {
    setPasswordError(false);
  }

  return true;
};

export default isValidPassword;
