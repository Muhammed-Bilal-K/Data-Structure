// class Node{
//     constructor(data,next = null){
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
// }


// const ll = new LinkedList();
// ll.insertFirst(100);
// ll.insertFirst(200);


// console.log(ll);



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

//     insertFirst(data) {
//         this.head = new Node(data, this.head);
//         this.size++;
//     }

//     printallNode() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }

//     insertLastnode(data) {
//         let node = new Node(data);
//         let current;
//         if (!this.head) {
//             this.head = node;
//         } else {
//             current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = node;
//         }
//         this.size++;
//     }
// }


// const ll = new LinkedList();
// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertLastnode(300)
// ll.printallNode();




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

    insertData(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    printData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    insertLast(data) {
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertDataAt(data, index) {
        if (index < 0 && index > this.size) {
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            this.size++;
            return;
        }

        let count = 0;
        let current
        let previous;
        let node = new Node(data);
        
        current = this.head;
        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;
        this.size++;
    }

    getadd(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
    }

    removeData(index) {
        if (index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                previous = current;
                count++;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

}



const ll = new LinkedList();
ll.insertData(100);
ll.insertData(200);
ll.insertLast(400);
ll.insertDataAt(700,2);
// ll.getadd(2)
// ll.removeData(1);
ll.printData();