from typing import List


class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for cur in tokens:
            if cur == "+":
                stack.append(stack.pop() + stack.pop())
            elif cur == "-":
                a, b = stack.pop(), stack.pop()
                stack.append(b - a)
            elif cur == "*":
                stack.append(stack.pop() * stack.pop())
            elif cur == "/":
                a, b = stack.pop(), stack.pop()
                stack.append(int(b / a))
            else:
                stack.append(int(cur))

        return stack[-1]


print(Solution().evalRPN(["2", "1", "+", "3", "*"]))  # 9
print(Solution().evalRPN(["4", "13", "5", "/", "+"]))  # 6
print(
    Solution().evalRPN(
        ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
    )
)  # 22
