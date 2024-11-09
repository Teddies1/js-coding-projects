class LLNode {
    value = null;
    nextNode = null;

    constructor(val) {
        this.val = val;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    append(value) {
        node = new newNode(value);
        curr = head;
        while (curr != null){
            curr = curr.nextNode;
        }
        node.nextNode = curr;
        curr.nextNode = node;

    }
    prepend(value) {
        node = new newNode(value);
        node.nextNode = head;
        this.head.nextNode = node;

    }
    size() { 
        count = 0;
        curr = head;
        while (curr != null){
            curr = curr.nextNode;
            count++;
        }
        return count;
    }
    head() {
        return this.head;
    }
    tail() {
        curr = head;
        while (curr != null){
            curr = curr.nextNode;
        }
        return curr;
    }
    at(index) {
        i = 0;
        curr = head;
        while (curr != null && i != index){
            curr = curr.nextNode;
            i++;
        }

        return curr
    }
    pop() {
        
    }
    contains(value) {

    }
    find(value) {

    }
    toString() {

    }
    insertAt(value, index) {

    }
    removeAt(index) {

    }
}
  