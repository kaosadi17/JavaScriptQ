// find user name exist in user object

const user = [
  {
    name: 'John',
    age: 30
  },
  {
    name: 'Mari',
    age: 24
  }
];

const existName1 = (name,arr) => arr.some(el => el.name === name);

const existName2 = (name, arr) => {
  const index = arr.findIndex(el => el.name === name);
  return index >= 0;
}

console.log(existName1('John',user));
console.log(existName2('John',user));
console.log(existName1('Johni',user));
console.log(existName2('Johni',user));
