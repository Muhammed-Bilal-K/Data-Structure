// class Heap{
//     constructor(){
//         this.root = [];
//     }

//     getParentindex(i){
//         return Math.floor((i-1)/2);
//     }

//     getLeftchildIndex(i){
//         return i * 2 + 1;
//     }

//     getRightchildIndex(i){
//         return i * 2 + 2;
//     }

//     swap(index1,index2){
//         let temp = this.root[index1];
//         this.root[index1] = this.root[index2];
//         this.root[index2] = temp; 
//     }

//     push(value){
//         this.root.push(value);
//         this.heapifyUp();
//     }

//     heapifyUp(){
//         let currentIndex = this.root.length - 1;
//         while (this.root[currentIndex] > this.root[this.getParentindex(currentIndex)]) {
//             this.swap(currentIndex,this.getParentindex(currentIndex));
//             currentIndex = this.getParentindex(currentIndex);
//         }
//     }

//     remove() {
//         const roots = this.root[0];
//         this.root[0] = this.root.pop();
//         this.heapifyDown();
//         return roots;
//     }

//     heapifyDown() {
//         let index = 0;
//         while (this.getLeftchildIndex(index) < this.root.length) {
//             const leftChildIndex = this.getLeftchildIndex(index);
//             const rightChildIndex = this.getRightchildIndex(index);
//             const largerChildIndex = (rightChildIndex < this.root.length && this.root[rightChildIndex] > this.root[leftChildIndex]) ? rightChildIndex : leftChildIndex;

//             if (this.root[index] > this.root[largerChildIndex]) {
//                 break;
//             } else {
//                 this.swap(index, largerChildIndex);
//             }

//             index = largerChildIndex;
//         }
//     }
// }

// let heap = new Heap();
// heap.push(25);
// heap.push(5);
// heap.push(40);
// heap.push(70);
// heap.push(90);
// heap.push(44);
// // heap.push(25);
// // heap.remove();
// console.log(heap.root);



class Heap{
    constructor(){
        this.root = [];
    }

    getParentIndex(i){
        return Math.floor((i-1)/2);
    }

    getLeftindex(i){
        return i * 2 + 1;
    }

    getRightindex(i){
        return i * 2 + 2;
    }

    swap(index1,index2){
        let temp = this.root[index1];
        this.root[index1] = this.root[index2];
        this.root[index2] = temp;
    }

    insertData(value){
        this.root.push(value);
        this.heapifyUp();
    }

    heapifyUp(){
        let currentIndex = this.root.length - 1;
        while (this.root[currentIndex] > this.root[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex,this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    remove(){
        this.root[0] = this.root.pop();
        this.heapifyDown();
    }

    heapifyDown(){
        let index = 0;
        while (this.getLeftindex(index) < this.root.length) {
            const leftChildIndex = this.getLeftindex(index);
            const rightChildIndex = this.getRightindex(index);
            const largeChildIndex = (rightChildIndex < this.root.length && this.root[rightChildIndex] > this.root[leftChildIndex]) ? rightChildIndex : leftChildIndex;

            if (this.root[index] > this.root[largeChildIndex]) {
                break;
            }else{
                this.swap(index,largeChildIndex)
            }

            index = largeChildIndex;
        }
    }
}

let heap = new Heap();

heap.insertData(25);
heap.insertData(5);
heap.insertData(40);
heap.insertData(70);
heap.insertData(90);
heap.insertData(44);
heap.remove();

console.log(heap.root);