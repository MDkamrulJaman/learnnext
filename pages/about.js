import React from "react";
import Card from "../components/card";
import Navigator from "../components/Navigator";

function about() {
  return (
    <div>
      <h1>this is about page</h1>
      <Navigator />
  
      <p>
        {" "}
        Components let you split the UI into independent, reusable pieces, and think about each
        piece in isolation. This page provides an introduction to the idea of components. You can
        find a detailed component API reference here. Conceptually, components are like JavaScript
        functions. They accept arbitrary inputs (called “props”) and return React elements
        describing what should appear on the screen. Components let you split the UI into
        independent, reusable pieces, and think about each piece in isolation. This page provides an
        introduction to the idea of components. You can find a detailed component API reference
        here. Conceptually, components are like JavaScript functions. They accept arbitrary inputs
        (called “props”) and return React elements describing what should appear on the screen.
      </p>
    </div>
  );
}

export default about;
