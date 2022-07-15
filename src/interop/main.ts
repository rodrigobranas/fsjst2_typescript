import { translate } from "./Translator";
import { Headphone } from "./Headphone";

console.log(translate("Hi"));
console.log(translate("10"));
console.log(translate("true"));
console.log(translate("How are you?"));

const headphone = new Headphone("Sony", "USB-C", 499);
console.log(headphone);