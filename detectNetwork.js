// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  //input: cardnumber - string
  //output: Returns "Diners Club" or "American Express"

  //Edgecases are lengths

  //if string[1] === 8 || 9
  //if string[1] ===


  if (cardNumber.length === 14 && cardNumber[0] === '3' && cardNumber[1] === '8' || cardNumber[0] === '3' && cardNumber[1] === '9') {
    return 'Diner\'s Club';
  }

  if (cardNumber.length === 15 && cardNumber[0] === '3' && cardNumber[1] === '4' || cardNumber[0] === '3' && cardNumber[1] === '7') {
    return 'American Express';
  }

  if (cardNumber[0] === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Visa';
  }

  if (cardNumber[0] === '5' && cardNumber[1] === '1' || cardNumber[0] === '5' && cardNumber[1] === '2' || cardNumber[0] === '5' && cardNumber[1] === '3' || cardNumber[0] === '5' && cardNumber[1] === '4' || cardNumber[0] === '5' && cardNumber[1] === '5' && cardNumber.length === 16) {
    return 'MasterCard';
  }

  if (cardNumber.slice(0, 4) === '6011' || cardNumber.slice(0, 3) === '644' || cardNumber.slice(0, 3) === '645' || cardNumber.slice(0, 3) === '646' || cardNumber.slice(0, 3) === '647' || cardNumber.slice(0, 3) === '648' || cardNumber.slice(0, 3) === '649' || cardNumber.slice(0, 2) === '65' && cardNumber.length === 16 || cardNumber.length === 19) {
    return 'Discover';
  }

  if (cardNumber.slice(0, 4) === '5018' || cardNumber.slice(0, 4) === '5020' || cardNumber.slice(0, 4) === '5038' || cardNumber.slice(0, 4) === '6304' && cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19) {
    return 'Mastro';
  }

};






