var expect    = require("chai").expect;
var Stack = require("../Stack.js");

describe('Given a new stack has been instantiated', function(){

    var stack;

    beforeEach(function(){
        stack = new Stack();
    });

    it('a stack with one element should pop the last pushed element', function(){
        stack.push(1);
        expect(stack.pop()).to.equal(1);
    });

    it('the stack should throw an error when atempting to pop from a empty stack', function() {
        expect(() => stack.pop()).to.throw('Stack is empty!');
    });

    it('a stack that has 3 elements pushed should pop the elements in reversed order', function() {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()).to.equal(3);
        expect(stack.pop()).to.equal(2);
        expect(stack.pop()).to.equal(1);
    });

    it('the #isEmpty() function should return true if the stack is empty', function() {
        expect(stack.isEmpty()).to.be.true;
    });

    it('the #isEmpty() function should return true if the stack contains at least one element', function() {
        stack.push(1);
        expect(stack.isEmpty()).to.be.false;
    });

});