
class Node {
    constructor(value){
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
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;

        while(true){
            if(value === current.value) return undefined;
            if(value > current.value){
                if(!current.right){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }else {
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
        }
    }
    find(value){
        if(!this.root) return false;
        let current = this.root, found = false;

        while(current && !found){
            if(value > current.value){
                current = current.right;
            }else if(value < current.value){
                current = current.left;
            }else {
                found = true;
            }
        }
        if(!found) return undefined
        return current;
    }
    constains(value){
        if(!this.root) return undefined;
        let current = this.root, found = false;

        while(current && !found){
            if(value > current.value){
                current = current.right;
            }else if(value < current.value){
                current = current.left;
            }else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        let node = this.root, data = [], queue = [];
        
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data; 
    }
    DFSPostOrder(){
        let data =[];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSinOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}