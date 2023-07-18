class MyNode {
  val: number
  next: MyNode | null
  constructor(val: number) {
    this.val = val
    this.next = null
  }
}

class MyQueue {
  size: number
  first: MyNode | null
  last: MyNode | null
  constructor() {
    this.size = 0
    this.first = null
    this.last = null
  }
  enqueue(val: number) {
    const node = new MyNode(val)
    if (this.size === 0) {
      this.first = node
    } else {
      const prevNode = this.last!
      prevNode.next = node
    }
    this.last = node
    return ++this.size
  }
  dequeue() {
    if (this.size === 0) return null
    const removed = this.first!
    if (this.size === 1) {
      this.last = null
    }
    this.first = removed.next
    this.size--
    return removed.val
  }
}

class MyStack {
  queue: MyQueue

  constructor() {
    this.queue = new MyQueue()
  }

  push(x: number): void {
    this.queue.enqueue(x)
  }

  pop(): number {
    let steps = this.queue.size - 1
    while (steps > 0) {
      this.queue.enqueue(this.queue.dequeue()!)
      steps--
    }
    return this.queue.dequeue()!
  }

  top(): number {
    return this.queue.last?.val ?? 0
  }

  empty(): boolean {
    return this.queue.size === 0
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
