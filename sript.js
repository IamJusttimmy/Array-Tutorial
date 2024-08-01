"use strict";

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

*/

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
