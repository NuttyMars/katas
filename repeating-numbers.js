const repeatNumbers = function(data) {
  let arrayOfConcatenatedStrings = [];
  data.forEach(function(array) {
    let convertedToString = array.toString().split(',');
    let concatenatedString = '';
    for (let i = 0; i < array[1]; i++) {
      concatenatedString = concatenatedString + convertedToString[0];
    }
    arrayOfConcatenatedStrings.push(concatenatedString);
  });
  
  return arrayOfConcatenatedStrings.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));