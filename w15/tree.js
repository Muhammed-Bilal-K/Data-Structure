//tree
class Node {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    //empty
    isEmpty() {
        return this.root === null;
    }

    //insertion
    insert(value) {
        let newNodeData = new Node(value);
        if (this.isEmpty()) {
            this.root = newNodeData;
        } else {
            this.insertNODE(this.root, newNodeData);
        }
    }
    //with
    insertNODE(root, newNodeData) {
        if (newNodeData.value < root.value) {
            if (root.left === null) {
                root.left = newNodeData;
            } else {
                this.insertNODE(root.left, newNodeData);
            }
        } else {
            if (root.right === null) {
                root.right = newNodeData;
            } else {
                this.insertNODE(root.right, newNodeData);
            }
        }
    }

    //search
    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    //TRAVELS
    //DFS
    //preOrder
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    //inorder
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    //postorder
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    //BFS
    levelOrder() {
        let queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            }
            if (!root.right) {
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    closestValue(root, target) {
        let closest = root.value;
        while (root !== null) {
            if (Math.abs(target - root.value) < Math.abs(target - closest)) {
                closest = root.value;
            }

            if (target < root.value) {
                root = root.left;
            } else if (target > root.value) {
                root = root.right;
            } else {
                break;
            }
        }
        return closest;
    }

    isValidBST() {
        return this.checkBST(this.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    }

    checkBST(node, min, max) {
        if (node === null) {
            return true; 
        }

        if (node.value <= min || node.value >= max) {
            return false;
        }
        
        return (
            this.checkBST(node.left, min, node.value) &&
            this.checkBST(node.right, node.value, max)
        );h 
    }

}

let bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// console.log(this.root);
console.log(bst.search(bst.root,5));
// console.log(bst.isValidBST());
// console.log(bst.closestValue(bst.root, 9));

// bst.levelOrder();
// bst.delete(3)
// bst.levelOrder();

// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));

// bst.preOrder(bst.root);
// console.log('///////////////////');
// bst.inOrder(bst.root);
// console.log('///////////////////');
// bst.postOrder(bst.root);
// console.log('///////////////////');

// console.log(bst.root);

