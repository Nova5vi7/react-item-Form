import React from "react";
import "./App-two.scss";
import Title from "./Title";
import FormsSingUp from "./Forms-sing-up";
import FormsLogIn from "./Forms-log-in";
import Links from "./Links";

function Container({ handle, title, linksText, link, singnUp }) {
  return (
    <div>
      <Title>{title}</Title>
      {singnUp ? <FormsSingUp /> : <FormsLogIn />}
      <div>
        <Links handle={handle} text={linksText}>
          {link}
        </Links>
      </div>
    </div>
  );
}

export default Container;
