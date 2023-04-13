/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
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

/**
 * T: O(n), S: O(n)
 */
function copyRandomList1(head: ListNode | null): ListNode | null {
  const stack: (ListNode | null)[] = []
  const random: (ListNode | null)[] = []

  const dummy = new ListNode(0)
  let tmp = head
  let cur: ListNode | null = dummy

  while (tmp && cur) {
    const copiedNode = new ListNode(tmp.val)
    cur.next = copiedNode
    stack.push(tmp)
    random.push(copiedNode)

    tmp = tmp.next
    cur = cur.next
  }

  tmp = head
  cur = dummy.next

  while (tmp && cur) {
    const randomNodeIndex = stack.indexOf(tmp.random)
    if (randomNodeIndex === -1) {
      cur.random = null
    } else {
      cur.random = random[randomNodeIndex]
    }

    tmp = tmp.next
    cur = cur.next
  }

  return dummy.next
}

/**
 * Optimized from solution 1
 * T: O(n), S: O(n)
 */
function copyRandomList2(head: ListNode | null): ListNode | null {
  const hashMap = new Map<ListNode | null, ListNode | null>()
  // handle the edge case that `next` or `random` can be null
  hashMap.set(null, null)

  let cur: ListNode | null = head

  while (cur) {
    const copy = new ListNode(cur.val)
    hashMap.set(cur, copy)
    cur = cur.next
  }

  cur = head
  while (cur) {
    const copy = hashMap.get(cur) as ListNode
    copy.next = hashMap.get(cur.next) as ListNode | null
    copy.random = hashMap.get(cur.random) as ListNode | null
    cur = cur.next
  }

  return hashMap.get(head) as ListNode | null
}
