class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true){
            if(newNode.value > temp.value){
                if(!temp.left) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if(!temp.right){
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }
    contains(value) {
        if(!this.root) return false;
        let temp = this.root;
        while(temp) {
            if(value > temp){
                temp = temp.left;
            } else if(value < temp){
                temp = temp.right;
            } else return true;
        }
        return false;
    }
    BFS(){
        let currentNode = this.root;
        let results = [];
        let queue = [];
        queue.push(currentNode)

        while(queue.length) {
            currentNode = queue.shift();
            results.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        return results;
    }
}