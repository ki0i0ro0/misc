import React from "react";
import * as ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";

const Greeting = ({ name }: { name: string }) => {
  return <h1>Hello, {name}</h1>;
};

const WebGreeting = reactToWebComponent(Greeting, React, ReactDOM);

customElements.define("web-greeting", WebGreeting);
