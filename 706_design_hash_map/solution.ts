class MyNode {
  key: number
  val: number
  next: MyNode | null

  constructor(key: number, val: number) {
    this.key = key
    this.val = val
    this.next = null
  }
}

class MyHashMap {
  arr: MyNode[]
  map: Record<number, number>

  constructor() {
    this.arr = Array.from<MyNode>({ length: 10 ** 4 }).fill(new MyNode(0, 0))
  }

  private hashing(key: number) {
    return key % this.arr.length
  }

  put(key: number, value: number): void {
    const index = this.hashing(key)
    let cur = this.arr[index]

    while (cur.next) {
      if (cur.next.key === key) {
        cur.next.val = value
        return
      }
      cur = cur.next
    }
    cur.next = new MyNode(key, value)
  }

  get(key: number): number {
    const index = this.hashing(key)
    let cur = this.arr[index]

    while (cur.next) {
      if (cur.next.key === key) {
        return cur.next.val
      }
      cur = cur.next
    }

    return -1
  }

  remove(key: number): void {
    const index = this.hashing(key)
    let cur = this.arr[index]

    while (cur.next) {
      if (cur.next.key === key) {
        cur.next = cur.next.next
        return
      }
      cur = cur.next
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
