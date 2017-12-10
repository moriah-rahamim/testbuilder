/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  // it('Throws an error when expected behavior does not match actual behavior', function() {
  //   var even = function(num){
  //     return num/2 === 0;
  //   }

  //   if(even(10) !== true) {
  //     throw new Error('10 should be even!');
  //   }
  // });
});

// *************************************
// Helpers
// *************************************

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
var addPrefixes = function(networksObj, network, start, end) {
  for (let i = start; i <= end; i++) {
    networks[network].prefixes.push(i.toString());
  }
};
addPrefixes(networks, 'China UnionPay', 622126, 622925);
addPrefixes(networks, 'China UnionPay', 624, 626);
addPrefixes(networks, 'China UnionPay', 6282, 6288);
addPrefixes(networks, 'Discover', 644, 649);

// Create base card numbers of various lengths
var cardNums = {};
for (let i = 10; i <= 20; i++) {
  cardNums[i] = Math.floor(Math.random()*Math.pow(10, i)).toString();
}

// Run all the tests for a given network
var runTests = function(network) {
  var should = chai.should();

  var prefixes = networks[network].prefixes;
  var lengths = networks[network].lengths;

  for(let i = 0; i < prefixes.length; i++) {
    for(let j = 0; j < lengths.length; j++) {

      let prefix = prefixes[i];
      let cardNum = prefix + cardNums[lengths[j]].slice(prefix.length);

      it('has a prefix of ' + prefix + ' and a length of ' + lengths[j], function() {
        detectNetwork(cardNum).should.equal(network);
      });
    }
  }
};

// *************************************
// Tests
// *************************************

// Diner's Club
describe('Diner\'s Club', function() {
  runTests('Diner\'s Club');
});

// American Express
describe('American Express', function() {
  runTests('American Express');
});

describe('Visa', function() {
  runTests('Visa');
});

describe('MasterCard', function() {
  runTests('MasterCard'); 
});

describe('Discover', function() {
  runTests('Discover');
});

describe('Maestro', function() {
  runTests('Maestro');
});

describe('should support China UnionPay', function() {
  runTests('China UnionPay');
});

describe('should support Switch', function() {
  runTests('Switch');
});
