// write a function for multiply(a)(b)

const multiply = (num1) => {
  return (num2) => {
    return num1 * num2;
  }
}

const multiply1 = num1 => num2 => num1 * num2;

console.log(multiply(2)(3));
console.log(multiply1(2)(3));
