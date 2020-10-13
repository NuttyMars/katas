//function that takes in an array and returns the maximum number and the number's index
const getMaxNumber = function(myArray) {
  let max = myArray[0];
  let index = 0;
  for (let i = 1; i < myArray.length; i++) {
    if (max < myArray[i]) {
      max = myArray[i];
      index = i;
    }
  }
  return [max, index];
}

//function that takes in an array, calls the max number function above, splices the initial array and gets a second max, and returns the sum of the two numbers
const sumLargestNumbers = function(data) {
  let initialArray = getMaxNumber(data);
  let initialMax = initialArray[0];
  data.splice(initialArray[1], 1);
  let splicedArray = getMaxNumber(data);
  let splicedMax = splicedArray[0];
  //console.log(`first number: ${initialMax}, second no: ${splicedMax}`);
  return initialMax + splicedMax;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));