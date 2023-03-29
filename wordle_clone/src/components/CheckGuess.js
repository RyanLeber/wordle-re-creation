/* eslint-disable prettier/prettier */

function checkGuess(guess, answer) {
  if (guess && answer) {
    const checkArr = [5];
    let count = 0;
    console.log(answer)
    for (let i = 0; i < 5; i++) {
      let temp = count;
      for (let j = 0; j < 5; j++) {
        if (guess[i] === answer[j]) {
          if (i === j) {
            checkArr[i] = 'same';
          }
          else {
            checkArr[i] = 'yes';
          }
          count = count + 1;
        }
      }
      if (temp === count) {
        checkArr[i] = 'no';
      }
    }
    if (count === 5) {
        console.log('correct');
        return checkArr, true;
    }
    return checkArr, false;
  }
}
