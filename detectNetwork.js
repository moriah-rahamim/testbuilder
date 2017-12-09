// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Return true if any of the prefixes are found at the beginning of cardNumber
var prefixMatch = function(prefixes, cardNumber) {

  for( let i = 0; i < prefixes.length; i++ ) {

    if(prefixes[i].indexOf('-') >= 0) {
      // handle a range of prefixes with a hypthen in the middle
      let endpoints = prefixes[i].split('-');
      let start = endpoints[0];
      let end = endpoints[1];

      for(var j = parseInt(start); j <= parseInt(end); j++) {
        if(cardNumber.indexOf(j.toString()) === 0){
          return true;
        }
      }
    } else if(cardNumber.indexOf(prefixes[i]) === 0){
      // handle a single prefix
      return true;
    }
  }

  return false;
};

// var switchOrVisa = function(visaObj, switchObj, cardNumber) {

//   var visaPrefixes = visaObj.prefixes;
//   var visaLengths = visaObj.lengths;

//   var switchPrefixes = switchObj.prefixes;
//   var switchLengths = switchObj.lengths;

//   // Switch always has a longer prefix, so favor switch over visa
//   if ( prefixMatch(switchPrefixes, cardNumber) && switchLengths.indexOf(cardNumber.length ) >= 0 ){
//     return Switch;
//   } 

// };

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
    },
    Discover: {
      prefixes: ['6011', '644-649', '65'],
      lengths: [16, 19]
    },
    Maestro: {
      prefixes: ['5018', '5020', '5038', '6304'],
      lengths: [12, 13, 14, 15, 16, 17, 18, 19]
    },
    'China UnionPay': {
      prefixes: ['622126-622925', '624-626', '6282-6288'],
      lengths: [16, 17, 18, 19]
    },
    Switch: {
      prefixes: ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'],
      lengths: [16, 18, 19]
    }
  }

  for ( let network in networks) {
    let prefixes = networks[network].prefixes;
    let lengths = networks[network].lengths;

    if ( prefixMatch(prefixes, cardNumber) && lengths.indexOf(cardNumber.length) >= 0 ){

      if(network === 'Visa'){
        if (prefixMatch(networks.Switch.prefixes, cardNumber) && networks.Switch.lengths.indexOf(cardNumber.length) >= 0) {
          return 'Switch';
        } else {
          return 'Visa';
        }
      } else {
        return network;
      }

    }
  }

  return undefined;
};
