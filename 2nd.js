console.log("==== Hello This is my second notes file for Js ====");
console.log("+++ Disisional Statements +++");

console.log("====================================================");
const age = 11;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("You are eligible 😂😂😁!!!");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `you are ${age} years old , wait for ${yearsLeft} years to apply for driving license.`
  );
}
console.log("====================================================");
console.log("+++++++++++ Coding Challenge 2 +++++++++++");
const massMark = 78;
const markHeight = 1.69;
const massJohn = 92;
const johnHeight = 1.95;

const BMImark = massMark / markHeight ** 2;
const BMIjohn = massJohn / (johnHeight * johnHeight);

if (BMImark > BMIjohn) {
  console.log(`Mark BMI (${BMImark}) is higher than john (${BMIjohn})`);
} else {
  console.log(`John BMI ${BMIjohn} is higher than mark (${BMImark})`);
}
console.log("====================================================");
console.log("+++++++++++ Type Conversion and Coercion +++++++++++");

//Type conversion (When we manually convert one type to another type)
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // this will convert the string to number
console.log(Number(inputYear) + 18); // this will not add it will concatinate
