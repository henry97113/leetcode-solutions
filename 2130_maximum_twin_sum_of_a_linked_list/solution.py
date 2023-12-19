from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        slow, fast = head, head
        prev = None

        while slow and fast and fast.next:
            fast = fast.next.next
            # reverse the first half of the list
            temp = slow.next
            slow.next = prev
            prev = slow
            slow = temp

        res = 0
        while slow and prev:
            res = max(res, slow.val + prev.val)
            prev = prev.next
            slow = slow.next

        return res
