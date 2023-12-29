class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackUsingLinkedList {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(element) {
        if (this.isFull()) {
            return 'full';
        }

        const newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return 'stack is empty';
        }
        
        const removedNode = this.top;
        this.top = this.top.next;
        removedNode.next = null;
        this.size--;

        return removedNode.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return 'stack is empty';
        }
        return this.top.data;
    }

    isFull() {
        // Linked list implementation does not have a fixed size
        return false;
    }

    getAllData() {
        let stackArr = [];
        let current = this.top;
        while (current !== null) {
            stackArr.push(current.data);
            current = current.next;
        }
        return stackArr;
    }
}

// Example usage:
let stack = new StackUsingLinkedList();
stack.push(2);
stack.push(5);
stack.push(1);
stack.push(3);
console.log(stack.getAllData()); // Output: [3, 1, 5, 2]
console.log(stack.peek());       // Output: 3
stack.pop();
console.log(stack.getAllData()); // Output: [1, 5, 2]
