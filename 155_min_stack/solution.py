class MinStack1:
    def __init__(self):
        self.stack = []

    def push(self, val: int) -> None:
        prevMin = self.stack[-1].get("currMin") if self.stack else val
        self.stack.append({"val": val, "currMin": min(val, prevMin)})

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-1].get("val")

    def getMin(self) -> int:
        return self.stack[-1].get("currMin")


class MinStack:
    def __init__(self):
        self.stack = []
        self.minStack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        val = min(val, self.minStack[-1] if self.minStack else val)
        self.minStack.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.minStack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]


obj = MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
print(obj.getMin())  # -3
obj.pop()
print(obj.top())  # 0
print(obj.getMin())  # -2
