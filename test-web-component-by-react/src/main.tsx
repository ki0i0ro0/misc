import React from "react";
import { render } from "react-dom";
const HelloWorld = ({ name }: { name: string }) => {
  return <h1>Hello World {name}</h1>;
};

class HelloWorldElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const name = this.getAttribute("name") || "";
    render(<HelloWorld name={name} />, this.shadowRoot);
  }
}

customElements.define("web-greeting", HelloWorldElement);
