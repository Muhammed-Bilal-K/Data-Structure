// //stack

// class stack{
//     constructor(size = 5){
//         this.stack = [];
//         this.size = size
//     }

//     push(element){
//         this.stack.push(element);
//     }

//     pop(){
//         if (this.stack.length === 0) {
//             return 'not'
//         }
//         this.stack.pop();
//     }

//     peek(){
//         if (this.stack.length === 0) {
//             return 'not'
//         }
//         return this.stack[this.stack.length - 1];
//     }

//     isEmpty(){
//         return this.stack.length === 0;
//     }

//     AllData(){
//         let sortArr = [];
//         for (let i = 0; i < this.stack.length; i++) {
//             sortArr.push(this.stack[i]);
//         }
//         return sortArr;
//     }
// }

// // let ss = new stack();
// // ss.push(2);
// // ss.push(5);
// // ss.push(1);
// // ss.push(3);
// // ss.push(3);
// // // console.log(ss.push(3));
// // console.log(ss.AllData());
// // ss.pop();
// // console.log(ss.AllData());
// // console.log(ss.peek());
// // console.log(ss.isFull());



// //stack using queue
// class stackUsingQueue{
//     constructor(){
//         this.q1 = [];
//         this.q2 = [];
//     }

//     push(x){
//         while (this.q1.length != 0) {
//             this.q2.push(this.q1.shift());
//         }
//         this.q1.push(x);
//         while (this.q2.length != 0) {
//             this.q1.push(this.q2.shift());
//         }
//     }

//     pop(){
//         if (this.q1.length === 0) {
//             return 'nnn';
//         }
//         return this.q1.shift();
//     }

//     AllData(){
//         let sortArr = [];
//         for (let i = 0; i < this.q1.length; i++) {
//             sortArr.push(this.q1[i]);
//         }
//         return sortArr;
//     }
// }

// // let sq = new stackUsingQueue();
// // sq.push(2)
// // sq.push(7)
// // sq.push(5)
// // sq.push(4)
// // sq.pop();
// // console.log(sq.AllData());

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class StackUsingLinkedList{
//     constructor(){
//         this.top = null;
//         this.size = 0;
//     }

//     push(data){
//         // this.top = new Node(data,this.top);
//         const newNode = new Node(data);
//         newNode.next = this.top;
//         this.top = newNode;
//         this.size++;
//     }

//     pop(){
//         let removedNode = this.top;
//         this.top = this.top.next;
//         removedNode.next = null;
//         this.size--;
//     }

//     getData(){
//         let sortArr = [];
//         let current = this.top;
//         while (current !== null) {
//             sortArr.push(current.data);
//             current = current.next;
//         }
//         return sortArr;
//     }
// }

// // let sss = new StackUsingLinkedList();
// // sss.push(2)
// // sss.push(5)
// // sss.push(4)
// // sss.push(3)
// // sss.pop();
// // console.log(sss.getData());


// class queue{
//     constructor(size = 5){
//         this.queue = [];
//         this.size = size
//     }

//     push(element){
//         this.queue.push(element);
//     }

//     pop(){
//         if (this.queue.length === 0) {
//             return 'not'
//         }
//         this.queue.shift();
//     }

//     peek(){
//         if (this.queue.length === 0) {
//             return 'not'
//         }
//         return this.queue[this.queue.length - 1];
//     }

//     isEmpty(){
//         return this.queue.length === 0;
//     }

//     AllData(){
//         let sortArr = [];
//         for (let i = 0; i < this.queue.length; i++) {
//             sortArr.push(this.queue[i]);
//         }
//         return sortArr;
//     }
// }


// // let ss = new queue();
// // ss.push(2);
// // ss.push(5);
// // ss.push(1);
// // ss.push(3);
// // ss.push(3);
// // console.log(ss.AllData());
// // ss.pop();
// // console.log(ss.AllData());
// // console.log(ss.peek());
// // // console.log(ss.isFull());

// //queue in stack
// class queueUs{
//     constructor(){
//         this.s1 = [];
//         this.s2 = [];
//     }

//     enqueue(x){
//         this.s1.push(x);
//     }

//     AllData(){
//         return this.s1.concat(this.s2.reverse());
//     }    

//     dequeue(){
//         if (this.s2.length === 0) {
//             while (this.s1.length !== 0) {
//                 this.s2.push(this.s1.pop());
//             }
//         }
//         return this.s2.pop();
//     }
// }


// let ss = new queueUs();
// ss.enqueue(2);
// ss.enqueue(5);
// ss.enqueue(1);
// ss.enqueue(3);
// console.log(ss.dequeue());
// console.log(ss.AllData());


