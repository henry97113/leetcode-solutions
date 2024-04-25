from typing import List
import collections
import heapq


# Time: O(n + n + (n - k) * log k) => O(n * log k)
# Space: O(n + k)
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq_map = collections.defaultdict(int)

        for num in nums:
            freq_map[num] += 1

        min_heap = [(-freq, num) for num, freq in freq_map.items()]
        heapq.heapify(min_heap)

        top_k = [heapq.heappop(min_heap)[1] for _ in range(k)]

        return top_k
