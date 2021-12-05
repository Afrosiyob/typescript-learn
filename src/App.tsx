import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { e_links } from "./enums/enums";
import { UserType } from "./types/types";

console.log(e_links.telegram);

function App() {
  const createUser = (name?: string, age?: string | number) => {
    console.log(name, age);
  };

  createUser("leo", 24);

  const createSkills = (name: string, ...skills: Array<string>) => {
    console.log(name, skills);
  };

  createSkills("leo", "js", "html", "css");

  let user: UserType = {
    name: "leo",
    age: 23,
  };

  console.log(user);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
