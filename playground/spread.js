// function add(a, b) {
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
//
// console.log(add(...toAdd))

//
// var groupA = ['Sotiris','Giorgos'];
// var groupB = ['Alexis', 'Tasos'];
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet(name, age) {
  return `hello ${name}, your age is ${age}`;
}

console.log(greet(...person));
console.log(greet(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Sotiris',...names];

for(var i =0; i < final.length; i++) {
  console.log('hi '+final[i]);
}
