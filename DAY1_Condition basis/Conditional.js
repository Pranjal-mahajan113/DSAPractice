let amount = 4823;
if (amount >= 500) {
  console.log("500rs notes :- " + Math.floor(amount / 500));
  amount = amount % 500;
}
if (amount >= 200) {
  console.log("200rs notes :- " + Math.floor(amount / 200));
  amount = amount % 200;
}
if (amount >= 100) {
  console.log("100rs notes :- " + Math.floor(amount / 100));
  amount = amount % 100;
}
if (amount >= 50) {
  console.log("50rs notes :- " + Math.floor(amount / 50));
  amount = amount % 50;
}
if (amount >= 20) {
  console.log("20rs Notes :- " + Math.floor(amount / 20));
  amount = amount % 20;
}
if (amount >= 10) {
  console.log("10rs Notes :- " + Math.floor(amount / 10));
  amount = amount % 10;
}

if (amount >= 2) {
  console.log("2 notes :- " + Math.floor(amount / 5));
  amount = amount % 2;
}

