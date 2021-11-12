// SOLUTION 1
const countUniqueValues = (array) => {
  // add whatever parameters you deem necessary - good luck!
  let uniqueArray = new Set([...array]);
  return [...uniqueArray].length;
};

// console.log(countUniqueValues([1, 2, 1, 1, 3, 2, 4, 3, 5, 6, 5]));

// SOLUTION 2
// const countUniqueValues = (array) => {
//   let sortedArray = array.sort((a, b) => a - b);
//   if (sortedArray.length === 0) return 0;
//   let j = 0;
//   for (let i = 1; i < sortedArray.length; i++) {
//     if (sortedArray[i] !== sortedArray[j]) {
//       console.log(j);
//       j++;
//       sortedArray[i] = sortedArray[j];
//     }
//   }
//   return j + 1;
// };

console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]));
// console.log(countUniqueValues([1, 1, 1, 3]));
