import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Links from "./Links";
import isValidEmail from "../verifiers/is-valid-email";
import isValidPassword from "../verifiers/is-valid-password";

function LogInForm({ moveToForgot }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="forms-sing-up" onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="E-mail"
        value={emailValue}
        setValue={setEmailValue}
        className="email"
        valid={isValidEmail}
      />

      <Input
        type="password"
        placeholder="Password"
        value={passwordValue}
        setValue={setPasswordValue}
        className="password"
        valid={isValidPassword}
      />

      <Links
        className="links-wrap"
        handleClick={moveToForgot}
        linkText="Forgot yout password?"
      />

      <Button className="btn-sing-in">Sign In</Button>
    </form>
  );
}

export default LogInForm;
