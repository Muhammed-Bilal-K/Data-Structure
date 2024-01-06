class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insertNode(value) {
        let data = new Node(value);
        if (this.isEmpty()) {
            this.root = data
        } else {
            this.insertNode(this.root, data);
        }
    }

    insert(root, data) {
        if (root.value > data.value) {
            if (root.left === null) {
                root.left = data;
            } else {
                return this.insert(root.left, data);
            }
        } else {
            if (root.right === null) {
                root.right = data;
            } else {
                return this.insert(root.right, data);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (root.left > value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    psotOrder(root) {
        if (root) {
            this.preOrder(root.left);
            this.preOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder(){
        let queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }

    min(root){
        if (!root.left) {
            return root.value;
        }else{
            return this.min(root.left);
        }
    }

    max(root){
        if (!root.left) {
            return root.value;
        } else {
            return this.max(root.left);
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if (root === null) {
            return root
        }

        if (root.value > value) {
            this.left = this.deleteNode(this.left,value);
        } else if(root.value < value) {
            this.right = this.deleteNode(this.right,value);
        }else{
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            }
            if (!root.right) {
                return root.left;
            }

            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right,root.value);
        }
        return root;
    }
}
