import React, { useState } from "react";
import "./App-two.scss";
import Input from "./Input";
import Button from "./Button";

function FormsLogIn() {
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [verificationPasswordValue, setVerificationPassValue] = useState("");

  return (
    <form className="forms-log-in">
      <Input
        type="name"
        placeholder="Name"
        value={nameValue}
        setValue={setNameValue}
      />

      <Input
        type="email"
        placeholder="E-mail"
        value={emailValue}
        setValue={setEmailValue}
      />

      <Input
        type="password"
        placeholder="Password"
        value={passwordValue}
        setValue={setPasswordValue}
      />

      <Input
        type="password"
        placeholder="Password"
        value={verificationPasswordValue}
        setValue={setVerificationPassValue}
      />

      <Button>Sign Up</Button>
    </form>
  );
}

export default FormsLogIn;
