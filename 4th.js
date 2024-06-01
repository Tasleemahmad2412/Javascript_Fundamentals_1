// equality operators
const age = 18;
if (age === 18) console.log("You jjust became an Adult (strict)");
if (age == "18") console.log("You jjust became an Adult (loose)");

// the triple equal is called the strict equality opertator bcoz ot does not perform type coersion (===)
// loose equality opertaor is a (==) does type coersion e.g '18' == 18 this will be true in case of loose equality
//in comparison always use strict equality

//================================================================================================================
//boolean logic &&, ||, !

//================================================================================================================
// Ternary operator
//================================================================================================================

const Age = 23;
age >= 18
  ? console.log("i like to have a cigerette")
  : cosnole.log("I like to drink juice");

const drink = age >= 18 ? "wine" : "juice";
console.log(drink);
console.log(`=> I like to drink ${age >= 18 ? "wine!!!" : "juice!!!"}`);
//============================================================================================
//======================================THE END===============================================
//============================================================================================
