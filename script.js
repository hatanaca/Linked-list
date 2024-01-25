class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }
    enqueue(value) {
        let newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++
        return newNode;
    }

    dequeue() {
        if(this.length === 0) return undefined;
        let newNode = this.first;
        if(this.first === 1){
            this.first = null;
            this.last = null;
        }
        this.first = this.first.next;
        newNode.next = null;
        this.length--;
        
    }
}