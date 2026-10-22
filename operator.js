//operator use trick
let e = 12345;
console.log(Math.floor(e/10));
console.log(e%10);

//>,<,<=,>= !=
console.log(10>30);
console.log(10!=10)

// ==,=== diffence
//  data types but similar values
let num = 5;           // Number type
let str = '5';         // String type
let bool = true;       // Boolean type

// Using ==  - it performs type conversion
console.log("== Comparison Results:");
console.log(num == str);   // true because '5' is converted to 5 before comparison
console.log(bool == 1);    // true because true is converted to 1
console.log(null == undefined); // true (special case in JS)

// Using === - no type conversion
console.log("=== Comparison Results:");
console.log(num === str);  // false because number !== string
console.log(bool === 1);   // false because boolean !== number
console.log(null === undefined); // false because null !== undefined

// both value and type are same
let a = 10;
let b = 10;
console.log("Same type and value:");
console.log(a == b);    // true
console.log(a === b);   // true

// bool
console.log("bool values:-");
console.log(0 == false);    // true because false is converted to 0
console.log(0 === false);   // false because number !== boolean

console.log('' == false);   // true because '' is converted to 0, and false to 0
console.log('' === false);  // false because string !== boolean


