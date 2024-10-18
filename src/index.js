module.exports = function check(str, bracketsConfig) {
  let closeQueue = '';
  let isCorrectBracket = false;

  for (let char of str) {
    isCorrectBracket = false;
    if (char === closeQueue[0]) {
      closeQueue = closeQueue.slice(1);
      isCorrectBracket = true;
    } else {
      for (let bracketsPair of bracketsConfig) {
        if (char === bracketsPair[0]) {
          closeQueue = bracketsPair[1] + closeQueue;
          isCorrectBracket = true
        } 
      }
    }

    if (!isCorrectBracket) {
      return false;
    }
  }

  return closeQueue === '';
}