'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let playerTurn = X;


});

/* ------- White Board -------
  1. Define player turns
      a. player 1 = X
      b. player 2 = O

  2. On click
    a. Check for empty space.
      if empty (add)
      if not (alert choose another space)
    b. We need to add a Player turn token (X or O) into square
      i. append to data-cell
    c. check for win
      i. if statement
        append message to announce winner ID div 'Congrats Player ___! You Win!'
    d. check for tie
      i. if else
        append message to announce winner ID div There is a tie! Both of you lose. click clear board to play again
    e. rotate player turn
      i. else (playerTurn = playerTurn === X ? O : X)

  3. On click of clear Board
    a. set turn to player 1
    b. remove tokens from board
    c. initialize any variables

***** Notes *****
How to get data-cell attribute?


*/
