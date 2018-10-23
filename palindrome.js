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

  this.processedContent = function(){
    return this.content.toLowerCase();
  },

  this.palindrome = function() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
}

TranslatedPhrase.prototype = new Phrase();