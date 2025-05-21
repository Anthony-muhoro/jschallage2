// challage 1. Sum of Positives

const sumOfPositives = (numbers) => {
   const theSum= numbers.reduce((sum, num) => sum + num )
console.log(`The sum is : ${theSum}`)
}
sumOfPositives([3,2,4,-4])
sumOfPositives([1,2,3,-6,7])

// challage 2. Find Maximum Value
const findMax =(numbers) =>{
    const Bignum =  Math.max(...numbers);
    console.log(`The maximun value is: ${Bignum}`)
}
findMax([25,69,1000,21,90,999900,99983,3999993,4995999,6886887676,799799594,999999993333,88484884884,477477474,8848848843,3,4])
findMax([-2,-3,-0.1])

// challage 3. Election winner
function findWinner(candidates){ 
const Maxvote=Math.max(...candidates.map(vote=>vote.votes));
const winner = candidates.find(item=>item.votes ===Maxvote)
console.log(winner)


}
findWinner([
  { name: "Mary", votes: 530 },
  { name: "Caleb", votes: 235 },
  { name: "dudu", votes: 6995 }
]);
findWinner([
  { name: "Mary", votes: 5530 },
  { name: "Caleb", votes: 2235 },
  { name: "dudu", votes: 95 }
]);
// challege 4:Longest word
const findLongestWord =(words)=>{
    
     const maxLength = Math.max(...words.map(word => word.length));
     const longestWord = words.find(word => word.length === maxLength);
  console.log(longestWord);
  
}
findLongestWord(["apple", "banana", "pear", "grapefruit"]);
findLongestWord(["Alex","Ibrahimovic", "ann", "maryann", "james"]);

//challege 7:Sum of Even Numbers
const sumEvenNumbers = (numbers) =>{
    const evenNumbers = numbers.filter((nums)=>nums%2 ==0)
    const sum = evenNumbers.reduce((sum, num) =>  sum + num )
    
    console.log(evenNumbers)
    console.log(sum)
}
sumEvenNumbers([1,2,3,4,5,6])

// challege 8:Difference Between Sum of Even and Odd Numbers
const differenceEvenOdd=(numbers)=>{
    const evenNumbers = numbers.filter((nums)=>nums%2 ==0)
    const oddNumbers = numbers.filter((nums)=>nums%2 !==0)
    const sumEven = evenNumbers.reduce((sum, num) =>  sum + num )
    const sumOdd = oddNumbers.reduce((sum, num) =>  sum + num )
    const difference = (sumEven -sumOdd)
    console.log(difference)
}
differenceEvenOdd([1, 2, 3, 4, 5, 6])
