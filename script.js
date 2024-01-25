class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(value){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    printList() {
        let temp = this.head;
        while (temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
    getHead(){
        if (!this.head) return console.log("Head: null");
        else {
            console.log("Head: " + this.head.value);
        }
    }
    getTail(){
        if(!this.tail) return console.log("Tail: null");
        else {
            console.log("Tail: " + this.tail.value);
        }
    }
    getLength(){
        console.log("Lenght is: " + this.length);
    }
    makeEmpty(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.length === 0) return undefined;
        let temporarioNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }
    unshift(value){
        let temporarioNode = new Node(value);
        if(this.length === 0) {
            this.head = temporarioNode;
            this.tail = temporarioNode;
        }else{
            temporarioNode.next = this.head;
            this.head.prev = temporarioNode;
            this.head = temporarioNode;
        }
        this.length++;
        return this;
    }
    shift(){
        if(this.length === 0) return undefined;
        let temporario = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            temporario.next = null;
        }
        this.length--;
        return temporario;
    }
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let temporarioNode = this.head;
        if(index < this.length/2){
            for(let i = 0; i < index;i++) {
                temporarioNode = temporarioNode.next;
            }
        }else {
            temporarioNode = this.tail;
            for(let i = this.length - 1; i > index;i--){
                temporarioNode = temporarioNode.prev;
            }
        }
        return temp;
    }
    set(index, value) {
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.value = value;
            return true;
        }
    }
    insert(index, value){
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);

        let newNode = new Node(value);
        let beforeNode  = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return newNode;
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length) return this.pop();

        let temporario = this.get(index);

        temporario.prev.next = temporario.next;
        temporario.next.prev = temporario.prev;
        temporario.next = null;
        temporario.prev = null;

        this.length--;
        return temporario;
    }
}



            // let contador = 0
            // while(contador < index) {
            //     temporarioNode = temporarioNode.next;
            //     contador++;
            // }
            // return temporarioNode;

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     printList(){
//         let temp = this.head;
//         while(temp != null) {
//             console.log(temp.value)
//             temp = temp.next;
//         }
//     }
//     getHead(){
//         if(!this.head) return console.log("Head: null");
//         else return console.log("Head value is: "+ this.head.value)
//     }
//     getTail(){
//         if(!this.tail) return console.log("Tail: null");
//         else return console.log("Tail: " + this.tail.value)
//     }
//     getLenght(){
//         console.log("Lenght: " + this.length)
//     }
//     push(value){
//         let newNode = new Node(value)
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         }else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     pop(){
//         if(this.length === 0) return undefined;
//         let atual = this.head;
//         let anterior = atual;
//         while(atual){
//             anterior = atual;
//             atual = atual.next;
//         }
//         this.tail = anterior;
//         this.tail.next = null;
//         this.length--;
//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return atual;
//     }
//     unshift(value){
//         let newNode = new Node(value);
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     shift(){
//         if(this.length === 0) return undefined;
//         let temp = this.head;
//         this.head = this.head.next;
//         this.length--;
//         if(this.length === 0) {
//             this.tail = null;
//         }
//         temp.next = null;
//         return temp
//     }
//     get(index){
//         if(index < 0 || index > this.length) return undefined;
//         let atual = this.head;
//         let contador = 0;
//         while(contador < index){
//             atual = atual.next;
//         }
//         return atual;
//     }
//     set(index, value) {
//         let foundNode = this.get(index)
//         if(index){
//             foundNode.value = value;
//         }
//         return value
//     }
//     insert(index, value){
//         if(index < 0 || index > this.length) return undefined;
//         if(index === 0) return !!this.unshift(value);
//         if(index === this.length) return !! this.push(value);

//         let foundNode = this.get(index - 1);
//         let newNode = new Node(value);

//         newNode.next = foundNode.next;
//         foundNode.next = newNode;
//         this.length++;
//         return true;
//     }
//     reverse(){
//         let tempNode = this.head;
//         this.head = this.tail;
//         this.tail = tempNode;

//         let anterior = null;
//         let proximoNode = tempNode.next;

//         for(let i = 0; i < this.length; i++){
//             proximoNode = tempNode.next;
//             tempNode.next = anterior;
//             anterior = tempNode;
//             tempNode = proximoNode;
//         }
//     }
// }




// // class Node {
// //     constructor(data) {
// //         this.data = data;
// //         this.next = null;
// //     }
// // }

// // class SinglyLinkedList {
// //     constructor() {
// //         this.head = null;
// //         this.tail = null;
// //         length = 0;
// //     }

// //     push(data) {
// //         let newNode = new Node(data);
// //         if (!this.head) {
// //             this.head = node;
// //             this.tail = this.head;
// //         } else {
// //             this.tail.next = newNode;
// //             this.tail = newNode;
// //         }
// //         this.length++;
// //         return this;
// //     }
// //     pop() {
// //         if (!this.head) return undefined;
// //         let current = this.head;
// //         let newTail = current;
// //         while (current.next) {
// //             newTail = current;
// //             current = current.next
// //         }
// //         this.tail = newTail;
// //         this.tail.next = null;
// //         this.length--;
// //         if (this.length === 0) {
// //             this.head = null;
// //             this.tail = null;
// //         }
// //         return current;
// //     }
// //     shift() {
// //         if (!this.head) return undefined;
// //         let currentHead = this.head;
// //         currentHead = this.head.next;
// //         this.length--;
// //         if (this.length === 0) {
// //             this.tail = null
// //         }
// //         return currentHead;
// //     }
// //     unshift(data) {
// //         let newNode = new Node(data);
// //         if (!this.head) {
// //             this.head = newNode;
// //             this.tail = this.head;
// //         }
// //         newNode.next = this.head;
// //         this.head = newNode;
// //         this.length++
// //         return true
// //     }
// //     get(index) {
// //         if (index < 0 || index >= this.length) return undefined;
// //         let contador = 0;
// //         let current = this.head;
// //         while (contador < index) {
// //             current = current.next;
// //             contador++
// //         }
// //         return current;
// //     }
// //     set(index, data) {
// //         let foundNode = this.get(index);
// //         if (foundNode) {
// //             foundNode.data = data;
// //             return true;
// //         }
// //     }
// //     insert(index, data) {
// //         if (index === this.length) return !!this.push(data)
// //         if (index > this.length || index < 0) return false;
// //         if (index === 0) return !!this.unshift(data);

// //         let newNode = new Node(data);
// //         let anterior = this.get(index - 1);
// //         let temporario = anterior.next;
// //         anterior.next = newNode;
// //         newNode.next = temporario;
// //         this.length++;
// //         return true;
// //     }
// //     remove(index){
// //         if(index < 0 || index < this.length) return undefined;
// //         if(index === 0) return !!this.shift();
// //         if(index === this.length - 1) return !!this.pop();

// //         let anterior = this.get(index -1);
// //         let removed = anterior.next;
// //         anterior.next = proximo.next;
// //         this.length--;
// //         return removed;
// //     }
// //     reverse(){
// //         var node = this.head;
// //         this.head = this.tail;
// //         this.tail = node;

// //         let anterior = null, proximo;
// //         for(let i = 0; i < this.length; i++){
// //             proximo = node.next;
// //             node.next = anterior;
// //             anterior = node;
// //             node = proximo;
// //         }
// //         return this;
// //     }
// //     print(){
// //         let array = [];
// //         let atual = this.head;
// //         let contador = 0;
// //         while(current){
// //         array.push(atual);
// //         atual = atual.next;
// //     }
// //     console.log(array);

// //     }


// // }


// // // class Node {
// // //     constructor(data) {
// // //         this.data = data;
// // //         this.next = null;
// // //     }
// // // }

// // // class SinglyLinkedList {
// // //     constructor() {
// // //         this.head = null;
// // //         this.tail = null;
// // //         this.length = 0;
// // //     }
// // //     push(data) {
// // //         var newNode = new Node(data);
// // //         if (!this.head) {
// // //             this.head = newNode;
// // //             this.tail = this.head;
// // //         } else {
// // //             this.tail.next = newNode;
// // //             this.tail = newNode;
// // //         }
// // //         this.length++;
// // //         return this
// // //     }
// // //     pop(){
// // //         if(!this.head) return undefined;
// // //         var current = this.head;
// // //         var newTail = current;
// // //         while(current.next){
// // //             newTail = current;
// // //             current = current.next;
// // //         }
// // //         this.tail = newTail;
// // //         this.tail.next = null;
// // //         this.length--;
// // //         if(this.length === 0){
// // //             this.head = null;
// // //             this.tail = null;
// // //         }
// // //         return current;
// // //     }
// // //     shift(){
// // //         if(!this.head) return undefined;
// // //         var currentHead = this.head;
// // //         this.head = currentHead.next;
// // //         this.length--;
// // //         if(this.length === 0){
// // //             this.tail = null;
// // //         }
// // //         return currentHead;
// // //      }
// // //      unshift(data){
// // //         var newNode = new Node(data);
// // //         if(!this.head) {
// // //             this.head = newNode;
// // //             this.tail = this.head;
// // //         }
// // //         newNode.next = this.head;
// // //         this.head = newNode;
// // //         this.length++;
// // //         return this;
// // //      }
// // //      get(index){
// // //         if(index < 0 || index >= this.length) return null;
// // //         var counter = 0;
// // //         current = this.head;
// // //         while(counter !=index){
// // //             current = current.next;
// // //             counter++;
// // //         }
// // //         return current;
// // //      }
// // //      set(index, data) {
// // //         var foundNode = this.get(index);
// // //         if(foundNode){
// // //             foundNode.data = data;
// // //             return true;
// // //         }
// // //         return false;
// // //      }
// // //      insert(index, data){
// // //         if(index < 0 || index > this.length) return false;
// // //         if(index === this.length) return !!this.push(data);
// // //         if(index === 0) return !!this.unshift(data);

// // //         var newNode = new Node(data);
// // //         var prev = this.get(index - 1);
// // //         var temp = prev.next;
// // //         prev.next = newNode;
// // //         newNode.next = temp;
// // //         this.length++;
// // //         return true;
// // //      }
// // //      remove(index){
// // //         if(index < 0 || index >= this.length) return undefined;
// // //         if(index === 0) return this.shift();
// // //         if(index === this.length - 1) return this.pop();
// // //         var previousNode = this.get(index - 1);
// // //         var removedNode = previousNode.next;
// // //         previousNode = removedNode.next;
// // //         this.length--;
// // //         return removedNode;
// // //      }
// // //      reverse(){
// // //         var node = this.head;
// // //         this.head = this
// // //      }

// // // }

// // // var objt = new SinglyLinkedList;

// // // console.log(objt);  



