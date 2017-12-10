// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Global variable to hold the rules for each card type
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
    prefixes: ['6011', '65'],
    lengths: [16, 19]
  },
  Maestro: {
    prefixes: ['5018', '5020', '5038', '6304'],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19]
  },
  'China UnionPay': {
    prefixes: [],
    lengths: [16, 17, 18, 19]
  },
  Switch: {
    prefixes: ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'],
    lengths: [16, 18, 19]
  }
};

// Add prefix ranges to Discover and China UnionPay
var addPrefixes = function(network, start, end) {
  for (let i = start; i <= end; i++) {
    networks[network].prefixes.push(i.toString());
  }
};
addPrefixes('China UnionPay', 622126, 622925);
addPrefixes('China UnionPay', 624, 626);
addPrefixes('China UnionPay', 6282, 6288);
addPrefixes('Discover', 644, 649);

// Return true if this cardNumber matches the network given
var match = function(network, cardNumber) {
  var prefixes = network.prefixes;
  var lengths = network.lengths;

  if(lengths.indexOf(cardNumber.length) >= 0) {

    for( let i = 0; i < prefixes.length; i++ ) {
      if(cardNumber.indexOf(prefixes[i]) === 0){
        return true;
      }
    }
  }

  return false;
};

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string

  for ( let networkName in networks) {

    if ( match(networks[networkName], cardNumber) ){

      // If we get a Visa match, make sure it doesn't also match for Switch
      if(networkName === 'Visa'){
        if ( match(networks['Switch'], cardNumber) ) {
          // Switch always has a longer prefix so just prioritize that
          return 'Switch';
        }
        return 'Visa';
      }
      return networkName;
    }

  }

  return undefined;
};
