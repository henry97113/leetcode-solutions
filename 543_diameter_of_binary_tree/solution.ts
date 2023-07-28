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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0

  function dfs(root: TreeNode | null) {
    if (!root) return -1

    const left = dfs(root.left)
    const right = dfs(root.right)

    // compare the current diameter with the max
    max = Math.max(max, left + right + 2)

    // height of the tree
    return 1 + Math.max(left, right)
  }

  dfs(root)

  return max
}
