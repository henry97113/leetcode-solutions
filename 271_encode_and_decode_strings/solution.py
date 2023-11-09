from typing import List


class Solution:
    def __init__(self) -> None:
        self.__separator = '#'

    def encode(self, strs: List[str]) -> str:
        # ['apple', 'orange'] => "5#apple6#orange"
        res = ''
        for s in strs:
            res = f"{res} + {str(len(s))} + {self.__separator} + {s}"
        return res

    def decode(self, s: str) -> List[str]:
        res = []
        i = 0

        while i < len(s):
            j = i
            while s[j] != self.__separator:
                j += 1
            length = int(s[i:j])
            i = j + 1
            j = i + length
            res.append(s[i:j])
            i = j
        return res
