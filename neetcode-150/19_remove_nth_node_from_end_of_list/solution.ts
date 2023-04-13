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
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
/**
 * Time: O(n) | Space: O(1)
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head)

  let left: ListNode | null = dummy
  let right: ListNode | null = head
  for (let i = 0; i < n; i++) {
    right = right!.next
  }

  while (right) {
    right = right.next
    left = left!.next
  }

  // Remove the node
  left!.next = left!.next!.next

  return dummy.next
}
