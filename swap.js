let a = 10;
let b = 20;
let c;

c = a;    // c = 10, a = 10
a = b;    // a = 20
b = c;    // b = 10

console.log(a, b);
// console.log(b);
// console.log(c);

// 2 .swap number 2nd method -->Without extra varible

let A = 20;
let B = 10;

A = A + B;  // A = 30
B = A - B;  // B = 30 - 10 = 20
A = A - B;  // A = 30 - 20 = 10

console.log(A, B);  // Output: 10 20

// 3. destructuring swap
let C = 10, d = 20;
[C, d] = [d, C];
console.log(C, d); // 20 10


//operator use trick
let e = 12345;
console.log(Math.floor(e/10));
console.log(e%10);

