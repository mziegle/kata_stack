class Stack {

    constructor() {
        this.elements = [];
    };

    push(element) {
        this.elements.push(element);
    };

    pop() {
        if (this.elements.length > 0)
            return this.elements.pop();
        throw new Error('Stack is empty!');
    };

    isEmpty() {
        if (this.elements.length > 0) {
            return false;
        }
        return true;
    };
};

module.exports = Stack;