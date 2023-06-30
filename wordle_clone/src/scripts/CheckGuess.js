export function checkGuess(guess, answer) {
  const checkArr = new Array(5);
  for (let i = 0; i < 5; i++) {
    // If the letter at position i is the same as the answer at position i
    if (guess[i] === answer[i]) {
      checkArr[i] = "same";
    }
    // If the letter is in the answer
    else if (answer.includes(guess[i])) {
      checkArr[i] = "yes";
    }
    // The letter is not in the answer
    else {
      checkArr[i] = "no";
    }
  }
  return checkArr;
}
