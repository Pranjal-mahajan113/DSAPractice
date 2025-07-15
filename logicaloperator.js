


//  1. AND (&&) – "Both conditions must be true"

// condition1 && condition2--->>>>



console.log(10>9 && 10<11);


//  2 . OR (||) – "At least one condition must be true"
// ✅ Syntax:

console.log(12>24 || 123<34);


//post increment
// let a = 10;
// let b = a++;
// console.log(a);
// console.log(b);

//preincrement
let a = 10;
let b = ++a;
console.log(a);
console.log(b);

let i = 11;
i = i++ + ++i;
console.log(i);

// ✅ Example 1: Post-increment
let i1 = 5;
let result1 = i1++ + i1++;
// i1++ → use 5, then i1 becomes 6
// i1++ → use 6, then i1 becomes 7
// result1 = 5 + 6 = 11
console.log("Example 1:");
console.log("result1 =", result1); // 11
console.log("i1 =", i1); 

// ✅ Example 2: Pre-increment
let i2 = 3;
let result2 = ++i2 + ++i2;
// ++i2 → i2 becomes 4, use 4
// ++i2 → i2 becomes 5, use 5
// result2 = 4 + 5 = 9
console.log("Example 2:");
console.log("result2 =", result2); // 9
console.log("i2 =", i2);      


// ✅ Example 3: Mix of post & pre increment
let i3 = 2;
let result3 = i3++ + ++i3 + i3;
// i3++ → use 2, then i3 = 3
// ++i3 → becomes 4, use 4
// i3 = 4, so use 4
// result3 = 2 + 4 + 4 = 10
console.log("Example 3:");
console.log("result3 =", result3); // 10
console.log("i3 =", i3); 