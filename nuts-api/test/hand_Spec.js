var assert = require("assert");
describe('Hand', function(){
	it('should throw an exception when the cards are identical', function(){
		//Spade, Heart, Diamond, Club
		// ♠ ♥ ♦ ♣
		Hand = require("../src/hand");
		assert.throw(new Hand("5-S", "5-S"), Error);
	});
});
