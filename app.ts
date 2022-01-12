import User from "./class";
import { MyEnumOne } from "./enums/enums";
import createSkills from "./functions";
import {
  MyFuncPropInterface,
  MyFuncTwoPropInterface,
} from "./interfaces/interfaces";
import { MyFuncType } from "./types/types";

function myFunc(props: MyFuncPropInterface): MyFuncPropInterface {
  return props;
}

myFunc({ name: "Leo", age: 24 });

async function myFuncTwo(props: MyFuncType): Promise<MyFuncType> {
  return props;
}

myFuncTwo({
  name: "leo",
  age: 24,
  job: "driver",
});

console.log(Object.values(MyEnumOne));

createSkills("leo", "js", "react");

const user = new User("leo", 23);

console.log(user);
