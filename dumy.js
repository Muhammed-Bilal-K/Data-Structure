class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(data){
        this.head = new Node(data,this.head);
        this.size++;
    }

    printData(){
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }


    insertLast(data){
        let current = this.head;
        let node = new Node(data);
        if (!this.head) {
            this.head = node
        }else{
            while (current.next) {
                    current = current.next;
                }
            current.next = node;
        }
        this.size++;
    }

    insertAt(data,index){
        let count = 0;
        let node = new Node(data);
        let previous;
        let current = this.head;

        if (index === 0) {
            this.head = new Node(data,this.head);
            return;
        }
            while (count < index) {
                previous = current;
                count++;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
            this.size++;
    }

    removedata(index){
        
    }

}

const tt = new LinkedList()

tt.insertFirst(100);
tt.insertFirst(200);
tt.insertFirst(300);
// tt.insertLast(800);
tt.insertAt(8030,1);
tt.printData();