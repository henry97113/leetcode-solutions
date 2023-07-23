class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number) {
    this.val = val
    this.next = null
  }
}

class MyHashSet {
  set: ListNode[]

  constructor() {
    this.set = Array.from<ListNode>({ length: Math.pow(10, 4) }).fill(
      new ListNode(0)
    )
  }

  private hashing(key: number) {
    return key % this.set.length
  }

  add(key: number): void {
    const index = this.hashing(key)

    let cur = this.set[index]

    while (cur.next) {
      if (cur.next.val === key) return
      cur = cur.next
    }

    cur.next = new ListNode(key)
  }

  remove(key: number): void {
    const index = this.hashing(key)

    let cur = this.set[index]

    while (cur.next) {
      if (cur.next.val === key) {
        cur.next = cur.next.next
        return
      }
      cur = cur.next
    }
  }

  contains(key: number): boolean {
    const index = this.hashing(key)

    let cur = this.set[index]
    while (cur.next) {
      if (cur.next.val === key) return true
      cur = cur.next
    }
    return false
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
