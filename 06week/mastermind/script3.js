'use strict'
document.addEventListener('DOMContentLoaded', () => {
  const numOfGuesses = 10;
  const colorOptions = ['red', 'blue', 'green', 'white', 'yellow', 'purple', 'orange', 'black'];
  let turnCount = 0;

  function guess () {
    this.pegs = [];
    this.hint = '';
  }

  //
  // function printBoard(){
  //   const boardContainer = document.createElement('div')//.setAttribute('id', 'boardContainer');
  //   let row = [];
  //   for(let i = 0; i < numOfGuesses; i++){
  //     console.log(row);
  //     document.createElement('t')
  //   }
  // }
  // printBoard();


  let board = {
    code: [], //rename
    selection: [], //rename
    generateSolution: function() {
      for(let i = 0; i < 4; i++){
        const getRandomIndex = getRandomInt(0, colorOptions.length);
        this.code.push(getRandomIndex);
      }
    },


    showSolution: function(){

    },


    createPalette: function () {
       const colorPalette = document.getElementById('colorPalette');
       for(let i = 0; i < colorOptions.length; i++){
         const colorPeg = document.createElement('div');
         colorpeg.id = i;
         colorPeg.className = `${colorOptions[i]}`;
         colorPeg.addEventListener('click', (color) => {
           board.pushGuess(color.target.id);
         });
         colorPalette.appendChild(colorPeg);
       }
    },
    pushGuess: function(colorSelections) {
      console.log(colorSelection);
      if(this['selection'].length) {
        const currentSelection = this['selection']this['selection'].length - 1;
        if(currentSelection.pegs.length === 4){
          console.log('Please Submit Your Guess or Clear it.')
        } else {
          currentSelection.pegs.push(colorSelections);
        }
      } else {
        const currentSelection = new guess();
        currentSelection.pegs.push(colorSelections);
        this['selection'].push(currentSelection);
      }
      this.display.row
    },
  }

/************************* Print Board Function *************************/


});
