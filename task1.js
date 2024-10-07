// Function to calculate the sum of all odd numbers in an array
function sumOfOddNumbers(arr) {
  // Filter out the odd numbers from the array
  const oddNumbersArr = arr.filter(num => num % 2 !== 0);

  // Sum the filtered odd numbers using the reduce function
  const oddSum = oddNumbersArr.reduce((sum, num) => sum + num, 0);

  // Return the sum of odd numbers
  return oddSum;
}

// Example:
const numbers = [1, 2, 3, 4, 5, 6, 7, -9];
console.log(sumOfOddNumbers(numbers));
