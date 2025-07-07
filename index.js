function reverse(string) {
  return Array.from(string).reverse().join("");
}


function emailParts(email) {
  return email.toLowerCase().split("@")
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  // Processes a sting for palindrome checking
  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }  

  this.louder = function louder() {
    return this.content.toUpperCase();
  }
}

// Defines a translated phrase
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
