/**
 * Time: O(n) | Space: O(n)
 */
function trap1(height: number[]): number {
  const maxL = Array.from({ length: height.length }, () => 0);
  const maxR = Array.from({ length: height.length }, () => 0);

  for (let i = 1; i < height.length; i++) {
    if (height[i - 1] > maxL[i - 1]) {
      maxL[i] = height[i - 1];
    } else {
      maxL[i] = maxL[i - 1];
    }
  }

  for (let i = height.length - 2; i >= 0; i--) {
    if (height[i + 1] > maxR[i + 1]) {
      maxR[i] = height[i + 1];
    } else {
      maxR[i] = maxR[i + 1];
    }
  }

  let sum = 0;

  for (let i = 0; i < height.length; i++) {
    const water = Math.max(Math.min(maxL[i], maxR[i]) - height[i], 0);
    sum += water;
  }

  return sum;
}

/**
 * Time: O(n) | Space: O(1)
 */
function trap2(height: number[]): number {
  let sum = 0;
  let maxL = height[0];
  let maxR = height[height.length - 1];
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    if (maxL <= maxR) {
      left++;

      const water = Math.max(Math.min(maxL, maxR) - height[left], 0);
      sum += water;

      if (height[left] > maxL) {
        maxL = height[left];
      }
    } else {
      right--;

      const water = Math.max(Math.min(maxL, maxR) - height[right], 0);
      sum += water;

      if (height[right] > maxR) {
        maxR = height[right];
      }
    }
  }

  return sum;
}
