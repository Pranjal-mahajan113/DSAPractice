// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// let node1 = new Node(10);
// let node2 = new Node(20);
// let node3 = new Node(30);

// node1.next = node2;
// node2.next = node3;

// let head = node1;
// let T = head;
// while (T !== null) {
//   console.log(T.data);
//   T = T.next;
// }

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
node1.next = node2;
node2.next = node3;

let head = node1;

let node = new Node(4);
node.next = head;
head=node;

let T=head;
while(T!==null){
  console.log(T.data);
  T=T.next
}