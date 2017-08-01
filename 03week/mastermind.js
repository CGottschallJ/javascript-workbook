'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let numOfGuesses = 1;

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  solution = '';
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// Solut [a,b,c,d]
//Guess  [a,c,d,c]


function generateHint(guess) {
  let countCorrect = 0;
  let countRightLetter = 0;
  for(let i = 0; i < solution.length; i++) {
    if(guess[i] === solution[i]) {
      countCorrect++;
    } else {
      let wrongSpot = solution.indexOf(guess[i])
      if(wrongSpot >= 0 && solution[wrongSpot] !== guess[wrongSpot]) {
        countRightLetter++;
      }
    }
  }
  return countCorrect + '-' + countRightLetter;
}

function mastermind(guess) {
  //console.log('This is a your guess', guess);
  //solution = 'abcd'; // Comment this out to generate a random solution
  // Code to trim the guess
  guess = guess.toLowerCase().trim();
  let hint = generateHint(guess);
  board.push(`Guess #${numOfGuesses} was '${guess}' Hint: ${hint}`);
  numOfGuesses++;
  if(guess === solution){
    console.log('CONGRATULATIONS!!! YOU ARE NOW A MASTERMIND! A new solution has been selected. Please play again!');
    board = [];
    numOfGuesses = 1;
    generateSolution();
    return 'You guessed it!'
  }
  if(numOfGuesses > 10) {
    console.log("You are out of guesses. Better luck next time!");
    board = [];
    numOfGuesses = 1;
    generateSolution();
    return;
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  //console.log(solution);
  getPrompt();
}
