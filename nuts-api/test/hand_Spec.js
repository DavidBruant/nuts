var assert = require("assert");
var Hand = require("../src/hand");

describe('Hand', function(){
	it('should throw an exception when the cards are identical', function(){
		//Spade, Heart, Diamond, Club
		// ♠ ♥ ♦ ♣
		
		assert.throw(new Hand("5-S", "5-S"), Error);
	});
});
