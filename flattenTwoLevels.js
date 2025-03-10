function flattenTwoLevels(array) {
    const finalArr = [];
    
    array.forEach((item, index) => {
        if (Array.isArray(item)) {
            finalArr.push(item.flat(Infinity));
        }
        else {
          finalArr.push(item);
        }
    }) 
    return finalArr;
  }


console.log(flattenTwoLevels([1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18]))

// array = [1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18];
// return [1,[2,3],[4,5,6,7,8,9,10,11,12,13,14,15,16,17], 18]

// array = [1,[2, 3, [], [4, [], 5]]]
// return [1,[2,3,4,5]]