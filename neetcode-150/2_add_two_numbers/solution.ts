/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  random: ListNode | null

  constructor(val?: number, next?: ListNode | null, random?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0)
  let current = dummy
  let carry = 0

  while (l1 || l2) {
    let num1 = l1?.val ?? 0
    let num2 = l2?.val ?? 0

    // Add a new digit
    let sum = num1 + num2 + carry
    carry = Math.trunc(sum / 10)
    sum = sum % 10
    const node = new ListNode(sum)
    current.next = node

    // Update pointers
    current = node
    l1 = l1?.next ?? null
    l2 = l2?.next ?? null
  }

  if (carry > 0) {
    const tail = new ListNode(carry)
    current.next = tail
  }

  return dummy.next
}
