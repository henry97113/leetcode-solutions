class MyListNode {
  val: number
  prev: MyListNode | null
  next: MyListNode | null

  constructor(val: number) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

class MyLinkedList {
  left: MyListNode
  right: MyListNode

  constructor() {
    this.left = new MyListNode(0)
    this.right = new MyListNode(0)
    this.left.next = this.right
    this.right.prev = this.left
  }

  get(index: number): number {
    let cur = this.left.next

    while (cur && index > 0) {
      cur = cur.next
      index--
    }

    if (index === 0 && cur && cur !== this.right) {
      return cur.val
    }

    return -1
  }

  addAtHead(val: number): void {
    const [prev, next, node] = [this.left, this.left.next, new MyListNode(val)]
    node.next = next
    if (next) next.prev = node
    node.prev = prev
    prev.next = node
  }

  addAtTail(val: number): void {
    const [prev, next, node] = [
      this.right.prev,
      this.right,
      new MyListNode(val),
    ]
    node.next = next
    next.prev = node
    node.prev = prev
    if (prev) prev.next = node
  }

  addAtIndex(index: number, val: number): void {
    let cur = this.left.next

    while (cur && index > 0) {
      cur = cur.next
      index--
    }

    if (index === 0 && cur) {
      const [prev, next, node] = [cur.prev, cur, new MyListNode(val)]
      node.next = next
      next.prev = node
      node.prev = prev
      if (prev) prev.next = node
    }
  }

  deleteAtIndex(index: number): void {
    let cur = this.left.next

    while (cur && index > 0) {
      cur = cur.next
      index--
    }

    if (index === 0 && cur && cur !== this.right) {
      const [prev, next] = [cur.prev, cur.next]
      if (prev) prev.next = next
      if (next) next.prev = prev
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
