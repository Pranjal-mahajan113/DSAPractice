


// // let person = {
// //     name: "pranjal",
// //     age: 25,
// // };

// // let arr = ["apple","banana","cherry",person];

// // console.log(arr[1].name);

// //Array - add and remove elements
// // arr.push("orange");
// // console.log(arr);

// //Array add last
// let arr =[1,2,3,4];
// arr.push(5,6);
// console.log(arr);

// arr.pop(6);
// console.log(arr);

// arr.unshift("orange");
// console.log(arr);

// arr.shift("orange");
// console.log(arr);


// loops 
// let fruits = ["banana","apple","cherry","kiwi"];
 
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// let i = 0;

// while(i < fruits.length) {
//     console.log(fruits[i]);
//     i++;
// }

// inbulit loops

// const num = [1,2,3,4,5];
//  const newnum = num.map((item,index,array) =>{
//   return item + 5;
    
// })
// console.log(newnum);

// const sum = num.some((item, index, array) => {
//     return item > 3;
// })

// console.log(sum);

//concat
let num1 = [1, 2, 3];
console.log(num1);
let num2 = [4, 5, 6];
const combined = num1.concat(num2);
console.log(combined);

// num1.splice(2,1,"pranjal");
// num1.fill("i can do id");
num1.reverse();
console.log(num1);

//sort
const unsoerted = [5,3,2,6,4,1,10];
unsoerted.sort();
console.log(unsoerted);

