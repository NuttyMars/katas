const checkAir = function (samples, threshold) {
  let dirtySamples = 0;
  samples.forEach(function(sample) {
    if (sample === 'dirty') {
      dirtySamples += 1;
    }
  });
  let pollutionPercent = (dirtySamples * 100) / samples.length;
  if ((pollutionPercent / 100) > threshold) {
    return 'Polluted';
  }
  else {
    return 'Clean';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))