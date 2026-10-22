const myarray = [23, 56, 77, 89, 90, 45, 67, 99];
function getindex(index) {
  console.log("InsideIndex:-");
  return myarray[index];
}
console.log("7 : -", myarray[6]);

// !!0 log n

function dividebytwo(input) {
  while (input > 1) {
    input = Math.floor(input / 2);
    console.log("divideBytwo", input);
  }
}
dividebytwo(100);

// ! Square root n
function isprime(inputprime) {
  if (inputprime <= 1) {
    return false;
  }
  let count = 1;
  for (let i = 2; i * i <= inputprime; i++) {
    console.log("isprime :- ",i)
    if (inputprime % i === 0) {
      return false;
    }
  }
  return true;
}
isprime(97);