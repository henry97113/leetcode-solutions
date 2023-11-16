function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let p1 = i + 1;
    let p2 = nums.length - 1;
    while (p1 < p2) {
      const sum = nums[i] + nums[p1] + nums[p2];

      if (0 < sum) p2--;
      else if (0 > sum) p1++;
      else {
        result.push([nums[i], nums[p1], nums[p2]]);
        p1++;
        while (nums[p1] === nums[p1 - 1] && p1 < p2) {
          p1++;
        }
      }
    }
  }
  return result;
}
