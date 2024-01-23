class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(data) {
        var newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
     }
     unshift(data){
        var newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
     }
     get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        current = this.head;
        while(counter !=index){
            current = current.next;
            counter++;
        }
        return current;
     }
     set(index, data) {
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.data = data;
            return true;
        }
        return false;
     }
     insert(index, data){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(data);
        if(index === 0) return !!this.unshift(data);

        var newNode = new Node(data);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
     }
     remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removedNode = previousNode.next;
        previousNode = removedNode.next;
        this.length--;
        return removedNode;
     }
     reverse(){
        var node = this.head;
        this.head = this
     }

}

var objt = new SinglyLinkedList;

console.log(objt);  



