const request = require("request");
const Letters = require("./letter.js");

let wordFnc = function() {
  this.requestStr =
    "https://api.wordnik.com/v4/words.json/randomWord?" +
    "&minLength=5&maxLength=-1" +
    "&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";

  this.setWord = function() {
    this.callLett = '';
    request(this.requestStr, (error, response, body) => {
      this.error = error;
      this.response = response;
      this.body = body;
      if (error) 
        console.log(`Error: ${error}`);
      else {
        this.data = this.body.split(",")[1].split(":")[1];
        this.tempWord = this.data.replace(/['"]+/g, "");
        this.word = this.tempWord
          .slice(0, this.tempWord.length - 1)
          .toUpperCase();
        this.callLett = new Letters(this.word);        
      }
    });      
  };
  this.setWord();
};

module.exports = wordFnc;
