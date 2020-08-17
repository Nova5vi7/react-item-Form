const isValidVerificationPassword = (verificationPasswordValue) => {
  return !verificationPasswordValue.match(
    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g
  )
    ? false
    : true;
};

export default isValidVerificationPassword;
