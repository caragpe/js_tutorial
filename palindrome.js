//Reverses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}


// Defines a Phrase object
function Phrase(content) {
  this.content = content,

  this.processedContent = function(){
    return this.content.toLowerCase();
  },

  this.palindrome = function() {
    return this.processedContent() === reverse(this.processedContent());
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
}

TranslatedPhrase.prototype = new Phrase();