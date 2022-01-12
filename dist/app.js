"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = __importDefault(require("./class"));
const enums_1 = require("./enums/enums");
const functions_1 = __importDefault(require("./functions"));
function myFunc(props) {
    return props;
}
myFunc({ name: "Leo", age: 24 });
function myFuncTwo(props) {
    return __awaiter(this, void 0, void 0, function* () {
        return props;
    });
}
myFuncTwo({
    name: "leo",
    age: 24,
    job: "driver",
});
console.log(Object.values(enums_1.MyEnumOne));
(0, functions_1.default)("leo", "js", "react");
const user = new class_1.default("leo", 23);
console.log(user);
