let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function () {
  describe("#palindrome", function () {
    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });
    
    it("should return true for a mixed-case palindrome", function() {
      let mixedCasedPalindrome = new Phrase("Racecar");
      assert(mixedCasedPalindrome.palindrome())
    });
  });
  
  describe("#letter", function() {
    it("should return only letter.", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });
  });
});