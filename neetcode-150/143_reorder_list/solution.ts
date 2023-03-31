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
 Do not return anything, modify head in-place instead.
 */

/**
 * First Solution
 * T: O(n) | S: O(n)
 */
function reorderList1(head: ListNode | null): void {
  const stack: ListNode[] = []
  let cur = head
  while (cur !== null) {
    stack.push(cur)
    cur = cur.next
  }

  let start = 0
  let end = stack.length - 1
  let first = true

  while (start < end) {
    if (first) {
      stack[start].next = stack[end]
      stack[end].next = null
      first = false
      start++
    } else {
      stack[end].next = stack[start]
      stack[start].next = null
      first = true
      end--
    }
  }
}

/**
 * Optimized Solution
 * T: O(n) | S: O(1)
 */
function reorderList2(head: ListNode | null): void {
  // Partition the list into two
  let slow: ListNode | null | undefined = head
  let fast: ListNode | null | undefined = head?.next

  while (fast && fast.next) {
    slow = slow?.next
    fast = fast?.next?.next
  }

  // Reverse the second partition
  if (!slow || !slow.next) return
  let second: ListNode | null = slow.next
  slow.next = null
  let prev: ListNode | null = null

  while (second) {
    let temp = second.next
    second.next = prev
    prev = second
    second = temp
  }

  // Merge the two halves
  let first: any = head
  second = prev

  while (second) {
    let temp1 = first.next
    let temp2 = second.next
    first.next = second
    second.next = temp1
    first = temp1
    second = temp2
  }
}
