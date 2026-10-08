class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // 1. Get value at index
    get(index) {
        if (index < 0 || index >= this.size) {
            return -1;
        }

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current.val;
    }

    // 2. Add at head
    addAtHead(val) {
        let newNode = new Node(val);

        newNode.next = this.head;
        this.head = newNode;

        this.size++;
    }

    // 3. Add at tail
    addAtTail(val) {
        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.size++;
    }

    // 4. Add at index
    addAtIndex(index, val) {
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.addAtHead(val);
            return;
        }

        if (index === this.size) {
            this.addAtTail(val);
            return;
        }

        let newNode = new Node(val);

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;

        this.size++;
    }

    // 5. Delete at index
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        current.next = current.next.next;

        this.size--;
    }
}
