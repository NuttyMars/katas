const camelCase = function(input) {
  let splitString = input.split(' '); //splitting the original string into an array for looping
  let capitalizedString = ''; //will be obtained by capitalizing the first letter of every string except the first one
  let camelCasedString = ''; //resulting string that will be returned by function
  for (let i = 1; i < splitString.length; i++) {
    let splitInnerStrings = splitString[i].split(''); //splitting each string further in order to capitalize only first letter
    splitInnerStrings.splice(0, 1, splitInnerStrings[0].toUpperCase()); //replacing with capital letter
    capitalizedString = splitInnerStrings.join(''); //reversing the split
    splitString.splice(i, 1, capitalizedString); //replacing the capitalized string
  }
  camelCasedString = splitString.join(''); //reversing the split
  return camelCasedString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));