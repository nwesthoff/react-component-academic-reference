import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  citation,
  References,
  REFERENCE_STYLES
} from "react-component-academic-reference";

const myReferences = [];
const Cite = citation(myReferences);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            A simple create-react-app that demonstrates my Academic References
            component
          </h1>
        </header>
        <p className="App-intro">
          Here is a load of text, with some citations{" "}
          <Cite identifier="fakeNews" />. Citations are proven to increase the
          likelihood that people believe the stuff you're spouting{" "}
          <Cite identifier="moreFakeNews" />.
          <br />
          <br />
          Daily Mail, take note 😆
        </p>
      </div>
    );
  }
}

export default App;
