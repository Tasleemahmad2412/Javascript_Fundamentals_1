//Type conversion and type coersion
// (CONVERSION) when we manually convert from one type to another
// (COERSION) when javascript automatically converts from one type to another
//==============================================================================

//type CONVERSION
const inputYear = "1991";
//it will concatinate it as a string and not as a number
console.log(inputYear + 18);
//to convert it to a number we use Number()
//now it will add 18 to the number
console.log(Number(inputYear) + 18);
//will show NaN which means invalid number!!!
console.log(Number("Jhonas"));
//to convert the number to string we use String() function
console.log(String(23), 23);
//Js can only convert 2-3 types
//we can convert to a number, to a string and to a boolean
//we cannot convert something to undefined or null

//==================================================================================
//TYPE COERSION
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
// Answer of above is 10
console.log("23" * "2");
console.log("23" > "18");

let n = "1" + 1;
n = n - 1;
console.log(n);

//============================================================================================
//Booleans truthy and falsy values
//============================================================================================

//falsy values are not actually fasle but will become false when we try to covert it to boolean
//in Js there are only 5 falsy values: (0, '', undefined, null, NaN)
//eveything else will be truthy values, values that will be converted to truth
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("String"));
console.log(Boolean({}));
console.log(Boolean(""));

//in practice the conversion of boolean is always implicit not explicit
const money = 0;
if (money) {
  console.log("Don't spend it all ");
} else {
  console.log("you should get a job");
}
