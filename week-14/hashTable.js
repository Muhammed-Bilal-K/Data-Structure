class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total = total + key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key,value){
        let index = this.hash(key);
        this.table[index] = value;
    }

    get(key){
        let index = this.hash(key);
        return this.table[index];
    }

    remove(key){
        let index = this.hash(key);
        this.table[index] = undefined;
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i,this.table[i]);
            }
        }
    }
}

// let ht = new HashTable(5);
// ht.set('name','bruce');
// ht.set('name','bru');
// ht.set('name','bruc');
// ht.set('name','b');
// // ht.remove('name')
// console.log(ht.get('name'));
// ht.display();

class HASHTABLE{
    constructor(size){
        this.table = new Array(size);
        this.size = size; 
    }

    hash(key){
        let count = 0;
        for (let i = 0; i < key.length; i++) {
            count += key.charCodeAt(i);
        }
        return count % this.size;
    }

    set(key,value){
        let index = this.hash(key);
        let bucket = this.table[index];

        if (!bucket) {
            this.table[index] = [[key,value]];
        }else{
            let sameItem = bucket.find(item => item[0] === key)
            if (sameItem) {
                sameItem[1] = value;
            }else{
                bucket.push([key,value]);
            }
        }
    }

    get(key){
        let index = this.hash(key);
        let bucket = this.table[index];

        if (bucket) {
            let samedata = bucket.find(item => item[0] === key);
            if (samedata) {
                return samedata[1];
            }
        }
        return undefined;
    }

    remove(key){
        let index = this.hash(key);
        let bucket = this.table[index];

        if (bucket) {
            let samedata = bucket.find(item => item[0] === key);
            if (samedata) {
                bucket.splice(bucket.indexOf(samedata),1);
            }
        }
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i,this.table[i]);
            }
        }
    }
}

let hh = new HASHTABLE(5);
hh.set('nam','jack');
hh.set('naae','jak');
hh.set('nafe','jac');
// console.log(hh.get('name'));
hh.remove('nafe')
hh.display();




