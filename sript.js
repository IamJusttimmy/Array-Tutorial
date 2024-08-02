'use strict';

/*

/////////////////////////////
// Simple Array Methods

let arr = ["a", "b", "c", "d", "e"];

//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));

//SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //another way

//JOIN
console.log(letters.join("-"));


//////////////////////
// AT method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//Traditional way of getting the last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
//Using at method
console.log(arr.at(-1));


//////////////////////
// Looping Array Using For Each

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Using the normal for loop
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movemrnt ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log("----FOR EACH----");
//Using the for each method
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});
//0: function(200)
//1: function(450)
//2: function(400)
// ...

*/

/////////////////////////////
// For each with maps and sets

//For Map
const currencies = new Map([
  ['USD', 'United State dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//For Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${_}: ${value}`);
});
