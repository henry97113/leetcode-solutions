class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true

  function traverse(node: TreeNode | null) {
    if (node === null) return 0

    const leftHeight = traverse(node.left)
    const rightHeight = traverse(node.right)

    if (leftHeight === -1 || rightHeight === -1) return -1

    if (Math.abs(leftHeight - rightHeight) > 1) return -1

    return Math.max(leftHeight, rightHeight) + 1
  }

  if (traverse(root) === -1) return false
  return true
}
