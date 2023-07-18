/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {
  const queue: (TreeNode | null)[] = [root]
  const result: number[] = []

  while (queue.length > 0) {
    const size = queue.length
    let rightNode: TreeNode | null = null
    for (let i = 0; i < size; i++) {
      const curr = queue.shift()
      if (curr) {
        rightNode = curr
        queue.push(curr.left)
        queue.push(curr.right)
      }
    }
    if (rightNode) {
      result.push(rightNode.val)
    }
  }
  return result
}
