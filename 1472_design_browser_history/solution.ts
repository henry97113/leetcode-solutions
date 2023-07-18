class Entry {
  val: string
  prev: Entry | null
  next: Entry | null

  constructor(val: string) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

class BrowserHistory {
  cur: Entry
  left: Entry
  right: Entry

  constructor(homepage: string) {
    this.left = new Entry('0')
    this.right = new Entry('0')
    this.cur = new Entry(homepage)
    this.cur.prev = this.left
    this.left.next = this.cur
    this.cur.next = this.right
    this.right.prev = this.cur
  }

  visit(url: string): void {
    const entry = new Entry(url)
    this.cur.next = entry
    entry.prev = this.cur
    entry.next = this.right
    this.right.prev = entry
    this.cur = this.cur.next
  }

  back(steps: number): string {
    let cur: Entry | null = this.cur
    while (cur && steps > 0) {
      cur = cur.prev
      steps--
    }
    if (cur && cur !== this.left) {
      this.cur = cur
    } else {
      this.cur = this.left.next as Entry
    }
    return this.cur.val
  }

  forward(steps: number): string {
    let cur: Entry | null = this.cur
    while (cur && steps > 0) {
      cur = cur.next
      steps--
    }
    if (cur && cur !== this.right) {
      this.cur = cur
    } else {
      this.cur = this.right.prev as Entry
    }
    return this.cur.val
  }
}
