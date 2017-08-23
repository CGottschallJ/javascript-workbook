'use strict'
document.addEventListener('DOMContentLoaded', () => {
/*WHITEBOARD SECTION _ WHITEBOARD SECTION _ WHITEBOARD SECTION _ */

/******************* Declarations ********************/
//  Create a variable that has a value of an array of objects.
    // There will be 8 objects in the array
    // Each object will have the properties 'id' and 'color'
// Declare a solution variable that is set to an empty array
// Declare a turnCount variable with a value of 0.
// Declare a guess variable with a value of 0.


/*************** Print Board Function ***************/
//Create a function that prints the board.
  //  Create a div declared as a variable
  //  Append the div to the body of the HTML
    //  will have class of colorPalette
  //  Create a table element assigned to a variable
  //  Append the table element variable to colorPalette
  //  Create a tr element and assign it to a variable
  //  Append the 'tr' variable to the table element. ***.appendChild***
  //  Create a 'td' element and assign it to a variable
  // create a for loop that iterates through 8 cycles to print 8 'td' columns into the row.
    // These will have the class of peg and color${object.id}.
/*****************************************************/

/***************** GamePlay Function ******************/
//Create a event listener for click on one of the palette cells.
  //When the palette is clicked
    //It needs to push the object into the gameboard below.
    //I need to find out how to access the first cell of the first row so that I can push the object into
    ///that cell
//After the first four columns of the turn row are full
  //the user will click the submit guess button which will
  ////a hint into the 5th cell or "hintCol" of the turn row.
//The turn counter must then ++ to move to the next turn.

/* Remember that the round must only consist of 4 picks and then
  the turn counter must advance.  What I need to figure out is
  how to have the same styling attached to the click when that object
  is pushed into that cell.*/

//After the tenth turn and the check for win is unsuccessful
////A function must be called to unveil the solution.

/*****************************************************/

/**************Generate Random Solution******************/
//This funtion needs to use math.random * color.length to
///math floor should be used to round down.
//The loop must be iterated through 4 times drawing random
///objects to place into to the solution array
/*******************************************************/

/*******************Check For Win***********************/
// if guess === solution
/*******************************************************/

/*******************Button Functions********************/
//Check Guess button
////This button should check for win
////This button should call the generate hint function

//Clear Board button
////This button needs to clear the board and restart the game.

/*END_WHITEBOARD_SECTION_END_WHITEBOARD_SECTION_END_WHITEBOARD_SECTION*/

/******************* Declarations **********************/

  let colorOptions = [
    {id: 0, color: 'red'},
    {id: 1, color: 'blue'},
    {id: 2, color: 'green'},
    {id: 3, color: 'white'},
    {id: 4, color: 'yellow'},
    {id: 5, color: 'purple'},
    {id: 6, color: 'orange'},
    {id: 7, color: 'black'},
  ];
  //console.log(colorOptions);
  let numOfGuesses = 10;
  let numOfPegs = 4;
  let guessPicks = [];
  let guessCounter = 0;
  let totalGuesses = 0;
  let solution = [];

  /*********************************************************/

  /***************** Print Board Function ******************/
  function printBoard(){
    const colorPalette = document.createElement('div');
    const colorPaletteTable = document.createElement('table');
    const colorPaletteRow = document.createElement('tr');
    const gameBoardContainer = document.createElement('div');
    const gameBoardTable = document.createElement('table');
    const gameBoardRow = document.createElement('tr');
    let numOfGuesses = 10;
    let numOfCol = 5;
    document.body.appendChild(colorPalette);
    colorPalette.setAttribute('class', 'paletteContainer');
    //console.log('Color Palette Created');
    colorPalette.appendChild(colorPaletteTable);
    colorPaletteTable.setAttribute('class', 'paletteTable')
    //console.log('Color Palette Table Created');
    colorPaletteTable.appendChild(colorPaletteRow);
    colorPaletteRow.setAttribute('class', 'paletteRow')
    //console.log('Color Palette Row Created');
    for(let i = 0; i < colorOptions.length; i++) {
      const colorPaletteCol = document.createElement('td');
      const colorPaletteBlock = document.getElementsByClassName('paletteBlock');
      colorPaletteRow.appendChild(colorPaletteCol);
      //console.log('8 columns were created');
      colorPaletteCol.setAttribute('class', `color_${colorOptions[i].color} paletteBlock`);
      colorPaletteBlock[i].textContent = `${colorOptions[i].color}`;
      colorPaletteCol.addEventListener('click', (color) => {
        pushColorToBoard(color);
      });


    }
    document.body.appendChild(gameBoardContainer);
    gameBoardContainer.setAttribute('class', 'gameBoardContainer');
    //console.log('Game Board Container Created');
    gameBoardContainer.appendChild(gameBoardTable);
    gameBoardTable.setAttribute('class', 'gameBoardTable');
    //console.log('Game Board Table Created');
    for(let i = 0; i < numOfGuesses; i++) {
      const gameBoardRow = document.createElement('tr');
      gameBoardTable.appendChild(gameBoardRow);
      //console.log('Game Board Row Created');
      gameBoardRow.setAttribute('class', `boardRow${[i]} boardRow`);
      for(let j = 0; j < numOfCol; j++) {
        let gameBoardCol = document.createElement('td');
        gameBoardRow.appendChild(gameBoardCol);
        //console.log('Board Columns Firing')
        if(j < 4){
          gameBoardCol.setAttribute('class', `boardCol${[j]} boardCol`);
          gameBoardCol.setAttribute('id', `r${i}c${j}`);
          document.getElementById('r' + i + 'c' + j).style.backgroundColor = '#5d6c73';
        } else {
          gameBoardCol.setAttribute('class', `hintCol${[i]} hintCol`);
        }
      }
    }
    const buttonContainer = document.createElement('div');
    document.body.appendChild(buttonContainer);
    buttonContainer.setAttribute('class', 'buttonContainer');
    //console.log('The button div is here');
    // const submitButton = document.createElement('button');
    // buttonContainer.appendChild(submitButton);
    // submitButton.setAttribute('type', 'button');
    // submitButton.textContent= 'Submit Guess';
    // //console.log('The Submit button is here');
    const clearButton = document.createElement('button');
    buttonContainer.appendChild(clearButton);
    clearButton.setAttribute('type', 'button');
    clearButton.textContent= 'Clear Board';

  }
  printBoard();

/****************** Generate Random Solution *******************/

  function generateSolution() {
    let solution = [];
    //let i;
    for (let i = 0; i < numOfPegs; i++) {
      const randomIndex = getRandomInt(0, colorOptions.length);
      solution.push(colorOptions[randomIndex].color);
      //solution.toString();
    }
    console.log(solution);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  generateSolution();

/************************** Push To Board ********************************/

  function pushColorToBoard(color){

    console.log('The Click was heard');
    let guess = color.target.textContent;
    guessPicks.push(guess);

    if(guessPicks.length === numOfPegs) {
      console.log(guessPicks);
      checkForWin();
      //console.log(guessPicksString);
      //guessPicks = [];
      //console.log(guessPicks);
    }


    for(let i = 0; i < 4; i++){
      if(document.getElementById('r' + totalGuesses + 'c' + i).style.backgroundColor=='rgb(93, 108, 115)'){
        document.getElementById('r' + totalGuesses + 'c' + i).style.backgroundColor= guess;
        break;
      }
    }

    for(let i = 0; i < guessPicks.length; i++){
      if(guessPicks[i] === solution[i] && guessPicks.length===4){
        console.log('hello');
      }
    }
    function checkForWin(){
      let guessPicksString = guessPicks.join();
      let solutionString = solution.join();
      if(guessPicksString === solutionString){
        console.log('you win');
      }
    }
    guessCounter++;
    if(guessCounter===4){
      totalGuesses++;
      guessCounter=0;
    }



    // for(let i = 0; i < numOfPegs; i++) {
    //   if (guessPicks[i] instanceof Array && solution[i] instanceof Array) {
    //     console.log('Congratulations! You are a Mastermind!')
    //   } else {
    //     return false;
    //     // console.log('nope')
    //   }
    // }
  }

/*************************************************************************/

/*************************** Generate Hint *******************************/


/*************************************************************************/


/****************************** Check For Win ****************************/




//A for loop must be created to loop through each element
///of the guessPicks array and the solution.

  ///if they match then announce a win.
  ///if they do not, then generate hint and advance the turn


    // if(guessPicks[i] === solution[i]) {
    //   console.log(guessPicks);
    //   console.log('congratulations! you win!');





/**************************************************************************/

});

//right one.
/************ Notes *************/

/*** For this game we will need to create the following functions:
- Print Board Function -
        1. This section will need to contain the creation of HTML to create a gameBoard.
            a. The gameboard have a colorPalette
                i. This will be a div with the id of colorPallete
                ii. This div will house 8 divs that represent the colorOptions for the game.
                iii. Use a for(loop) that itterates colorOptions.length times to get 8 colorPeg
                  divs
                    - These divs will have the class of colorPeg and color_${colorOptions[i]}
                    - Also attach an event listener (click, () => { to each in this loop for
                      passing later on.
        <!--end of div
        <-- new div
            b. The gameboard will have a buttonSection
                i. This section will house 3 buttons.
                    -button 1: will be a submit guess button.
                        -This button will check for win and generate hint.
                    -button 2: will clear the contents of the currentGuess row.
                        -This way the user can resubmit a guess if they choose.
                    -button 3: will be a new game button.
                        -this button should clear the board
                          -generate a new solution
                          -reset guessCount
        <!--end of div
        <-- new div
            c. The gameboard will have a gameboard section
                i. using a for loop that iterrates numofGuesses times to creates
                    a board that is the length of the guesses.
                    -this loop must create numofGuesses empty arrays
                    -they will have the class of guessRow and guess${[i]}
                    -this way they can be styled as a whole but accessed indiv.
            d. This section will also have a hint section.
              i. there is no div needed for this. Rather the hint will be housed
                  in the [4] index of the guess rows.
              ii. create a generateHint function that prints a string to be pushed into the
                  array.
        <!--end of div
        <-- new div
              e. finally the board will have a solution div that houses the solution
                  to be revealed at a later time.
                    -this div will start out hidden.
              f. the div will contain solution.
        <!--end of div

- Generate Random Solution Function -
      function generateSolution() {
        let solution = [];
        //let i;
        for (let i = 0; i < numOfPegs; i++) {
          const randomIndex = getRandomInt(0, colorOptions.length);
          solution.push(colorOptions[randomIndex].color);
          //solution.toString();
        }
        console.log(solution);
      }

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      generateSolution();

- Pallete On Click Event Listener -
      1. When the palette div is clicked then it will need to push the value of that
        div into the next open index of the guesscounter row.
        - I need to find out what value to pass that would also pass styling.
