const instructorWithLongestName = function(instructors) {
  let names = [];
  instructors.forEach(function(instructor) {
    names.push(instructor.name);
  });
  let arrayOfLetterNumbers = [];
  for (let i = 0; i < names.length; i++) {
    let counter = 0;
    for (let j= 0; j < names[i].length; j++) {
      counter++;
    }
    arrayOfLetterNumbers.push(counter);
  };
  let max = arrayOfLetterNumbers[0];
  let index = 0;
  arrayOfLetterNumbers.forEach(function(number) {
    if (max < number) {
      max = number;
      index = arrayOfLetterNumbers.indexOf(number);
    }
  });
  return instructors[index];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));