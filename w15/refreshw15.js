// // // //tree 

// // // class Node {
// // //     constructor(value, left = null, right = null) {
// // //         this.data = value;
// // //         this.left = left;
// // //         this.right = right;
// // //     }
// // // }

// // // class BST {
// // //     constructor() {
// // //         this.root = null;
// // //     }

// // //     isEmpty() {
// // //         return this.root === null;
// // //     }

// // //     insert(value) {
// // //         let newNodeData = new Node(value);
// // //         if (this.isEmpty()) {
// // //             this.root = newNodeData;
// // //         } else {
// // //             this._insertDATA(this.root, newNodeData);
// // //         }
// // //     }

// // //     _insertDATA(root, newNodeData) {
// // //         if (root.data > newNodeData.data) {
// // //             if (root.left === null) {
// // //                 root.left = newNodeData;
// // //             } else {
// // //                 this._insertDATA(root.left, newNodeData);
// // //             }
// // //         } else {
// // //             if (root.right === null) {
// // //                 root.right = newNodeData;
// // //             } else {
// // //                 this._insertDATA(root.right, newNodeData);
// // //             }
// // //         }
// // //     }

// // //     search(root, value) {
// // //         if (!root) {
// // //             return false;
// // //         }

// // //         if (root.data === value) {
// // //             console.log(value);
// // //             return true;
// // //         } else {
// // //             if (root.value > value) {
// // //                 return this.search(root.left, value);
// // //             } else {
// // //                 return this.search(root.right, value);
// // //             }
// // //         }
// // //     }

// // //     preOrder(root) {
// // //         if (root) {
// // //             console.log(root.data);
// // //             this.preOrder(root.left);
// // //             this.preOrder(root.right);
// // //         }
// // //     }

// // //     inOrder(root) {
// // //         if (root) {
// // //             this.inOrder(root.left);
// // //             console.log(root.data);
// // //             this.inOrder(root.right);
// // //         }
// // //     }

// // //     postOrder(root) {
// // //         if (root) {
// // //             this.postOrder(root.left);
// // //             this.postOrder(root.right);
// // //             console.log(root.data);
// // //         }
// // //     }

// // //     //bfs

// // //     levelOrder(){
// // //         let queue = [];
// // //         queue.push(this.root);
// // //         while (queue.length) {
// // //             let curr = queue.shift();
// // //             console.log(curr.data);
// // //             if (curr.left) {
// // //                 queue.push(curr.left);
// // //             }
// // //             if (curr.right) {
// // //                 queue.push(curr.right);
// // //             }
// // //         }
// // //     }

// // //     min(root){
// // //         if (!root.left) {
// // //             return root.data;
// // //         }else{
// // //             this.min(root.left);
// // //         }
// // //     }

// // //     max(root){
// // //         if (!root.right) {
// // //             return root.data;
// // //         }else{
// // //             this.max(root.right);
// // //         }
// // //     }

// // //     delete(value){
// // //         this.root = this.deleteData(this.root,value);
// // //     }

// // //     deleteData(root,value){
// // //         if (root === null) {
// // //             return root;
// // //         }
// // //         if (root.data > value) {
// // //             root.left = this.deleteData(root.left,value);
// // //         }else if(root.data < value){
// // //             root.right = this.deleteData(root.right,value);
// // //         }else{
// // //             if (!root.left && !root.right) {
// // //                 return null;
// // //             }
// // //             if (!root.left) {
// // //                 return root.right;
// // //             }
// // //             if (!root.right) {
// // //                 return root.left;
// // //             }

// // //             root.data = this.min(root.right);
// // //             root.right = this.deleteData(root.right,root.data);
// // //         }
// // //         return root;
// // //     }
// // // }

// // // let bst = new BST()
// // // bst.insert(3);
// // // bst.insert(2);
// // // bst.insert(6);
// // // bst.insert(5);
// // // // bst.levelOrder();
// // // bst.delete(6)
// // // bst.levelOrder();

// // // // bst.postOrder(bst.root);
// // // // console.log(bst.search(bst.root, 7));
// // // // console.log(bst.root);
// // // // console.log(bst.isEmpty());


// // class heap {
// //     constructor() {
// //         this.root = [];
// //     }

// //     getParentIndex(i) {
// //         return Math.floor((i - 1) / 2);
// //     }

// //     getLeftchildIndex(i) {
// //         return i * 2 + 1;
// //     }

// //     getrRightchildIndex(i) {
// //         return i * 2 + 2;
// //     }

// //     swap(i1, i2) {
// //         let temp = this.root[i1];
// //         this.root[i1] = this.root[i2];
// //         this.root[i2] = temp;
// //     }

// //     insert(value) {
// //         this.root.push(value);
// //         this.heapifyUp();
// //     }

// //     heapifyUp() {
// //         let currentIndex = this.root.length - 1;
// //         while (this.root[currentIndex] > this.root[this.getParentIndex(currentIndex)]) {
// //             this.swap(currentIndex, this.getParentIndex(currentIndex));
// //             currentIndex = this.getParentIndex(currentIndex);
// //         }
// //     }

// //     remove(){
// //         let curr = this.root[0];
// //         this.root[0] = this.root.pop();
// //         this.heapifydown();
// //         return curr;
// //     }

// //     heapifydown(){
// //         let index = 0;
// //         while (this.getLeftchildIndex[index] > this.root.length) {
// //             let leftChildIndex = this.getLeftchildIndex[index];
// //             let rightChildIndex = this.getrRightchildIndex[index];
// //             let largeChildIndex = (rightChildIndex < this.root.length && this.root[rightChildIndex] > this.root[leftChildIndex]) ? rightChildIndex : leftChildIndex;

// //             if (this.root[index] > this.root[largeChildIndex]) {
// //                 break;
// //             }else{
// //                 this.swap(index,largeChildIndex);
// //             }
// //             index = largeChildIndex;
// //         }
// //     }
// // }

// // let hp = new heap();
// // hp.insert(2)
// // hp.insert(4)
// // hp.insert(7)
// // hp.insert(5)
// // hp.remove()
// // console.log(hp.root);


// //trie
// class Node{
//     constructor(){
//         this.children = {};
//         this.isEnd = false;
//     }
// }

// class trie{
//     constructor(){
//         this.root = new Node();
//     }

//     insert(word){
//         let curr = this.root;
//         for (let i = 0; i < word.length; i++) {
//             let insertData = word[i];
//             if (!(insertData in curr.children)) {
//                 curr.children[insertData] = new Node();
//             }
//             curr = curr.children[insertData];
//         }
//         curr.isEnd = true;
//     }

//     insertFind(word){
//         let curr = this.root;
//         for (let i = 0; i < word.length; i++) {
//             let insertData = word[i];
//             if (!(insertData in curr.children)) {
//                 return false;
//             }
//             curr = curr.children[insertData];
//         }
//         return curr.isEnd;
//     }

//     SearchPrefix(word){
//         let curr = this.root
//         let words = [];
//         for (let i = 0; i < word.length; i++) {
//             let searchData = word[i];
//             if (!(searchData in curr.children)) {
//                 return words; 
//             }
//             curr = curr.children[searchData];
//         }
//         this.collection(curr,word,words);
//         return words;
//     }

//     collection(curr,word,words){
//         if (curr.isEnd) {
//             words.push(word);
//         }

//         for (let child in curr.children) {
//             this.collection(curr.children[child], word + child , words);
//         }
//     }
// }

// let tr = new trie();
// tr.insert('apple');
// tr.insert('apples');
// tr.insert('applem');
// console.log(tr.SearchPrefix('apple'));


class graph{
    constructor(){
        this.adjacentList = {};
    }

    addVertex(v){
        if (!this.adjacentList[v]) {
            this.adjacentList[v] = new Set();
        }
    } 

    addEdge(v1,v2){
        if (!this.adjacentList[v1]) {
            this.addVertex(v1);
        }
        if (!this.adjacentList[v2]) {
            this.addVertex(v2);
        }
        this.adjacentList[v1].add(v2);
        this.adjacentList[v2].add(v1);
    }

    display(){
        for (let vertex in this.adjacentList) {
            console.log(vertex + '->' + [...this.adjacentList[vertex]] );
        }
    }

    deleteEdge(v1,v2){
        this.adjacentList[v1].delete(v2) && this.adjacentList[v2].delete(v1)
    }

    deleteVertex(v){
        if (!this.adjacentList[v]) {
            return 
        }
        for (const vertex of this.adjacentList[v]) {
            this.deleteEdge(v,vertex);
        }

        delete this.adjacentList[v];
    }
}          

let gr = new graph()
gr.addVertex('a');
gr.addVertex('b');
gr.addEdge('a','b');
gr.deleteEdge('a','b');
gr.addVertex('c');
gr.addVertex('d');
gr.deleteVertex('d');
gr.display();

