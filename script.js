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
        length = 0;
    }

    push(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        currentHead = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead;
    }
    unshift(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return true
    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let contador = 0;
        let current = this.head;
        while (contador < index) {
            current = current.next;
            contador++
        }
        return current;
    }
    set(index, data) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.data = data;
            return true;
        }
    }
    insert(index, data) {
        if (index === this.length) return !!this.push(data)
        if (index > this.length || index < 0) return false;
        if (index === 0) return !!this.unshift(data);

        let newNode = new Node(data);
        let anterior = this.get(index - 1);
        let temporario = anterior.next;
        anterior.next = newNode;
        newNode.next = temporario;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index < this.length) return undefined;
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();

        let anterior = this.get(index -1);
        let removed = anterior.next;
        anterior.next = proximo.next;
        this.length--;
        return removed;
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        let anterior = null, proximo;
        for(let i = 0; i < this.length; i++){
            proximo = node.next;
            node.next = anterior;
            anterior = node;
            node = proximo;
        }
        return this;
    }
    print(){
        let array = [];
        let atual = this.head;
        let contador = 0;
        while(current){
        array.push(atual);
        atual = atual.next;
    }
    console.log(array);

    }


}


// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(data) {
//         var newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this
//     }
//     pop(){
//         if(!this.head) return undefined;
//         var current = this.head;
//         var newTail = current;
//         while(current.next){
//             newTail = current;
//             current = current.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         if(this.length === 0){
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }
//     shift(){
//         if(!this.head) return undefined;
//         var currentHead = this.head;
//         this.head = currentHead.next;
//         this.length--;
//         if(this.length === 0){
//             this.tail = null;
//         }
//         return currentHead;
//      }
//      unshift(data){
//         var newNode = new Node(data);
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this;
//      }
//      get(index){
//         if(index < 0 || index >= this.length) return null;
//         var counter = 0;
//         current = this.head;
//         while(counter !=index){
//             current = current.next;
//             counter++;
//         }
//         return current;
//      }
//      set(index, data) {
//         var foundNode = this.get(index);
//         if(foundNode){
//             foundNode.data = data;
//             return true;
//         }
//         return false;
//      }
//      insert(index, data){
//         if(index < 0 || index > this.length) return false;
//         if(index === this.length) return !!this.push(data);
//         if(index === 0) return !!this.unshift(data);

//         var newNode = new Node(data);
//         var prev = this.get(index - 1);
//         var temp = prev.next;
//         prev.next = newNode;
//         newNode.next = temp;
//         this.length++;
//         return true;
//      }
//      remove(index){
//         if(index < 0 || index >= this.length) return undefined;
//         if(index === 0) return this.shift();
//         if(index === this.length - 1) return this.pop();
//         var previousNode = this.get(index - 1);
//         var removedNode = previousNode.next;
//         previousNode = removedNode.next;
//         this.length--;
//         return removedNode;
//      }
//      reverse(){
//         var node = this.head;
//         this.head = this
//      }

// }

// var objt = new SinglyLinkedList;

// console.log(objt);  



