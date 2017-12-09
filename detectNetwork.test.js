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

describe('Diner\'s Club', function() {

  var should = chai.should();

  it('has a prefix of 38 and a length of 14', function() {
 
    detectNetwork('38345678901234').should.equal('Diner\'s Club');
  });

  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901230').should.equal('Diner\'s Club'); 
  });
});

describe('American Express', function() {

  var should = chai.should();

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var should = chai.should();
 

  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  var should = chai.should();
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

  // 6011
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011567890123456').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011567890123456789').should.equal('Discover');
  });
  // 644-649
  it('has a prefix of 644 and a length of 16', function() {
    detectNetwork('6444567890123456').should.equal('Discover');
  });
  it('has a prefix of 644 and a length of 19', function() {
    detectNetwork('6444567890123456789').should.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    detectNetwork('6454567890123456').should.equal('Discover');
  });
  it('has a prefix of 645 and a length of 19', function() {
    detectNetwork('6454567890123456789').should.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    detectNetwork('6464567890123456').should.equal('Discover');
  });
  it('has a prefix of 646 and a length of 19', function() {
    detectNetwork('6464567890123456789').should.equal('Discover');
  });
  it('has a prefix of 647 and a length of 16', function() {
    detectNetwork('6474567890123456').should.equal('Discover');
  });
  it('has a prefix of 647 and a length of 19', function() {
    detectNetwork('6474567890123456789').should.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
    detectNetwork('6484567890123456').should.equal('Discover');
  });
  it('has a prefix of 648 and a length of 19', function() {
    detectNetwork('6484567890123456789').should.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
    detectNetwork('6494567890123456').should.equal('Discover');
  });
  it('has a prefix of 649 and a length of 19', function() {
    detectNetwork('6494567890123456789').should.equal('Discover');
  });
  // 65
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6534567890123456').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6534567890123456789').should.equal('Discover');
  });
});

describe('Maestro', function() {
  var should = chai.should();

  // 5018
  it('has a prefix of 5018 and a length of 12', function() {
    detectNetwork('501856789012').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    detectNetwork('5018567890123').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 14', function() {
    detectNetwork('50185678901234').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    detectNetwork('501856789012345').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 16', function() {
    detectNetwork('5018567890123456').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
    detectNetwork('50185678901234567').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 18', function() {
    detectNetwork('501856789012345678').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
    detectNetwork('5018567890123456789').should.equal('Maestro');
  });
  
  // 5020
  it('has a prefix of 5020 and a length of 12', function() {
    detectNetwork('502056789012').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function() {
    detectNetwork('5020567890123').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 14', function() {
    detectNetwork('50205678901234').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 15', function() {
    detectNetwork('502056789012345').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 16', function() {
    detectNetwork('5020567890123456').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 17', function() {
    detectNetwork('50205678901234567').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 18', function() {
    detectNetwork('502056789012345678').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 19', function() {
    detectNetwork('5020567890123456789').should.equal('Maestro');
  });

  // 5038
  it('has a prefix of 5038 and a length of 12', function() {
    detectNetwork('503856789012').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 13', function() {
    detectNetwork('5038567890123').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function() {
    detectNetwork('50385678901234').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 15', function() {
    detectNetwork('503856789012345').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 16', function() {
    detectNetwork('5038567890123456').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 17', function() {
    detectNetwork('50385678901234567').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 18', function() {
    detectNetwork('503856789012345678').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 19', function() {
    detectNetwork('5038567890123456789').should.equal('Maestro');
  });

  // 6304
  it('has a prefix of 6304 and a length of 12', function() {
    detectNetwork('630456789012').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 13', function() {
    detectNetwork('6304567890123').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 14', function() {
    detectNetwork('63045678901234').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 15', function() {
    detectNetwork('630456789012345').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 16', function() {
    detectNetwork('6304567890123456').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 17', function() {
    detectNetwork('63045678901234567').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 18', function() {
    detectNetwork('630456789012345678').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 19', function() {
    detectNetwork('6304567890123456789').should.equal('Maestro');
  });
});

describe('should support China UnionPay', function() {
  var should = chai.should();

  var prefixes = [];
  for(let i = 622126; i <= 622925; i++){
    prefixes.push(i.toString());
  }
  for(let i = 624; i <= 626; i++){
    prefixes.push(i.toString());
  }
  for(let i = 6282; i <= 6288; i++){
    prefixes.push(i.toString());
  }

  var cardNums = {
    16: '1234567890123456',
    17: '12345678901234567',
    18: '123456789012345678',
    19: '1234567890123456789'
  };

  for(let i = 0; i < prefixes.length; i++) {
    for(let j = 16; j <= 19; j++) {

      let prefix = prefixes[i];
      let cardNum = prefix + cardNums[j].slice(prefix.length);

      it('has a prefix of ' + prefix + ' and a length of ' + j, function() {
        detectNetwork(cardNum).should.equal('China UnionPay');
      });
    }
  }

});

describe('should support Switch', function() {
  var should = chai.should();

  var prefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  var lengths = [16, 18, 19];
  var cardNums = {
    16: '1234567890123456',
    18: '123456789012345678',
    19: '1234567890123456789'
  };

  for(let i = 0; i < prefixes.length; i++) {
    for(let j = 0; j < lengths.length; j++) {

      let prefix = prefixes[i];
      let cardNum = prefix + cardNums[lengths[j]].slice(prefix.length);

      it('has a prefix of ' + prefix + ' and a length of ' + lengths[j], function() {
        detectNetwork(cardNum).should.equal('Switch');
      });
    }
  }

});
