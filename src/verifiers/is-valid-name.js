const isValidName = (nameValue) => {
  return !nameValue.match(/^[a-z]{3,9}$/) ? false : true;
};

export default isValidName;
