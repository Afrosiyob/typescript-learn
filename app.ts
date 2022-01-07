import {
  MyFuncPropInterface,
  MyFuncTwoPropInterface,
} from "./interfaces/interfaces";

function myFunc(props: MyFuncPropInterface): MyFuncPropInterface {
  return props;
}

myFunc({ name: "Leo", age: 24 });

async function myFuncTwo(
  props: MyFuncTwoPropInterface
): Promise<MyFuncTwoPropInterface> {
  return props;
}

myFuncTwo({
  name: "leo",
  age: 24,
  job: "driver",
});
