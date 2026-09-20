function reversedList(head) {
  let prev = null;
  let cureent = head;
  while (cureent !== null) {
    let next = cureent.next;
    cureent.next = prev;
    prev = cureent;
    cureent = next;
  }
}
