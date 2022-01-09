"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPassword(password = "PSW", key = "KEY") {
    return `${password} ${key}`;
}
createPassword();
function createSkills(name, ...skills) {
    console.log(name, skills);
}
exports.default = createSkills;
