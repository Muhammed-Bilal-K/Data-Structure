

// class Stack {
//     constructor(size = 10) {
//         this.stack = [];
//         this.size = size;
//     }

//     pushdata(x) {
//         this.stack.push(x);
//     }

//     minValue() {
//         let minValue = undefined;
//         for (let i = 0; i < this.stack.length; i++) {
//             if (minValue == undefined) {
//                 minValue = this.stack[i];
//             } else if (minValue > this.stack[i]) {
//                 minValue = this.stack[i];
//             }
//         }
//         return minValue;
//     }

//     getAlldata(){
//         let allData = [];
//         for (let i = 0; i < this.stack.length; i++) {
//             if (this.stack[i]) {
//                 allData.push(this.stack[i]);
//             }
//         }
//         return allData;
//     }

//     isEmpty(){
//         return this.stack.length === 0;
//     }

//     popData(){
//         if (this.stack.length === 0) {
//             return 'stack Empty';
//         }
//         this.stack.pop();
//     }
// }

// let ss = new Stack();
// ss.pushdata(6);
// ss.pushdata(2);
// ss.pushdata(3);
// ss.pushdata(5);
// console.log(ss.minValue());
// console.log(ss.getAlldata());
// ss.popData();
// ss.popData();
// ss.popData();
// ss.popData();
// console.log(ss.popData());
// console.log(ss.isEmpty());
// console.log(ss.getAlldata());

