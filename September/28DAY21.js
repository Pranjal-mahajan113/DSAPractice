function mergeTwolist(list1, list2) {
  let dummy = new Listnode(0);
  let current = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      current = current.next;
      list1 = list1.next;
    } else {
      current.next = list2;
      current = current.next;
      list2 = list2.next;
    }
  }
  current.next = list1 !== null ? list1 : list2;
  return dummy.next;
}
