// Use regex to determine if the char is alphanumeric
function isPalindrome1(s: string): boolean {
  const alphaNumericRegex = /^[A-Za-z0-9]$/;

  let head = 0;
  let tail = s.length - 1;

  while (head < tail) {
    const headCur = s[head];
    const tailCur = s[tail];

    if (!headCur.match(alphaNumericRegex)) {
      head++;
      continue;
    }
    if (!tailCur.match(alphaNumericRegex)) {
      tail--;
      continue;
    }

    console.log('head: ', headCur, 'tail: ', tailCur);

    if (headCur.toLowerCase() !== tailCur.toLowerCase()) return false;
    head++;
    tail--;
  }

  return true;
}

// Use self-made function to determine if the char is alphanumeric
function isAlphaNumeric(char: string) {
  const charCode = char.charCodeAt(0);

  // check uppercase
  if (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0))
    return true;
  // check lowercase
  if (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0))
    return true;
  // check number
  if (charCode >= '0'.charCodeAt(0) && charCode <= '9'.charCodeAt(0))
    return true;

  return false;
}

function isPalindrome2(s: string): boolean {
  let head = 0;
  let tail = s.length - 1;

  while (head < tail) {
    const headCur = s[head];
    const tailCur = s[tail];

    if (!isAlphaNumeric(headCur)) {
      head++;
      continue;
    }
    if (!isAlphaNumeric(tailCur)) {
      tail--;
      continue;
    }

    console.log('head: ', headCur, 'tail: ', tailCur);

    if (headCur.toLowerCase() !== tailCur.toLowerCase()) return false;
    head++;
    tail--;
  }

  return true;
}
