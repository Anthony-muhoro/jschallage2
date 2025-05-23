// challage 1. Sum of Positives

const sumOfPositives = (numbers) => {
  const theSum = numbers.reduce((sum, num) => sum + num);
  console.log(`The sum is : ${theSum}`);
};
sumOfPositives([3, 2, 4, -4]);
sumOfPositives([1, 2, 3, -6, 7]);

// challage 2. Find Maximum Value
const findMax = (numbers) => {
  const Bignum = numbers.reduce((num, index) => {
    if (index > num) {
      return index;
    } else return num;
  });
  console.log(Bignum);
};
findMax([5, 6, 7]);
findMax([-2, -3, -0.1]);

// challage 3. Election winner
function findWinner(candidates) {
  const Maxvote = Math.max(...candidates.map((vote) => vote.votes));
  const winner = candidates.find((item) => item.votes === Maxvote);
  console.log(winner);
}
findWinner([
  { name: "Mary", votes: 530 },
  { name: "Caleb", votes: 235 },
  { name: "dudu", votes: 6995 },
]);
findWinner([
  { name: "Mary", votes: 5530 },
  { name: "Caleb", votes: 2235 },
  { name: "dudu", votes: 95 },
]);
// challege 4:Longest word
const findLongestWord = (words) => {
  const maxLength = Math.max(...words.map((word) => word.length));
  const longestWord = words.find((word) => word.length === maxLength);
  console.log(longestWord);
  return longestWord;
};
findLongestWord(["apple", "banana", "pear", "grapefruit"]);
findLongestWord(["Alex", "Ibrahimovic", "ann", "maryann", "james"]);
// Challenge 5: Count Properties
function countProperties(obj) {
  console.log(Object.keys(obj).length);
  return Object.keys(obj).length;
}
countProperties({ name: "Alice", age: 25, city: "Paris" });
countProperties({ name: "Alice", age: 25, gender: "female", city: "Paris" });
//challege 6: Filter by Length
const findLargest = (words, minLength) => {
  const largestWord = words.filter((word) => word.length >= minLength);
  const result = largestWord.map((word) => word);

  console.log(result);
  return result;
};
findLargest(["Alex", "man", "boys", "manpats", "tim"], 4);
findLargest(["Alex", "man", "boys", "manpats", "tim"], 2);

//challege 7:Sum of Even Numbers
const sumEvenNumbers = (numbers) => {
  const evenNumbers = numbers.filter((nums) => nums % 2 == 0);
  const sum = evenNumbers.reduce((sum, num) => sum + num);

  console.log(sum);
};
sumEvenNumbers([1, 2, 3, 4, 5, 6]);

// challege 8:Difference Between Sum of Even and Odd Numbers
const differenceEvenOdd = (numbers) => {
  const evenNumbers = numbers.filter((nums) => nums % 2 == 0);
  const oddNumbers = numbers.filter((nums) => nums % 2 !== 0);
  const sumEven = evenNumbers.reduce((sum, num) => sum + num);
  const sumOdd = oddNumbers.reduce((sum, num) => sum + num);
  const difference = sumEven - sumOdd;
  console.log(difference);
};
differenceEvenOdd([1, 2, 3, 4, 5, 6]);
// Challenge 9: Count Truthy
function countTruthy(obj) {
  console.log("Truthy count is:", Object.values(obj).filter(Boolean).length);
  return Object.values(obj).filter(Boolean).length;
}
countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null });
countTruthy({ a: 0, b: true });
// challage 10 : Average of Numbers
const average = (numbers) => {
  const allNums = numbers.reduce((num, sum) => (num > 0 ? num + sum : sum), 0);
  if (numbers.length > 0) {
    const t = allNums / numbers.length;
    console.log(t);
    return t;
  } else {
    return 0;
  }
};
average([2, 3, 4, 5, 8, 23]);
average([2, 4, 6, 8]);
average([]);
//ToDO  check why It does not work for the fisrt index in array
// // challage 11: Linear Search
// function linearSearch(numbers,num){
//   const number = numbers.find((number)=>number==num)
//   const index= numbers.indexOf(number)
//   if(index){
//     console.log(index)
//   }
//   else return -1

// }
// linearSearch([3,5,6,7],6)
// linearSearch([3,5,6,7],3)
// linearSearch([2,3,4,5],6)
// challege 11 : Linear Search
function linearSearch(numbers, num) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([3, 5, 6, 7], 6));
console.log(linearSearch([3, 5, 6, 7], 3));
console.log(linearSearch([2, 3, 4, 5], 6));
// challege 12 : Reverse Linear Search

function reverseLinearSearch(arr, value) {
  for (let index = arr.length - 1; index >= 0; index--) {
    if (arr[index] === value) console.log(index);
    return index;
  }
  console.log(-1);
  return -1;
}
// Challenge 13: Linear Search All Indices
const linearSearchAll = (arr, index) => {
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === index) indices.push(i);
  }
  console.log(indices);
  return indices;
};
linearSearchAll([2, 3, 6, 3, 5, 3, 4, 3], 3);

// Challenge 14: Count Occurrences
const countOccurrences = (items) => {
  const counts = {};
  for (const item of items) {
    counts[item] = (counts[item] || 0) + 1;
  }
  console.log(counts);
  return counts;
};
countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]);
countOccurrences(["techno", "iphone", "iphone", "samsung", "iphone", "itel"]);
// Challenge 15: Remove Duplicates
const removeDuplicates = (arr) => {
  const unique = [];
  const seen = new Set();
  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      unique.push(item);
    }
  }
  console.log(unique);
  return unique;
};
removeDuplicates([1, 2, 3, 2, 4, 1, 5]);
removeDuplicates([10, 11, 20, 20, 10, 20, 6]);

// Challenge 16: Most Frequent
const mostFrequent = (arr) => {
  const frequencyMap = {};
  let maxCount = 0;
  let mostFrequentItem = arr[0];

  for (const item of arr) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    if (frequencyMap[item] > maxCount) {
      maxCount = frequencyMap[item];
      mostFrequentItem = item;
    }
  }

  console.log(mostFrequentItem);
  return mostFrequentItem;
};
mostFrequent([1, 2, 2, 3, 3, 3, 4]);
// TODO later try returning the tie
mostFrequent([0, 0, 0, 1, 1, 1]);
