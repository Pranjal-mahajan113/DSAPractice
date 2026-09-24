function deleteDuplicates(head) {
  let dummy = { val: 0, next: head };
  let current = dummy;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}
