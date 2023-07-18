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

// Recursive solution
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null

  const tempLeft = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(tempLeft)

  return root
}

// Iterative solution using stack
function invertTree(root: TreeNode | null): TreeNode | null {
  const stack: (TreeNode | null)[] = [root]

  while (stack.length > 0) {
    const node = stack.pop()
    if (node !== null) {
      ;[node.left, node.right] = [node.right, node.left]
      stack.push(node.left, node.right)
    }
  }
  return root
}
