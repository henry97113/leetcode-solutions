class Solution:
    # Time: O(26 * n): we need to check if two maps are the same in each loop
    # Space: O(n)
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        s1Map, s2Map = {}, {}

        for i in range(len(s1)):
            s1Map[s1[i]] = 1 + s1Map.get(s1[i], 0)
            s2Map[s2[i]] = 1 + s2Map.get(s2[i], 0)

        l = 0
        for r in range(len(s1), len(s2)):
            if s1Map == s2Map:
                return True

            s2Map[s2[r]] = 1 + s2Map.get(s2[r], 0)

            s2Map[s2[l]] -= 1
            if s2Map[s2[l]] == 0:
                s2Map.pop(s2[l])
            l += 1

        return s1Map == s2Map

    # Time: O(n)
    # Space: O(n)
    def checkInclusion2(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        s1Count, s2Count = [0] * 26, [0] * 26

        for i in range(len(s1)):
            s1Count[ord(s1[i]) - ord("a")] += 1
            s2Count[ord(s2[i]) - ord("a")] += 1

        matches = 0
        for i in range(26):
            matches += 1 if s1Count[i] == s2Count[i] else 0

        l = 0
        for r in range(len(s1), len(s2)):
            if matches == 26:
                return True

            # handle right index
            index = ord(s2[r]) - ord("a")
            s2Count[index] += 1

            if s1Count[index] == s2Count[index]:
                matches += 1
            # was previous matched
            elif s1Count[index] + 1 == s2Count[index]:
                matches -= 1

            # handle left index
            index = ord(s2[l]) - ord("a")
            s2Count[index] -= 1

            if s1Count[index] == s2Count[index]:
                matches += 1
            # was previous matched
            elif s1Count[index] - 1 == s2Count[index]:
                matches -= 1

            l += 1

        return matches == 26


print(Solution().checkInclusion("adc", "dcda"))  # True
print(Solution().checkInclusion("ab", "cbad"))  # True
print(Solution().checkInclusion("ab", "eidbaooo"))  # True
print(Solution().checkInclusion("ab", "eidboaoo"))  # False
print(Solution().checkInclusion("b", "c"))  # False
print(Solution().checkInclusion("abc", "hacdfvacbfw"))  # True
print(Solution().checkInclusion("aaa", "vhaauiaasd"))  # False
print(Solution().checkInclusion("aaa", "vhaauiaaasd"))  # True
