'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  // Your code here
  if (color === 'white') {
    this.symbol = 'X';
  } else {
    this.symbol = 'O';
  }

}

function Board() {
  this.grid = [];
  this.checkers = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = function() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  };


  this.createCheckers = function() {
    // [row, col]
    const whitePos = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7],
    ]
    for (let i = 0; i < 12; i++) {
      let whiteRow = whitePos[i][0];
      let whiteCol = whitePos[i][1];
      let whiteChecker = new Checker('white');
      this.checkers.push(whiteChecker);
      this.grid[whiteRow][whiteCol] = whiteChecker;
    }

    const blackPos = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6],
    ]
    for (let i = 0; i < 12; i++) {
      let blackRow = blackPos[i][0];
      let blackCol = blackPos[i][1];
      let blackChecker = new Checker('black');
      this.checkers.push(blackChecker);
      this.grid[blackRow][blackCol] = blackChecker;
    }
  }

  // Your code here - Another function that does...
}

function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    this.board.createCheckers();
    this.board.viewGrid();  // test - remove when done
    // moveChecker()
    // take the given 2 numbers from the user input
    // set the source to the destination
    this.board.grid
    // null the source value
  };
}

function getPrompt() {
  game.board.viewGrid();
  // Ask user for source piece
  rl.question('which piece?: ', (whichPiece) => {
    // Feed desination piece to another prompt for destination piece
    rl.question('to where?: ', (toWhere) => {
      // Move the checker
      game.moveChecker(whichPiece, toWhere);
      // Render the board again, with moved piece
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function () {
    it('should move a checker', function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
