const clear = require("clear");
const color = require("colors");

let letters = function(word) {
  this.word = word;
  this.dashes = [];
  this.usedChars = [];
  this.wLength = word.length;
  this.correctCnt = 0;
  this.incorrectCnt = 0;
  this.valFound = false;

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

  this.setDashesInit = function(){    
    for(let i = 0; i < this.wLength; i++)
      this.dashes.push('_');      
    console.log(`${this.dashes.join(" ")}\n`.green)  ;
  };
  this.setDashesInit();
};

module.exports = letters;
