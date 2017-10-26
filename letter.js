const colors = require("colors");
const clear = require('clear');

let Letter = function(wordIn) {
  this.wordIn = wordIn;
  this.dashes = [];
  this.letterIn = "";
  this.correct = 0;
  this.incorrect = 7;
  this.validate = false;
  this.usedChar = [];

//Takes in the input letter and loops through the input word and 
//if it finds the match it will replace the character in the same
//position in the dashes array.
  this.SetLetter = function(letterIn) { 
    
    this.letterIn = letterIn;    

    if(this.usedChar.indexOf(this.letterIn) === -1){
      this.usedChar.push(this.letterIn);
      for(let x = 0; x < wordIn.length; x++)
        if(this.letterIn === wordIn.charAt(x)){ 
          this.dashes[x] = letterIn;
          this.correct += 1;
          this.validate = true;          
        } 
      if(this.validate){
        clear();
        console.log(`\nCorrect`.green);
      }

      if(this.validate === false) {    
        clear();  
        this.incorrect -= 1;
        console.log(`\nIncorrect. ${this.incorrect} tries left.`.red);        
        if(this.incorrect < 1){
          console.log('Sorry you lost'.yellow);
          console.log(`Word was ${this.wordIn}`.green);
          return false;
        }
      }
    } else {  
      clear();
      console.log(`\nCharacter already used. ${this.incorrect} tries left.`.red)
    }
    this.displyDashes();
    this.validate = false;
    if(this.correct === this.wordIn.length){
     console.log('YOU WIN!!!!'.yellow);
     return false;
    } else 
     return true; 
  };

  //Shows the dashed after any changes to the array.
  this.displyDashes = function(){
     console.log(`\n${this.dashes.join(" ")}\n`);
  };

  //Only executes when the object is created.
  //Displays the initial blank array of dashes.
  this.SetDashesInit = function() {
    for (let i = 0; i < this.wordIn.length; i++) 
       this.dashes.push("_");
    this.outDashes = this.dashes.join(" ");
    console.log('\n'+this.outDashes+'\n');
  };
  this.SetDashesInit();
};

module.exports = Letter;
