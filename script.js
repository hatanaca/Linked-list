class Node {
    constructor(vaue){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);

        if(!this.root) {
            this.root = newNode;
            return this;
        }
    }
}