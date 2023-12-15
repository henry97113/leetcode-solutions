from typing import List


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res: List[str] = []
        stack: List[str] = []

        def backtrack(openN, closeN) -> None:
            if closeN == openN == n:
                res.append("".join(stack))
                return

            if openN < n:
                stack.append("(")
                backtrack(openN + 1, closeN)
                stack.pop()

            if closeN < openN:
                stack.append(")")
                backtrack(openN, closeN + 1)
                stack.pop()

        backtrack(0, 0)

        return res

    # Easy to understand solution, but does not "undo the choices"
    # as most backtracking problems do.
    def generateParenthesis2(self, n: int) -> List[str]:
        res = []

        def dfs(openN: int, closeN: int, s: str) -> None:
            if len(s) == 2 * n:
                res.append(s)
                return

            if openN < n:
                dfs(openN + 1, closeN, s + "(")

            if closeN < openN:
                dfs(openN, closeN + 1, s + ")")

        dfs(0, 0, "")

        return res


print(
    Solution().generateParenthesis(3)
)  # ["((()))","(()())","(())()","()(())","()()()"]
print(Solution().generateParenthesis(1))  # ["()"]
