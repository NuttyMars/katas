const numberOfVowels = function(data) {
  let counter = 0;
  let stringToArray = data.toLowerCase().split(''); //converted to lower case in case the string contains different types
  stringToArray.forEach (function(letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      counter += 1;
    }
  })
  return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));