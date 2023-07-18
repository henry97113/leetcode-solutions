class TimeMap {
  private store: Record<string, [string, number][]> = {}
  constructor() {}

  set(key: string, value: string, timestamp: number): void {
    if (!this.store[key]) this.store[key] = []
    this.store[key].push([value, timestamp])
  }

  get(key: string, timestamp: number): string {
    const found = this.store[key]
    if (!found || found.length === 0) return ''

    let left = 0
    let right = found.length - 1
    let res = ''

    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2)

      // found[mid] => [value, timestamp]
      if (found[mid][1] <= timestamp) {
        res = found[mid][0]
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return res
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

const timeMap = new TimeMap()
timeMap.set('foo', 'bar', 1) // store the key "foo" and value "bar" along with timestamp = 1.
console.log(timeMap.get('foo', 1)) // return "bar"
console.log(timeMap.get('foo', 3)) // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set('foo', 'bar2', 4) // store the key "foo" and value "bar2" along with timestamp = 4.
console.log(timeMap.get('foo', 4)) // return "bar2"
console.log(timeMap.get('foo', 5)) // return "bar2"
