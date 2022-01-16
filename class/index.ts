export default class User {
  public name: string;
  public age: number;

  public login: string | undefined;

  constructor(name: string, age: number, login?: string) {
    this.name = name;
    this.age = age;
    this.login = login;
  }
}
