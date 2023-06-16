/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class MyNode {
  public key: number
  public value: number
  public next: MyNode | null
  public prev: MyNode | null

  constructor(key: number, value: number) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  public capacity: number
  public cache: Map<number, MyNode>
  public left: MyNode
  public right: MyNode

  constructor(capacity: number) {
    this.capacity = capacity
    this.left = new MyNode(0, 0)
    this.right = new MyNode(0, 0)
    this.left.next = this.right
    this.right.prev = this.left
    this.cache = new Map()
  }

  insert(node: MyNode) {
    const prev = this.right.prev
    if (prev) {
      prev.next = node
      node.prev = prev
    } else {
      node.prev = this.left
      this.left.next = node
    }

    node.next = this.right
    this.right.prev = node
    this.cache.set(node.key, node)
  }
  // remove the lease recently used node
  remove(node: MyNode) {
    const [prev, next] = [node.prev, node.next]
    if (prev) {
      prev.next = next
    }
    if (next) {
      next.prev = prev
    }

    this.cache.delete(node.key)
  }

  get(key: number): number {
    const node = this.cache.get(key)
    if (node) {
      this.remove(node)
      this.insert(node)
      return node.value
    }
    return -1
  }

  put(key: number, value: number): void {
    const node = this.cache.get(key)
    if (node) {
      node.value = value
      this.remove(node)
      this.insert(node)
    } else {
      const node = new MyNode(key, value)
      this.insert(node)
    }

    if (this.cache.size > this.capacity) {
      const lru = this.left.next
      if (lru) {
        this.remove(lru)
      }
    }
  }
}
