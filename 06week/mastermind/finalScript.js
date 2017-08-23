'use strict'
document.addEventListener('DOMContentLoaded', () => {
  const colorOptions = ['red', 'blue', 'green', 'white', 'yellow', 'purple', 'orange', 'black'];
  console.log(colorOptions);
  let guess = [];
  const numOfGuesses = 10;

  function printBoard() {
    const colorPaletteWrap = document.getElementbyId("paletteSection");
    const colorPaletteDiv = document.createElement('div');
    for (i = 0; i < colorOptions.length; i++){
    colorPaletteWrap.appendChild(colorPaletteTable);
    }
    // const colorPaletteTable = document.createElement('table');
    // const colorPaletteRow = document.createElement('tr');
    // const colorPaletteCol= document.createElement('td');
    // for(let i = 0; i < numOfGuesses; i++){
    //
    // }
  }
  printBoard();
});
