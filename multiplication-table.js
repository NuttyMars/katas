const multiplicationTable = function(maxValue) {
  let values = '';
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      values = values + ' ' + (i * j);
      if (j === maxValue) {
        values = values + '\n';
      }
    }
  }
  return values;
}


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));