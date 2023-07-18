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
 * Naive solution
 * T: O(n) | S: O(n)
 */
function hasCycle1(head: ListNode | null): boolean {
  const set = new Set<ListNode | null>([head])
  let cur: ListNode | null = head

  while (cur) {
    const next = cur.next
    if (set.has(next)) return true
    set.add(cur.next)
    cur = next
  }

  return false
}

/**
 * Optimized solution aka Floyd's Tortoise and Hare Algorithm
 */
function hasCycle2(head: ListNode | null): boolean {
  let p1 = head
  let p2 = head

  while (p1?.next && p2?.next?.next) {
    p1 = p1.next
    p2 = p2.next.next

    while (p1 === p2) return true
  }

  return false
}
