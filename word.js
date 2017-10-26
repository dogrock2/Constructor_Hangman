const wordList = require("./wordsList");

let Word = function() {
  this.rndNumLst = [];   //sets the rndNumLst array according to the size of wordsList file so you
  for (let x in wordList)//can add or delete words from the list without any further code modification.
     this.rndNumLst.push(parseInt(x));
  this.wordListLength = this.rndNumLst.length; //gets the length of the wordList   
  this.wordsToUse = [];
  this.cnt = -1;

  //returns a random word everytime is called
  this.getRandomWord = function() {
    this.cnt++;
    if(this.cnt > this.wordListLength)
       this.cnt = 0;
    return this.wordsToUse[this.cnt];
  };

  //Creates an array/list of words in random order.
  this.setRandomWord = function() {
    this.rndNumLst = this.shuffleArray(this.rndNumLst);
    for (let i = 0; i < this.rndNumLst.length; i++)
      this.wordsToUse.push(wordList[this.rndNumLst[i]]);
  };

  //Shuffle array using Durstenfeld Shuffle so list of words is always
  //in a different order
  this.shuffleArray = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  
  //calls the set method upon object creation
  this.setRandomWord();
}; 

module.exports = Word;
