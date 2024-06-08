class Node {
    constructor() {
        this.children = {};
        this.isWordEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
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

    contains(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let insertData = word[i];
            if (!(insertData in curr.children)) {
                return false;
            }
            curr = curr.children[insertData];
        }
        return curr.isWordEnd;
    }

    // searchPrefix(word) {
    //     let curr = this.root;
    //     let words = [];
        
    //     for (let i = 0; i < word.length; i++) {
    //         let searchP = word[i];
    //         if (!(searchP in curr.children)) {
    //             return words;
    //         }
    //         curr = curr.children[searchP];
    //     }
    //     this.collectSD(curr, word, words);
    //     return words;
    // }

    // collectSD(curr, word, words) {
    //     if (curr.isWordEnd) {
    //         words.push(word)
    //     }

    //     for (let child in curr.children) {
    //         this.collectSD(curr.children[child], word + child, words);
    //     }
    // }

    searchPrefix(word){
        let curr = this.root;
        let words = [];
        for(let i=0;i<word.length;i++)
        {
            let searchData = word[i];
            if(!(searchData in curr.children)){
                return words;
            }
            curr = curr.children[searchData];
        }
        this.collection(curr,word,words);
        return words;
    }
    
    collection(curr,word,words){
        if(curr.isWordEnd){
            words.push(word);
        }
        
        for(let child in curr.children){
            this.collection(curr.children[child],word + child , words);
        }
    }

    delete(word) {
        this.deleteWord(this.root, word, 0);
    }

    deleteWord(node, word, index) {
        if (!node) {
            return false;
        }
        if (index === word.length) {
            if (!node.isWordEnd) {
                return false;
            }
            node.isWordEnd = false;
            return Object.keys(node.children).length === 0;
        }
        let char = word[index];
        if (this.deleteWord(node.children[char], word, index + 1)) {
            delete node.children[char];
            return Object.keys(node.children).length === 0;
        }
    }

}


let tries = new Trie();
tries.insert("a");
tries.insert("b");
tries.insert("ab");
// tries.insert("appledddd");
// tries.insert("appledata");
// tries.insert("applemon");
// tries.delete("apple");
// console.log(tries.contains("apple"));
console.log(tries.root);
// console.log(tries.searchPrefix("app"));