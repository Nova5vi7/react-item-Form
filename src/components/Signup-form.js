import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import isValidEmail from "../verifiers/is-valid-email";
import isValidPassword from "../verifiers/is-valid-password";
import isValidName from "../verifiers/is-valid-name";
import isValidVerificationPass from "../verifiers/is-valid-vafification-password";

function SignUpForm() {
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [verificationPasswordValue, setVerificationPassValue] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [verificationPassError, setVerificationPassError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    isValidEmail(emailValue, setEmailError);
    isValidPassword(passwordValue, setPasswordError);
    isValidName(nameValue, setNameError);
    isValidVerificationPass(
      verificationPasswordValue,
      setVerificationPassError
    );
  };

  return (
    <form className="forms-log-in" onSubmit={handleSubmit}>
      <Input
        type="name"
        placeholder="Name"
        value={nameValue}
        setValue={setNameValue}
        className="name"
        error={nameError}
        setError={setNameError}
        valid={isValidName}
      />

      <Input
        type="email"
        placeholder="E-mail"
        value={emailValue}
        setValue={setEmailValue}
        className="email"
        error={emailError}
        setError={setEmailError}
        valid={isValidEmail}
      />

      <Input
        type="password"
        placeholder="Password"
        value={passwordValue}
        setValue={setPasswordValue}
        className="password-two"
        error={passwordError}
        setError={setPasswordError}
        valid={isValidPassword}
      />

      <Input
        type="password"
        placeholder="Password"
        value={verificationPasswordValue}
        setValue={setVerificationPassValue}
        className="verification-pass"
        error={verificationPassError}
        setError={setVerificationPassError}
        valid={isValidVerificationPass}
      />

      <Button className="btn-sing-up">Sign Up</Button>
    </form>
  );
}

export default SignUpForm;
