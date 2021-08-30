var removeDuplicates = function (arr) {
  return [...new Set(arr)];
};

console.log(removeDuplicates([1, 1, 2, 2, 4, 6]));
