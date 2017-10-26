const prompt = require("prompt");
const colors = require("colors");
const clear = require('clear');
const wordFnc = require("./word.js");
const lettFnc = require("./letter.js");

let dashes = [];
let wordIn = "";
let letterIn = "a";
let GetWord = new wordFnc();
wordIn = GetWord.getRandomWord();
let SetLetter = new lettFnc(wordIn);
lettFnc.prototype.clearFunc = function(){
   clear();
};

//specifies the properties for the prompt function
let schema = {
  properties: {
    character: {
      pattern: /^[a-zA-Z]$/,
      message: 'One single letter and no Numbers.'.red,
      required: true      
    }
  }
};
let schema2 = {
  properties: {
    character: {
      pattern: /^[a-zA-Z]$/,
      message: 'Type "y" for yes "n" for No only.'.red,
      required: true
    }
  }
};
//This will execute after each game. It asks if you want
//to play again. It will end if you type no. Restart if yes.
let playAgain = () => {

  console.log('Play again?'.blue);
  prompt.start();

  prompt.get(schema2, function (err, result) {

    let cont = result.character;
    
    if(cont === 'y' || cont === 'Y'){
      SetLetter.clearFunc();
      wordIn = GetWord.getRandomWord();
      SetLetter = new lettFnc(wordIn);      
      promptFunc();
    } else if(cont === 'n' || cont === 'N'){
      console.log('Thank you for playing. Good Bye.'.blue) ;
    } else {
      console.log(`'y' for yes or 'n' for no.`.red);
      playAgain();
    } 
  });
};

//This is the function that prompts for the user input.
//This is where you type in the character.
let promptFunc = () => {
  // Start the prompt
  prompt.start();

  // Get the letter from the user.
  console.log(`Type in your character.`);
  prompt.get(schema, function (err, result) {
    let cont = SetLetter.SetLetter(result.character);    
    if(cont){
      promptFunc();
    } else {          
      playAgain();
    }

  });
};

promptFunc();