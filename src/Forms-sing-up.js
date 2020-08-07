import React, { useState } from "react";
import "./App-two.scss";
import Input from "./Input";
import Button from "./Button";
import Links from "./Links";

function FormsSingUp() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <form className="forms-sing-up">
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

      <Links>Forgot yout password ?</Links>

      <Button>Sign In</Button>
    </form>
  );
}

export default FormsSingUp;
