function pickPeaks(arr){
    const maxArr = [];
    const maxPos = [];

    for(let i = 1; i < arr.length-1; i++) {
      if((arr[i] > arr[i-1])) {
        let j = i;
        while(arr[j] === arr[j+1])
          j++;
          
          if(arr[j] > arr[j+1]) {
            maxArr.push(arr[i]);
            maxPos.push(i);
          }
      }
    }
    return {pos: maxPos, peaks: maxArr}
}