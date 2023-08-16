//hoisting questions

console.log(foo);
foo = 1;

//error : foo is not defined

console.log(foo);
var foo=1;

//undefined

var foo;
foo=3;
console.log(foo)

//3
