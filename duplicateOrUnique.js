function duplicateOrUnique(arr) {
  const counter = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    
    if (counter[num]) {
      counter[num]++;
    } else {
      counter[num] = 1;
    }
  }

  const uniqueNumbers = Object.keys(counter);
  const n = uniqueNumbers.length;

  if (arr.length === n + 1) {
    for (let num in counter) {
      if (counter[num] === 2) {
        return Number(num);
      }
    }
  } 
  else if (arr.length === 2 * n - 1) {
    for (let num in counter) {
      if (counter[num] === 1) {
        return Number(num);
      }
    }
  }
}