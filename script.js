class Node {
    constructor(){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;  
    }

    add(element) {
        let node = new Node(element);
        let current;

        if(this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {
        if(index < 0 || index > this.size) {
            return console.log("Pleass enter a valid index");
        }
        else {
            let node = new Node(element);
            let curr, prev;

            curr = this.head;
            
            if(index == 0) {
                node.next = this.head;
                this.head = node;
            }
            else {
                curr = this.head;
                let it = 0;

                while(it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
            node.next = curr;
            prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return console.log("Pleass entar a valid index")
        }
        else {
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            if(index == 0) {
                this.head = curr.next;
            } else {
                while(it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
        this.size--;
        }   
        return curr.next
    }
}