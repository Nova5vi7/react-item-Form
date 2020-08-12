const isValidVerificationPassword = (
  verificationPasswordValue,
  setVerificationPasswordError
) => {
  if (
    !verificationPasswordValue.match(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}/g
    )
  ) {
    setVerificationPasswordError(true);
  } else if (verificationPasswordValue === "") {
    setVerificationPasswordError(false);
  } else {
    setVerificationPasswordError(false);
  }

  return true;
};

export default isValidVerificationPassword;
