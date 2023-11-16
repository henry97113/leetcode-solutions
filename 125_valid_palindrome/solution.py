import re


class Solution:
    # Time: O(n), Space: O(n)
    def isPalindrome(self, s: str) -> bool:
        string = re.sub(r'[^a-zA-Z0-9]', '', s).lower()

        head = 0
        tail = len(string) - 1

        while head < tail:
            if string[head] != string[tail]:
                return False
            head += 1
            tail -= 1

        return True

    # Time: O(n), Space: O(1)
    def isPalindrome2(self, s: str) -> bool:
        l, r = 0, len(s) - 1
        while l < r:
            while l < r and not self.isAlphaNumeric(s[l]):
                l += 1
            while l < r and not self.isAlphaNumeric(s[r]):
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l += 1
            r -= 1
        return True

    def isAlphaNumeric(self, c: str) -> bool:
        return (
            ord("A") <= ord(c) <= ord("Z")
            or ord("a") <= ord(c) <= ord("z")
            or ord("0") <= ord(c) <= ord("9")
        )
