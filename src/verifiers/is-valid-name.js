const isValidName = (nameValue, setNameError) => {
  if (!nameValue.match(/^[a-z]{3,9}$/)) {
    setNameError(true);
  } else if (nameValue === "") {
    setNameError(false);
  } else {
    setNameError(false);
  }

  return true;
};

export default isValidName;
