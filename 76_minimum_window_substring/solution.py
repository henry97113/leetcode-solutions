class Solution:
    # Time: O(n) n is the length of s
    # Space: O(n)
    def minWindow(self, s: str, t: str) -> str:
        if len(s) < len(t):
            return ''

        t_map, window = {}, {}

        for c in t:
            t_map[c] = 1 + t_map.get(c, 0)

        need = len(t_map)
        matched = 0
        res, resLength = [-1, -1], float('infinity')

        l = 0

        for r in range(len(s)):
            curr = s[r]
            window[curr] = 1 + window.get(curr, 0)
            if curr in t_map and window[curr] == t_map[curr]:
                matched += 1

            while need == matched:
                # update our result
                if (r - l + 1) < resLength:
                    res = [l, r]
                    resLength = r - l + 1
                # pop from the left of our window
                window[s[l]] -= 1
                if s[l] in t_map and window[s[l]] < t_map[s[l]]:
                    matched -= 1
                l += 1

        l, r = res

        return s[l : r + 1] if resLength != float('infinity') else ''


print(Solution().minWindow('ADOBECODEBANC', 'ABC'))  # 'BANC'
print(Solution().minWindow('BACD', 'AD'))  # 'ACD'
print(Solution().minWindow('BACD', 'ADE'))  # ''
print(Solution().minWindow('a', 'a'))  # 'a'
print(Solution().minWindow('a', 'aa'))  # ''
