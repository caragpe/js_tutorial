module.exports = Phrase

String.prototype.reverse = function() {
  return Array.from(this).reverse().join("")
}

function Phrase(content) {
  this.content = content
}

Phrase.prototype.letters = function() {
  return (this.content.match(/[a-z]/gi) || []).join("")
}

Phrase.prototype.processedContent = function() {
    return this.letters().toLowerCase();
}

Phrase.prototype.palindrome = function() {
  if (this.processedContent().length) {
    return this.processedContent() === this.processedContent().reverse();
  } else { return false; }
}