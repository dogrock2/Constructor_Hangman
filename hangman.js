const Words = require("./words");
const inquirer = require("inquirer");
const color = require("colors");
const clear = require("clear");

/*
 * This function makes a Words object and grabs a new word from an API. Calls
 * the setLetter function that creates and displays the array with dashes.
 */
let createWord = func => {   
  
    let callWord = new Words();
   /*
    * Using prototype it adds a setLetter function to be called everytime
    * a letter is selected from the prompt.
    */
    Words.prototype.setLetter = function(letter) {
       this.letter = letter;    
       let charCnt = this.callLett.setLetter(this.letter);
       return [this.word.length, charCnt];
    };

  setTimeout(function(){
    func(callWord);
  },1000);
};

/*
 * Gets called when player either wins or loses and prompts if they
 * want to play again.
 */
let playAgain = callWord => {
    inquirer.prompt([
        {
            type: "input",
            message: `Play again? `.blue,
            name: "value",
            validate: function(val) {
              if ((val.length === 1 && isNaN(val))&&
                  (val === 'y' || val === 'Y')||
                  (val === 'n' || val === 'N'))
                  return true;
              else
                return `Error: Choose "y" for yes or "n" for no`.red;
        }
    }
]).then(passedVals => {
    let charIn = passedVals.value;
    if(charIn === 'n' || charIn === 'N')
      console.log('Goodbye!!'.yellow);
    else   
      createWord(promptLetter);
});
};

/* 
 * Prompts for a character and validates to make sure only a single
 * character is selected and no numbers.
 */
let promptLetter = callWord => {
  
  inquirer.prompt([
      {
        type: "input",
        message: "Guess a letter: ",
        name: "value",
        validate: function(val) {
          if (val.length === 1 && isNaN(val)) 
            return true;
          else
            return "Error: Choose a single letter and no numbers. Try again".red;
        }
      }
    ]).then(passedVals => {        
      let charIn = passedVals.value;
      clear();
      let wordCnt = callWord.setLetter(charIn.toUpperCase());
      if(wordCnt[0] === wordCnt[1][0]){
         console.log('YOU WIN!!!!\n'.yellow);
         playAgain();
      } else if(wordCnt[1][1] >= 7 ) {
         console.log('SORRY. YOU LOSE!!!!'.red);        
         console.log(`Word was `.yellow+`${callWord.word}\n`.green);
         playAgain();
      } else {
         promptLetter(callWord);         
      }
    });
};

createWord(promptLetter);

    