// // function fibo(n){
// //     if(n < 2){
// //         return n;
// //     }
// //     return fibo(n-1) + fibo(n-2);
// // }



// // console.log(fibo(5));


// // function fibononcie(n) {
// //     if (n < 2) {
// //         return n;
// //     }
// //     return fibononcie(n - 1) + fibononcie(n - 2);
// // }
// // console.log(fibononcie(10));

// function fibonacciRecursive(n) {
//     if (n <= 0) {
//         return [];
//     } else if (n === 1) {
//         return [0];
//     } else if (n === 2) {
//         return [0, 1];
//     } else {
//         let fib = fibonacciRecursive(n - 1);
//         fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//         return fib;
//     }
// }

// // console.log(fibonacciRecursive(5));


// function isPrime(n) {
//     if (n < 2) {
//         return console.log('not prime');;
//     }
//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             console.log('not prime');
//             return;
//         }
//     }
//     return console.log('prime');;
// }

// // isPrime(6);

// function facto(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * facto(n - 1);
// }


// // console.log(facto(5));


// // function recfibo(n) {
// //     if (n === 0) {
// //         return [1];
// //     }
// //     if (n === 1) {
// //         return [1];
// //     }
// //     if (n === 2) {
// //         return [0,1];
// //     }else{
// //         let fib = recfibo(n-1);
// //         fib.push(fib[fib.length-1] + fib[fib.length-2]);
// //         return fib;
// //     }
// // }

// function fibdd(n) {
//     if (n < 2) {
//         return n;
//     }
//     return fibdd(n - 1) + fibdd(n - 2);
// }

// // console.log(fibdd(5));

// // let arr = [1, 3, 2, 4, 6, 7, 3, 5, 7, 8, 5, 3, 7, 8, 6, 4, 33, 5, 6, 8];
// // let target = 33;

// // function binaryS(arr, target) {
// //     arr.sort((a, b) => a - b);
// //     let min = 0;
// //     let max = arr.length - 1;
// //     while (min <= max) {
// //         let mid = Math.floor((min + max) / 2);
// //         if (arr[mid] == target) {
// //             console.log(target , mid);
// //             return;
// //         }
// //         if (arr[mid] < target) {
// //             min = mid + 1;
// //         }
// //         if (arr[mid] > target) {
// //             max = mid - 1;
// //         }
// //     }
// // }


// // binaryS(arr, target)


// class Node{
//     constructor(data,next = null)
//     {
//         this.data = data;
//         this.next = next;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     insertFirst(data){
//         this.head = new Node(data,this.head);
//         this.size++;
//     }

//     printData(){
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next; 
//         }
//     }

//     insertLast(data){
//         let node = new Node(data);
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = node;
//         this.size++;
//     }

//     insertDataIndex(data,index){
//         let current = this.head;
//         let previous;
//         let count = 0;
//         let node = new Node(data);
        
//         if (!this.head) {
//             this.head = node;
//         }else{
//             while (count < index) {
//                 previous = current;
//                 count++;
//                 current = current.next;
//             }
//             node.next = current;
//             previous.next = node;
//         }
//         this.size++;
//     }

//     deleteSpecific(index){
//         let count = 0;
//         let current = this.head;
//         let previous;

//         if (index === 0) {
//             this.head = current.next;
//         }

//         while (count < index) {
//             count++;
//             previous = current;
//             current = current.next;
//         }
//         previous.next = current.next;
//         this.size--;
//     }

//     deleteSpecificdata(data){
//         let current = this.head;
//         let prev = null;
//         while (current) {
//             if (current.data === data) {
//                 if (prev === null) {
//                     this.head = current.next;
//                 }else{
//                     prev.next = current.next;
//                 }
//                 this.size--;
//                 return;
//             }
//             prev = current;
//             current = current.next;
//         }
//         return false;
//     }

//     linkedSearch(data){
//         let current = this.head;
//         while (current) {
//             if (current.data === data) {
//                 console.log(current.data , 'founded!');
//                 return;
//             }
//             current = current.next;
//         }
//         return console.log('not found!');
//     }

//     removeDupliatess(){
//         let current = this.head;
//         while (current) {
//             let runner = current;
//             while (runner.next) {
//                 if (runner.next.data === current.data) {
//                     runner.next = runner.next.next;
//                     this.size--;
//                 }else{
//                     runner = runner.next;
//                 }
//             }
//             current = current.next;
//         }
//     }

//     clearLinked(){
//         this.head = null;
//         this.size = 0;
//     }

//     printFirstDATA(){
//         let current = this.head;
//         console.log(current.data, 'fff');
//         return;
//     }

//     printLastDATA(){
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         console.log(current.data, 'lll');
//     }
// }

// const tt = new LinkedList();
// tt.insertFirst(100);
// tt.insertFirst(200);
// tt.insertFirst(200);
// tt.insertFirst(300);
// tt.insertLast(400);
// // tt.printLastDATA();
// // tt.printFirstDATA();
// // tt.removeDupliatess();
// // tt.linkedSearch(500);
// // tt.insertDataIndex(500,2);
// // tt.deleteSpecific(2);
// // tt.clearLinked();
// // tt.deleteSpecificdata(400);
// // tt.printData();
// // console.log(tt);





