'use strict';
/******************************** WHITE BOARD NOTES ****************************************
// Mastermind... There is a set of items (letters, numbers, colors, shapes, etc.), the Gamemaster selects items from this set
// and places them in a certain order.  The goal is for you to guess the right items in the right order.
// The Gamemaster (the one that knows the right combination), gives you 2 hints after each guess.
//    a) right item, right place
//    b) right item, wrong place.
// if it is a wrong item (it is also by definition in the wrong place), so it is not counted.
// You can use these hints to improve on your guess.
// You continue guessing and receiving hints until you get the right combination.
//
// For our computer game, the items are letters... a-h.
// The Computer is Gamemaster.  It will randomly select 4 letters in a certain combination.  This is the winning combination
// I will make a guess.  Need to test to make sure player only select letters a-h.  Need to test that player only pick 4.
// Computer will test for win.  If the player won, announce winner.  End game.
// If player didn't win, Computer will tell player how many are "right item right order" - "right item wrong order".  It will look like 1-3, 2-1, etc.
// The player will guess again.
//
// ********************************** PSEUDO CODE *************************************
// Create a color palette of 8 colors
// {done}

function createBoard()
//   Display 10 rows of Hint + 4 squares.

function printBoard()

// function generateAnswer() // Given.  Need to build this.
// div of 4 boxes (divs).  Colors need to be hidden
answer = [
{color:'', hiddenColor:''},
{color:'', hiddenColor:''},
{color:'', hiddenColor:''},
{color:'', hiddenColor:''}
]

//This function is used by generate solution to select the colors.
function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

function generateHint(guess)
// print out x - y
//   x = correct color, correction position
//   y - correct color only, wrong position



//function getPrompt() {
//   rl.question('guess 4 letters from A through H: ', (guess) => {
//     mastermind(guess);
//     //put the guesses in array
//     board.push(guess);
//     printBoard();
//     gameCounter+=1;
//     if (gameCounter > 10) {
//       console.log("GAME OVER!!")
//       return;
//     }
//     getPrompt();
//   });
// }

// checkForWin
// my guess === solution.



// print color palette
// generate answer
// print board
//   10 tr + 5td columns append array row to the board array.
//   5 tds per row.
//
// person clicks colors from palette
//   populate color into first empty div in guess[i]
// clear button
// submit guess button ->
//   if (check for win) then
       Congrats!
     else
//     submit guess
//   end if

// tr id='guessRow1'
**********************************************************************/
document.addEventListener('DOMContentLoaded', () => {

  let boardColors = ['red', 'blue', 'green', 'white', 'yellow', 'purple', 'orange', 'black'];
  let generatedAnswer = [];
  let turnCount = 0;
  let guess = 0;

/*********************** COLOR SELECTOR SECTION *********************/
  // This section generates a palette of colors to choose from.
  const boardColorsCanvas = document.createElement('div');
  boardColorsCanvas.setAttribute('class', 'palette');
  // boardColorsCanvas.setAttribute('class', 'boardColors')
  // const boardColorsCanvas = document.getElementById('boardColors')
  for(let i = 0; i < boardColors.length; i++){
    let chooseSection = document.createElement('div');
    chooseSection.className = `color${i} box`;
    chooseSection.textContent = boardColors[i];
    chooseSection.addEventListener('click', (color) => {
      // console.log(color.target.textContent, color.target.className);
      populateChoice(color);
    });
    boardColorsCanvas.appendChild(chooseSection);
    let theBody = document.getElementsByTagName('body')[0];
    theBody.appendChild(boardColorsCanvas);

  }
  // for(let i = 1; i < boardColors.length+1; i++){
  //   let chooseSection = document.createElement('div');
  //   chooseSection.className = `color${boardColors[i]['id']} box`;
  //   chooseSection.textContent = boardColors[i]['color'];
  //   document.body.appendChild(chooseSection);
  // }
/********************************************************************/


/************************ GENERATE SOLUTION ************************/
// function getRandomInt(min, max)  {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function generatedSolution() {
//   for (let i = 0; i < 4; i++) {
//     const randomIndex = getRandomInt(0, boardColors.length);
//     generatedAnswer.push(randomIndex);
//   }
//   return generatedAnswer;
// }
// generatedSolution();

//   var div = document.createElement("div");
//   div.color += boardColors[randomIndex];
//   div.innerHTML = (generatedAnswer[i]);
//   answerContainer.appendChild(div);
//   }
/*********************************************************************/



/************************** GENERATE BOARD ***************************/
  function generateBoard() {
    let numGuessRows = 10;
    const boardTable = document.createElement("table");
    document.body.appendChild(boardTable);
    for(let i = 0; i < numGuessRows + 1 ; i++) {
      let guessRow = document.createElement("tr");
      if(i < numGuessRows){
        guessRow.setAttribute('class', `guessRow${i} guessRow`);
      } else {
        guessRow.setAttribute('class', `answerRow guessRow`);
      }
      boardTable.appendChild(guessRow);
      for(let j = 0; j < 5; j++) {
        let guessCol = document.createElement("td");
        if(j <= 3){
          guessCol.setAttribute('class', `peg${j} peg`);
        } else {
          guessCol.setAttribute('class', `hint${i} peg`);
          // const submitButton = document.createElement('button');
          // guessCol.appendChild(submitButton);
        }
        guessRow.appendChild(guessCol);
        //console.log("the loop works");
      }
    }
  }
  generateBoard();
/**********************************************************************/



// /*************************** CLEAR BUTTON ***************************/
// target.addEventListener('click', () => {
//   $(".fbutton").click(function (e) {
//   $(this).addClass("fcurrent").siblings().removeClass("fcurrent");
// });
// /*******************************************************************/


/************************* GENERATE HINT *****************************/
// Submit Hint button
// guess[]: 4-element array, values = color index's
// generatedAnswer[]: 4-element array, values = color index's
const submitButton = document.getElementsByName('check');
// console.log(submitButton);
submitButton[0].addEventListener('click', () => {
  // console.log('Before'+turnCount);
  turnCount++;
  // console.log('After'+turnCount);
  guess = 0;
  // let exactMatch = 0;
//   let correctColor = 0;
  // const solutionCopy = generatedAnswer;
  // for (let i = 0; i < 4; i++) {
  //   if (guess[i] === solutionCopy[i]) {
  //     exactMatch++;
  //     solutionCopy[i] = null;
  //   }
  //   else {
  //     for (let j = 0; j < 4; j++) {
  //       if (guess[i] === solutionCopy[j]) {
  //         correctColor++;
  //         solutionCopy[j] = null;
  //       }
  //     }
  //   }
  //   return exactMatch + '-' + correctColor;
  // }

});

/*******************************************************************/

  function populateChoice(selectedColor) {
    let theRow = document.getElementsByClassName(`guessRow${turnCount}`);

    let thePeg = document.getElementsByClassName(`peg${guess}`)[turnCount];
    // console.log(selectedColor.target.textContent, selectedColor.target.className);
    // console.log(theRow, thePeg);
    // console.log('turn and guess', turnCount, guess);
    guess++;
    thePeg.setAttribute('class', selectedColor.target.className);

  }
});  // document.addEventListener
