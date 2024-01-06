class Node{
    constructor(){
        this.children = {};
        this.isWordEnd = false;
    }
}

class TRIE{
    constructor(){
        this.root = new Node();
    }

    insertData(word){
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let insertData = word[i];
            if (!(insertData in curr.children)) {
                curr.children[insertData] = new Node();
            }
            curr = curr.children[insertData];
        }
        curr.isWordEnd = true;
    }

    Contain(word){
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let findData = word[i];
            if (!(findData in curr.children)) {
                return null;
            }
            curr = curr.children[findData];
        }
        return curr.isWordEnd;
    }
}

let trie = new TRIE();
trie.insertData('apple');
trie.insertData('orange');
trie.insertData('mango');
console.log(trie.Contain('app'));