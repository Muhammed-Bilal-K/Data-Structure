// array basic to expert
// 0,1,2,3,4,5,6,7
// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// var positionToDelete = 3; // Replace this with the position you want to delete

// if (positionToDelete >= 0 && positionToDelete < arr.length) {
//     arr.splice(positionToDelete, 1); // The second parameter (1) specifies the number of elements to delete
//     console.log("Element at position " + positionToDelete + " deleted. New array:", arr);
// } else {
//     console.log("Invalid position to delete.");
// }

// let out = arr.splice(3,0,6)

// console.log(arr);

// console.log(out);


///fibononcie////

// let n=7;
// let arr = [];
// let sum = 0;
// for (let i = 0; i < n; i++) {
//     sum = i + (i - 1);
//     arr.push(sum)
//     sum =0 ;
// }

// console.log(arr);

/////////////////////////////// LINKED LIST ////////////////////////////////

/////////////add new node///////////

// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
//     //INSERT FIRST NODE
//     insertFirst(data)
//     {
//         this.head = new Node(data, this.head);
//         this.size++;
//     }
// }


// const lt = new LinkedList();
// lt.insertFirst(100);
// lt.insertFirst(200);

// console.log(lt);



//////////////////PRINT THE LIST DATA ONLY///////////////////

// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }
//
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
//     //INSERT FIRST NODE
//     insertFirst(data)
//     {
//         this.head = new Node(data, this.head);
//         this.size++;
//     }
//     //PRINT THE ALL DATA
//     printListData(){
//         let current = this.head;

//         while(current){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }


// const lt = new LinkedList();
// lt.insertFirst(100);
// lt.insertFirst(200);
// lt.insertFirst(300);
// // console.log(lt);
// lt.printListData();


//////////////////////////INSERT LAST NODE///////////////////////////////

// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
//     //INSERT FIRST NODE
//     insertFirst(data)
//     {
//         this.head = new Node(data, this.head);
//         this.size++;
//     }
//     //PRINT THE ALL DATA
//     printListData()
//     {
//         let current = this.head;

//         while(current){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
//     //INSERT LAST NODE
//     insertLast(data)
//     {
//         let node = new Node(data);
//         let current;

//         //if empty , make head
//         if (!this.head) {
//             this.head = node
//         } else {
//             current = this.head;

//             while(current.next)
//             {
//                 current = current.next;
//             }
//             current.next = node;
//         }
//         this.size++;
//     }
// }


// const lt = new LinkedList();
// lt.insertFirst(100);
// lt.insertFirst(200);
// lt.insertFirst(300);
// lt.insertLast(400);
// // console.log(lt);
// lt.printListData();

///////////////////////////INSERT AT INDEX////////////////////////////////

// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
//     //INSERT FIRST NODE
//     insertFirst(data)
//     {
//         this.head = new Node(data, this.head);
//         this.size++;
//     }
//     //PRINT THE ALL DATA
//     printListData()
//     {
//         let current = this.head;

//         while(current){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
//     //INSERT LAST NODE
//     insertLast(data)
//     {
//         let node = new Node(data);
//         let current;

//         //if empty , make head
//         if (!this.head) {
//             this.head = node
//         } else {
//             current = this.head;

//             while(current.next)
//             {
//                 current = current.next;
//             }
//             current.next = node;
//         }
//         this.size++;
//     }

//     insertAt(data,index)
//     {
//         //if index is out of range
//         if (index > 0 && index > this.size) {
//             return;
//         }
//         //if first index
//         if (index === 0) {
//             this.head = new Node(data,this.head);
//             return;
//         }

//         const node = new Node(data);
//         let current, previous;

//         //set current to first
//         current = this.head;
//         let count = 0;

//         while(count < index)
//         {
//             previous = current //node before index
//             count++
//             current = current.next //node after index
//         }

//         node.next = current;
//         previous.next = node;

//         this.size++;
//     }
// }


// const lt = new LinkedList();
// lt.insertFirst(100);
// lt.insertFirst(200);
// lt.insertFirst(300);
// lt.insertLast(400);
// lt.insertAt(500,2)
// // console.log(lt);
// lt.printListData();

///////////////////////GET AT INDEX///////////////////


// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
//     //INSERT FIRST NODE
//     insertFirst(data)
//     {
//         this.head = new Node(data, this.head);
//         this.size++;
//     }
//     //PRINT THE ALL DATA
//     printListData()
//     {
//         let current = this.head;

//         while(current){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
//     //INSERT LAST NODE
//     insertLast(data)
//     {
//         let node = new Node(data);
//         let current;

//         //if empty , make head
//         if (!this.head) {
//             this.head = node
//         } else {
//             current = this.head;

//             while(current.next)
//             {
//                 current = current.next;
//             }
//             current.next = node;
//         }
//         this.size++;
//     }
//     //INSERT DATA
//     insertAt(data,index)
//     {
//         //if index is out of range
//         if (index > 0 && index > this.size) {
//             return;
//         }
//         //if first index
//         if (index === 0) {
//             this.head = new Node(data,this.head);
//             return;
//         }

//         const node = new Node(data);
//         let current, previous;

//         //set current to first
//         current = this.head;
//         let count = 0;

//         while(count < index)
//         {
//             previous = current //node before index
//             count++
//             current = current.next //node after index
//         }

//         node.next = current;
//         previous.next = node;

//         this.size++;
//     }
//     //GET INDEX DATA
//     getAt(index)
//     {
//         let current = this.head;
//         let count = 0;

//         while (current) {
//             if (count == index) 
//             {
//                 console.log(current.data);
//             }
//             count++;
//             current = current.next;
//         }
//         return null;
//     }
// }


// const lt = new LinkedList();
// lt.insertFirst(100);
// lt.insertFirst(200);
// lt.insertFirst(300);
// lt.insertLast(400);
// // lt.insertAt(500,2);
// lt.getAt(2)
// // console.log(lt);
// lt.printListData();



///////////////////////REMOVE AT INDEX///////////////////


class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {     
        this.head = null;
        this.size = 0;
    }
    //INSERT FIRST NODE
    insertFirst(data) {    ////////////////////////////
        this.head = new Node(data, this.head);
        this.size++;
    }
    //PRINT THE ALL DATA
    printListData() {      ///////////////////////////
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    //INSERT LAST NODE
    insertLast(data) {  /////////////////////////////////////////
        let node = new Node(data);
        let current;

        //if empty , make head
        if (!this.head) {
            this.head = node
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    //GET INDEX DATA
    getAt(index) {    ////////////////////////////////////
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }
    //INSERT AT INDEX
    insertAt(data, index) {   ///////////////////////////////////////
        //if index is out of range
        if (index > 0 && index > this.size) {
            return;
        }
        //if first index
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const node = new Node(data);
        let current, previous;
        //set current to first
        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current //node before index
            count++
            current = current.next //node after index
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }
    //REMOVE AT INDEX
    removeAt(index) {     ///////////////////////////////////////////////
        if (index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        //remove first
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    //SEARCH 
    searchData(data) {
        let current = this.head;

        while (current) {
            if (current.data === data) {
                console.log(`data found at ${data}`);
                return true;
            }
            current = current.next;
        }
        return false;
    }

    removeData(data) {
        let current = this.head;
        let prev = null;

        while (current) {
            if (current.data === data) {
                if (prev === null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }

    removeDuplicate(){
        let current = this.head;
        while(current){
            let runner = current;
            while (runner.next) {
                if (runner.next.data === current.data) {
                    runner.next = runner.next.next;
                    this.size--;
                }else{
                    runner = runner.next;
                }
            }
            current = current.next;
        }
    }

    // reverseData(){
    //     let current = this.head;
    //     let prev = null;
    //     while (current.next) {
    //         const nextnode = current.next;
    //         current.next = prev;
    //         prev = current
    //         current = nextnode;
    //     }
    // }


    //CLEAR LINKED LIST
    clearList() {
        this.head = null;
        this.size = 0;
    }
}


const lt = new LinkedList();
lt.insertFirst(100);
lt.insertFirst(200);
lt.insertFirst(300);
lt.insertFirst(300);
lt.removeDuplicate();
// lt.insertLast(400);
// lt.removeData(100);
// lt.reverseData();
// lt.removeAt(2);
// lt.searchData(200);
// lt.insertAt(500,2);
// lt.getAt(2)
// console.log(lt);
// lt.clearList();
lt.printListData();