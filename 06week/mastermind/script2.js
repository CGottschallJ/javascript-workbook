'use strict'
document.addEventListener('DOMContentLoaded', () => {
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
    let numOfGuesses = 10;
    let numOfPegs = 4;
    let guessPicks = [];
    let guessCounter = 0;
    let totalGuesses = 0;
    let solution = [];

/**********************************************************/

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
    colorPalette.appendChild(colorPaletteTable);
    colorPaletteTable.setAttribute('class', 'paletteTable')
    colorPaletteTable.appendChild(colorPaletteRow);
    colorPaletteRow.setAttribute('class', 'paletteRow')
    for(let i = 0; i < colorOptions.length; i++) {
      const colorPaletteCol = document.createElement('td');
      const colorPaletteBlock = document.getElementsByClassName('paletteBlock');
      colorPaletteRow.appendChild(colorPaletteCol);
      colorPaletteCol.setAttribute('class', `color_${colorOptions[i].color} paletteBlock`);
      colorPaletteBlock[i].textContent = `${colorOptions[i].color}`;
      colorPaletteCol.addEventListener('click', (color) => {
        colorToBoard(color);
      });
    }
    document.body.appendChild(gameBoardContainer);
    gameBoardContainer.setAttribute('class', 'gameBoardContainer');
    gameBoardContainer.appendChild(gameBoardTable);
    gameBoardTable.setAttribute('class', 'gameBoardTable');
    for(let i = 0; i < numOfGuesses; i++) {
      const gameBoardRow = document.createElement('tr');
      gameBoardTable.appendChild(gameBoardRow);
      gameBoardRow.setAttribute('class', `boardRow${[i]} boardRow`);
      for(let j = 0; j < numOfCol; j++) {
        let gameBoardCol = document.createElement('td');
        gameBoardRow.appendChild(gameBoardCol);
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
    const clearButton = document.createElement('button');
    buttonContainer.appendChild(clearButton);
    clearButton.setAttribute('type', 'button');
    clearButton.textContent= 'Clear Board';

  }
  printBoard();
/***************************************************************/

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
/*****************************************************************/

/*********************** Gameplay Funciton ***********************/
  function colorToBoard(){

  }



});
