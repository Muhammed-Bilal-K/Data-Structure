let arr = [1,2,3,5,6];

// // console.log(arr.splice(1,3));

// // let h = arr.reverse().join('');
// // console.log(h);

// console.log(arr);



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

    
}

const tt = new LinkedList();
tt.insertFirst(100);
tt.insertFirst(100);
tt.insertFirst(100);
tt.insertFirst(100);
tt.printListData();
// function arrypass(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         tt.insertFirst(arr[i]);
//     }
// }

// arrypass(arr);

// tt.printListData();