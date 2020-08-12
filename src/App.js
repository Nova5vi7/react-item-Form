import React, { useState } from "react";
import "./styles/app-two.scss";
import Container from "./components/Container";
import ForgotPassForm from "./components/Forgot-password-form";
import LogInForm from "./components/Login-form";
import SignUpForm from "./components/Signup-form";
import Links from "./components/Links";
import { SIGNUP_FORM, LOGIN_FORM, FORGOTPAS_FORM } from "./constans/common";

function App() {
  const [currentForm, setCurrentForm] = useState(LOGIN_FORM);

  const handlFormChenge = (formType) => {
    setCurrentForm(formType);
  };

  return (
    <div className="App">
      {currentForm === FORGOTPAS_FORM ? (
        <Container title="Forgot your password?">
          <ForgotPassForm />
          <Links
            handleClick={() => handlFormChenge(SIGNUP_FORM)}
            text="New here?"
            linkText="Sing up"
            className="links-forgot-pass"
          />
        </Container>
      ) : currentForm === LOGIN_FORM ? (
        <Container title="Hello there, welcome back">
          <LogInForm moveToForgot={() => handlFormChenge(FORGOTPAS_FORM)} />
          <Links
            handleClick={() => handlFormChenge(SIGNUP_FORM)}
            text="New here?"
            linkText="Sing up"
            className="links-sign"
          />
        </Container>
      ) : (
        <Container title="Get on board">
          <SignUpForm />
          <Links
            handleClick={() => handlFormChenge(LOGIN_FORM)}
            text="Already have an account?"
            linkText="Sing in"
            className="links-log"
          />
        </Container>
      )}
    </div>
  );
}

export default App;
