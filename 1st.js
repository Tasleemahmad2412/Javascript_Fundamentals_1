//Javascrpt tutorial 1 material

console.log("Hello, World");
let js = "amazing";
console.log(js);
console.log(40 + 34 - 12 + 1);
console.log("hello");

let firstName = "Tasleem";
console.log(firstName);

let person = "mike";
console.log(person);

let PI = 3.1415;

let myFirstJob = "Student";
let myCurrentJob = "Programmer";

let javaScript = true;
console.log(javaScript);
javaScript = false;
console.log(javaScript);

console.log(typeof true);
console.log(typeof "Programmer");
console.log(typeof 23);

console.log("====================================");
let blah;
console.log(typeof blah);
blah = javaScript;
console.log(typeof blah);
console.log(blah);

console.log("====================================");
const year = 1991;
//year = 12;
console.log(year);
console.log("====================================");
// 2 power 3
console.log(2 ** 3);
console.log("====================================");

let Ali = 90;
let maleeha = 89;

console.log(Ali > maleeha);
console.log("====================================");
console.log("===Strings and Template Literals===");

const ffirstName = "Tasleem";
const job = "Programmer";
const birthYear = 2003;
const Year = 2023;

const tasleem =
  "I'm  " + firstName + ", a " + (Year - birthYear) + " years old " + job + "!";
console.log(tasleem);
// now template literals
const tasnew = `I'm ${ffirstName}, a ${Year - birthYear} years old ${job} !`;
console.log(tasnew);

//we can also use back ticks to write all strings not only template literals
console.log(`Just a regular string...`);

//another great usecase of template literals is to write multi line strings
console.log(
  "String with \n\
multiple \n\
lines"
);
console.log("====================================");
// doing above with template literals
console.log(`String with
multiple 
lines 
using template literals`);
