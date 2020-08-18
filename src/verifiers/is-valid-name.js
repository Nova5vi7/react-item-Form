const isValidName = (nameValue) => {
  return Boolean(
    !nameValue.match(
      /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
    )
  );
};

export default isValidName;
