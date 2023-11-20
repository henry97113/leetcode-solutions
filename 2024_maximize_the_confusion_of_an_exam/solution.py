class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        res = 0
        l = 0
        count = {}

        for r in range(len(answerKey)):
            count[answerKey[r]] = 1 + count.get(answerKey[r], 0)

            if (r - l + 1) - max(count.values()) > k:
                count[answerKey[l]] -= 1
                l += 1

            res = max(res, r - l + 1)

        return res
