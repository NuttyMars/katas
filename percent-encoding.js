const urlEncode = function(text) {
  let letters = text.split('');
  if (letters[0] === ' ' && letters[text.length - 1] === ' ') {
    letters.shift();
    letters.pop();
  }
  else if (letters[0] === ' ') {
    letters.shift();
  }
  else if (letters[text.length - 1] === ' ') {
    letters.pop();
  }
  for (let i = 0; i < letters.length; i++) {
    if(letters[i] === ' ') {
      letters[i] = '%20';
    }
  }
  return letters.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));