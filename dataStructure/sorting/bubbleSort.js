// function bubbleSort(arr) {
//   if (arr.length === 1) return arr;
//   function swap(i, j) {
//     let n;
//     n = arr[j];
//     arr[j] = arr[i];
//     arr[i] = n;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         swap(i, j);
//       }
//     }
//   }
//   return arr;
// }

// another way to write the bubble sort
function bubbleSort(arr) {
  let temp;
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
console.log(bubbleSort([98, 6, 54, 12, 4, 89]));
