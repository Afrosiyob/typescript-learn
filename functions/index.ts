import { CreatePasswordInterface } from "../interfaces/interfaces";

function createPassword(
  password: string | number = "PSW",
  key: string = "KEY"
): string {
  return `${password} ${key}`;
}

createPassword();

export default function createSkills(name: string, ...skills: string[]): void {
  console.log(name, skills.join());
}
