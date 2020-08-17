const isValidEmail = (emailValue) => {
  return !emailValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{4,})$/i)
    ? false
    : true;
};

export default isValidEmail;
