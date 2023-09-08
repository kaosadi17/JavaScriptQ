// concatenate two arrays

const concatArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
}

const arr1 = [2,3];
const arr2 = [4,5];

console.log(concatArrays(arr1,arr2));
console.log(arr1)
console.log(arr2)
