module.exports = Phrase

String.prototype.reverse = function() {
  return Array.from(this).reverse().join("")
}

String.prototype.blank = function() {
  return !!this.match(/^\s*$/g)
}

Array.prototype.last = function() {
  return this.slice(-1)
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content,

  this.letters = function letters() {
    return this.content.match(/[a-z]/gi).join("")
  }

  this.processedContent = function processedContent(){
    return this.content.toLowerCase();
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
}

TranslatedPhrase.prototype = new Phrase();