class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function getKth(cur: ListNode | null, k: number) {
  while (cur && k > 0) {
    cur = cur.next
    k--
  }
  return cur
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const dummy = new ListNode(0, head)
  let groupPrev: ListNode = dummy

  while (true) {
    const kth = getKth(groupPrev, k)
    if (!kth) break

    const groupNext = kth.next
    // reverse the group
    let prev = kth.next
    let cur = groupPrev.next

    while (cur && cur !== groupNext) {
      const temp = cur.next
      cur.next = prev
      prev = cur
      cur = temp
    }
    const temp = groupPrev.next
    if (temp) {
      groupPrev.next = kth
      groupPrev = temp
    }
  }
  return dummy.next
}
