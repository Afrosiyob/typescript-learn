import React from "react";

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

  const array:[any] = [45];
   
  console.log(array);

  console.log(user);


const getter = <T extends unknown>(data: T):T => data

console.log(getter("w").length);


  
const addToArray = (event:React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target?.value);
}

  return (
    <div className="App">
      <input type="text" onChange={addToArray} />
    </div>
  );
}

export default App;
