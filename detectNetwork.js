// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Return true if any of the prefixes are found at the beginning of cardNumber
var prefixMatch = function(prefixes, cardNumber){

  for( let i = 0; i < prefixes.length; i++ ) {
    if(cardNumber.indexOf(prefixes[i]) === 0){
      return true;
    }
  }

  return false;
}

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  var networks = {
    'American Express': {
      prefixes: ['34', '37'],
      lengths: [15]
    },
    'Diner\'s Club': {
      prefixes: ['38', '39'],
      lengths: [14]
    },
    Visa: {
      prefixes: ['4'],
      lengths: [13, 16, 19]
    },
    MasterCard: {
      prefixes: ['51', '52', '53', '54', '55'],
      lengths: [16]
    }
  }

  for ( let network in networks) {
    let prefixes = networks[network].prefixes;
    let lengths = networks[network].lengths;

    if ( prefixMatch(prefixes, cardNumber) && lengths.indexOf(cardNumber.length) >= 0 ){
      return network;
    }
  }

  return undefined;
};
