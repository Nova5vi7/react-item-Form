const isValidVerificationPassword = (verificationPasswordValue) => {
  return Boolean(
    !verificationPasswordValue.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    )
  );
};

export default isValidVerificationPassword;
