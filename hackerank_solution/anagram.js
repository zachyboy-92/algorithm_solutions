// SOLUTION 1
// const anagram = (value1, value2) => {
//   //Check if value1 length is equal to value2 length
//   if (value1.length !== value2.length) {
//     return false;
//   }

//   let valueOneApperance = {};
//   let valueTwoApperance = {};
//   //Loop through the string
//   //Check if letter exists increment, otherwise set to 1
//   for (let i = 0; i <= value1.length; i++) {
//     valueOneApperance[value1[i]] = (valueOneApperance[value1[i]] || 0) + 1;
//   }

//   for (let i = 0; i <= value2.length; i++) {
//     valueTwoApperance[value2[i]] = (valueTwoApperance[value2[i]] || 0) + 1;
//   }

//   for (let key in valueOneApperance) {
//     if (!(key in valueTwoApperance)) {
//       return false;
//     }
//     if (valueOneApperance[key] !== valueTwoApperance[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(anagram("azz", "zza"));

// SOLUTION 2
const validAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  let lookUp = {};
  for (let i = 0; i < first.length; i++) {
    lookUp[first[i]] ? (lookUp[first[i]] += 1) : (lookUp[first[i]] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookUp[letter]) {
      return false;
    } else {
      lookUp[letter] -= 1;
    }
  }
  return true;
};

console.log(validAnagram("anagram", "nagaram"));
