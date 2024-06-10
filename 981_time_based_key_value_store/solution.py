class TimeMap:

    def __init__(self):
        self.cache = {} # key: [value, timestamp][]

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key not in self.cache:
            self.cache[key] = []
        self.cache[key].append([value, timestamp])

    def get(self, key: str, timestamp: int) -> str:
        values = self.cache.get(key, [])
        l, r = 0, len(values) - 1
        res = ''

        while l <= r:
            m = l + (r - l) // 2
            value, t = values[m]

            if t > timestamp:
                r = m - 1
            else:
                res = values[m][0]
                l = m + 1

        return res


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)
