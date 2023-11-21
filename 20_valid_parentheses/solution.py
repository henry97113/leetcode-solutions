from typing import List


class Solution:
    def isValid(self, s: str) -> bool:
        stack: List[str] = []
        parenthesesMap = {")": "(", "]": "[", "}": "{"}

        for c in s:
            if c not in parenthesesMap:
                stack.append(c)
                continue
            if not stack or stack[-1] != parenthesesMap[c]:
                return False
            stack.pop()

        return not stack


solution = Solution()


print(solution.isValid("()"))  # True
print(solution.isValid("([{}])"))  # True
print(solution.isValid("()[]{}"))  # True
print(solution.isValid("(]"))  # False
print(solution.isValid("({)}"))  # False
print(solution.isValid("]"))  # False
