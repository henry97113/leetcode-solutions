/** Insertion sort */
function swap(arr: number[], idx1: number, idx2: number) {
  ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function insertionSort(nums: number[]) {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1
    while (j >= 0 && nums[j] > nums[j + 1]) {
      swap(nums, j, j + 1)
      j--
    }
  }
  return nums
}

/** Merge sort */
function merge(
  nums: number[],
  startIdx: number,
  midIdx: number,
  endIdx: number
) {
  const left = nums.slice(startIdx, midIdx + 1)
  const right = nums.slice(midIdx + 1, endIdx + 1)

  // pointer for the nums
  let i = startIdx
  // pointer for the left arr
  let j = 0
  // pointer for the right arr
  let k = 0

  while (j < left.length && k < right.length) {
    if (left[j] <= right[k]) {
      nums[i] = left[j]
      j++
    } else {
      nums[i] = right[k]
      k++
    }
    i++
  }

  while (j < left.length) {
    nums[i] = left[j]
    j++
    i++
  }

  while (k < right.length) {
    nums[i] = right[k]
    k++
    i++
  }
}

function mergeSort(nums: number[], startIdx: number, endIdx: number) {
  if (startIdx === endIdx) return nums

  const midIdx = Math.floor(startIdx + (endIdx - startIdx) / 2)
  // left
  mergeSort(nums, startIdx, midIdx)
  // right
  mergeSort(nums, midIdx + 1, endIdx)

  merge(nums, startIdx, midIdx, endIdx)

  return nums
}
/** Quick sort */
function quickSort(nums: number[], startIdx: number, endIdx: number) {
  if (endIdx - startIdx + 1 <= 1) return nums

  const pivot = nums[endIdx]
  let left = startIdx

  // Partition: elements smaller than pivot on left side
  for (let i = startIdx; i < endIdx; i++) {
    if (nums[i] < pivot) {
      swap(nums, left, i)
      left++
    }
  }

  // Move pivot in-between left & right sides
  nums[endIdx] = nums[left]
  nums[left] = pivot

  // left
  quickSort(nums, startIdx, left - 1)
  // right
  quickSort(nums, left + 1, endIdx)

  return nums
}

/** Bucket sort */
function bucketSort(nums: number[]) {
  // Assuming arr only contains 0, 1 or 2
  const buckets = [0, 0, 0]

  // Count the quantity of each val in arr
  for (let i = 0; i < nums.length; i++) {
    buckets[nums[i]]++
  }

  // Fill each bucket in the original array
  let pointer = 0
  for (let i = 0; i < buckets.length; i++) {
    for (let j = 0; j < buckets[i]; j++) {
      nums[pointer] = i
      pointer++
    }
  }

  return nums
}

function sortArray(nums: number[]) {
  return quickSort(nums, 0, nums.length - 1)
}
