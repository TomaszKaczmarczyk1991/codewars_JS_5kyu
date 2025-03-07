function pickPeaks(arr){
    const maxArr = [];
    const maxPos = [];

    for(let i = 1; i < arr.length-1; i++) {
      if((arr[i] > arr[i-1]) && arr[i] > arr[i+1]) {
        maxArr.push(arr[i]);
        maxPos.push(i);
      }
    }
    return {pos: maxPos, peaks: maxArr}
}

// test commit on GitHub Codespace