class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
function hascycle(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

let node1 = new Node(3);
let node2 = new Node(2);
let node3 = new Node(0);
let node4 = new Node(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

console.log(hascycle(node1))