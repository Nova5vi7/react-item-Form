const isValidPassword = (passwordValue) => {
  return Boolean(
    !passwordValue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
  );
};

export default isValidPassword;
