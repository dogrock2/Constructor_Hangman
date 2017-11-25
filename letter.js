const clear = require("clear");
const color = require("colors");

let letters = function(word, cb) {
  this.word = word;
  this.dashes = [];
  this.usedChars = [];
  this.wLength = word.length;
  this.correctCnt = 0;
  this.incorrectCnt = 0;
  this.valFound = false;
  this.cb = cb;
  
  /**
   * Takes in a letter parameter from hangman.js and first checks if its in the 
   * usedChars array and adds it if not. If it is it displays the message to tell
   * you that it is repeated. Then it replaces the dashes from array with the letter
   * and console logs the new dashes array.
   */
  this.setLetter = function(letterIn) {     
     this.letterIn = letterIn;
     if(this.usedChars.indexOf(this.letterIn) !== -1){
       console.log(`\n${this.letterIn} already used.`.red);
       console.log(`\n${this.dashes.join(" ")}\n`.green);      
       return [this.correctCnt, this.incorrectCnt];
     } else {
      for(let x = 0; x < this.wLength; x++)
          if(this.letterIn === word.charAt(x)){
            this.dashes[x] = letterIn;
            this.correctCnt++; 
            this.usedChars.push(letterIn);
            this.valFound = true;
          }
      if(this.valFound){
          console.log(`\nCorrect.\n`.blue);
          this.valFound = false;
      } else {
          this.usedChars.push(letterIn);
          this.incorrectCnt++;
          console.log(`\nIncorrect. ${7 - this.incorrectCnt} tries left.\n`.red);
      }
      console.log(`\n${this.dashes.join(" ")}\n`.green);
      return [this.correctCnt, this.incorrectCnt];
    }
  };
 //Initially counts the word and adds the dashes to the dashes array and console
 //logs the result. Runs only when object is created.
  this.setDashesInit = function(){    
    for(let i = 0; i < this.wLength; i++)
      this.dashes.push('_');      
    console.log(`${this.dashes.join(" ")}\n`.green);
    this.cb();
  };
  this.setDashesInit();
};

module.exports = letters;
