import React, { useState } from "react";
import "./App-two.scss";
import Container from "./Container";

function App() {
  const [singnUp, setSingnUp] = useState(true);

  const singnUpHandle = () => {
    setSingnUp(true);
  };

  const logInHandle = () => {
    setSingnUp(false);
  };

  return (
    <div className="App">
      {singnUp ? (
        <Container
          handle={logInHandle}
          title="Hello there, welcome back"
          linksText="New here?"
          link="Singn up"
          singnUp={singnUp}
        />
      ) : (
        <Container
          handle={singnUpHandle}
          title="Get on board"
          linksText="Already have an account?"
          link="Singn in"
          singnUp={singnUp}
        />
      )}
    </div>
  );
}

export default App;
