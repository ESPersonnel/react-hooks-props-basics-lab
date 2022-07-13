import React from "react";
import user from "../data/user";
import Links from "./Links";

function About(props) {
  if (!props.isPublished) {
    return null;
  } else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{user.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links />
      </div>
    );
  }
}


export default About;