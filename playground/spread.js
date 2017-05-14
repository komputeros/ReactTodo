// function add(a, b) {
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
//
// var final = [...groupA, ...groupB];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function show(name, age) {
  console.log("Hello " + name + " you are " + age + " old");
}

show(...person);


var names = ['Mike', 'Ben'];
var final = ['robert', ...names];

final.forEach((el) => {
  console.log("Hello: " + el);
});
