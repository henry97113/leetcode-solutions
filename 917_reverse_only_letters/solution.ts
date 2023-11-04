function reverseOnlyLetters(s: string): string {
  const arr = s.split('');
  const regex = /[a-zA-Z]/g;

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start].match(regex) === null) {
      start++;
      continue;
    }
    if (arr[end].match(regex) === null) {
      end--;
      continue;
    }
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr.join('');
}
