const isValidName = (nameValue) => {
  return Boolean(
    !nameValue.match(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)
  );
};

export default isValidName;
