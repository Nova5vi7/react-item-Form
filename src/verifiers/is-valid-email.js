const isValidEmail = (emailValue) => {
  return Boolean(
    !emailValue.match(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{4,})$/i
    )
  );
};

export default isValidEmail;
