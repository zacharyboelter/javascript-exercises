const ftoc = function(f) {
  // toFixed returns string, parseFloat for decimal point
  let answerF = ((f - 32) * 5/9).toFixed(1)
  return parseFloat(answerF)
};

const ctof = function(c) {
  let answerC = (c * 9/5 + 32).toFixed(1)
  return parseFloat(answerC)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};



// multiply by 1.8 (or 9/5) and add 32.
// subtract 32 and multiply by .5556