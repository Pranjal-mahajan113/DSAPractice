let name = "Pranjal";
console.log(name);

//Arrays
let myName = ["Pranjal", "Mahajan", "Shobha"];
console.log(myName);

let firstname = {
  name: "po",
  city: "mumbai",
  country: "india",
};
console.log(firstname);

// !Object

let students = [
  { id: 1, name: "Pranjal", age: 21, course: "BCA" },
  { id: 2, name: "Riya", age: 22, course: "MCA" },
  { id: 3, name: "Aman", age: 20, course: "B.Tech" },
];

console.log(students);

students.forEach((s) => console.log(s.course));
let result = students.map((s) => s.course);
console.log(result);

// !Using The array constructor

let arrayConstructor = new Array();
arrayConstructor[0] = "Hello!";
arrayConstructor[1] = "Pranjal";
console.log(arrayConstructor);

let arrayConstructor2 = new Array(11, 12, 34, 56);
console.log(arrayConstructor2);

// ! Array fill
let filledArray = new Array(5).fill(0).fill(3, 2, 4);
console.log(filledArray);

// !Array Of
let Arrayof = Array.of("of", "in", "out", "except");
console.log(Arrayof);

// !Spread operator

let ofArrayplus = ["plus", ...Arrayof];
console.log(ofArrayplus);

// ! Destructing Array
let fruits = ["Apple", "banana", "Chickoo"];
let [fruit11, fruit12, fruit13] = fruits;
console.log(fruit11, fruit12, fruit13);

//! Arrayform
let arrayform = Array.from("Hello");
console.log(arrayform);

//!for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("for loop :- ", fruits[i]);
}
// !forof
for (let fruit of fruits) {
  console.log("for of :- ", fruit);
}
// ! foreach
fruits.forEach((fruit) => console.log("for each :- ", fruit));

// push
fruits.push("grapes"); // add lat element
console.log(fruits);

// pop
let result2 = fruits.pop(); //remove grapes
console.log("last elemet : - ", result2);
console.log("Fruits after pop", fruits);

//shift
let result3 = fruits.shift();
console.log("remove first : -", result3);
console.log(fruits);

let result4 = fruits.unshift("lichi");
console.log("Add first :- ", result4);
console.log(fruits);
console.log(result4);       // 4
console.log(fruits);  

// ! MAp
let num = [2,3,4,5,6];
let square = num.map((nums)=> nums * nums);
console.log(num);
console.log(square);