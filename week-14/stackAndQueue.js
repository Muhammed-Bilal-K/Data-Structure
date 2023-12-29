//stack

class stack {
    constructor(size = 5){
        this.stack = [];
        this.size = size;
    }

    push(element){
        if (this.stack.length === this.size) {
            return 'full'
        }else{
            this.stack.push(element);
        }
    }

    pop(){
        if (this.stack.length === 0) {
            return 'stack is empty';
        }
        this.stack.pop();
    }

    isEmpty(){
        if (this.stack.length === 0) {
            return 'stack is empty';
        }
        return 'stack is not empty';
    }

    peek(){
        if (this.stack.length === 0) {
            return 'stack is empty';
        }
        return this.stack[this.stack.length - 1];
    }

    isFull(){
        if (this.stack.length === this.size) {
            return 'full';
        }
        return 'not full'
    }

    AllData(){
        let stackArr = [];
        for (let i = 0; i < this.stack.length; i++) {
            stackArr.push(this.stack[i]);
        }
        return stackArr;
    }
}

// let ss = new stack();
// ss.push(2);
// ss.push(5);
// ss.push(1);
// ss.push(3);
// ss.push(3);
// console.log(ss.push(3));
// console.log(ss.AllData());
// console.log(ss.peek());
// console.log(ss.isFull());





//queue
class queue{
    constructor(size = 5){
        this.queue = [];
        this.size = size;
    }

    enqueue(element){
        if (this.queue.length === this.size) {
            return 'full'
        }else{
            this.queue.push(element);
        }
    }

    dequeue(){
        if (this.queue.length === 0) {
            return 'queue is empty';
        }
        this.queue.shift();
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    AllData(){
        let queueArr = [];
        for (let i = 0; i < this.queue.length; i++) {
            queueArr.push(this.queue[i]);
        }
        return queueArr;
    }
}

let qq = new queue();
qq.enqueue(3);
qq.enqueue(7);
qq.enqueue(5);
qq.enqueue(4);
console.log(qq.AllData());
qq.dequeue();
qq.dequeue();
qq.dequeue();
qq.dequeue();
console.log(qq.AllData());
console.log(qq.isEmpty());