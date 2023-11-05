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

function isValidBST(root: TreeNode | null): boolean {
  function dfs(
    node: TreeNode | null,
    leftBoundary: number,
    rightBoundary: number
  ) {
    if (node === null) {
      return true;
    }

    if (!(node.val < rightBoundary && node.val > leftBoundary)) return false;

    const left = dfs(node.left, leftBoundary, node.val);
    const right = dfs(node.right, node.val, rightBoundary);

    return left === true && right === true;
  }
  return dfs(root, -Infinity, Infinity);
}
