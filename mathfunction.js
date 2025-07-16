console.log(Math.round(13.444));//11

console.log(Math.round(10.5));//11 Rounds to the nearest integer


console.log(Math.ceil(10.5));//Always rounds up 11

console.log(Math.floor(10.8));//Always rounds down

console.log(Math.trunc(18.98));//Removes decimal (no round)


//Math.pow(base, exponent)
console.log(Math.pow(2,5));//Math.pow(2, 5) = 2 × 2 × 2 × 2 × 2 = 32

console.log(Math.sqrt(121)); // Square root of a number


console.log(Math.cbrt(27)); //Cube root of a number

console.log(Math.abs(-23.90)); // Absolute value (removes minus sign) |-23.90| = 23.9

console.log(Math.max(12,13,14)); //Maximum among given numbers

console.log(Math.min(12,13,14)); //Finds the smallest value

console.log(Math.random()); //Returns a random decimal between 0 and 1
console.log(Math.trunc((Math.random()*9000)+ 1000));

let a = 89.09835;
console.log(a.toFixed(2)); //Rounded to 2 decimal places → 89.10
//.toFixed(n) round
//.toFixed(n) rounds the number to n decimal places and returns a string

let length = 20;
let breath = 30;
console.log(2 * (length +  breath));