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

// time complexity : o(n2)
// another way to write the bubble sort
// function bubbleSort(arr) {
//   let temp;
//   for (let i = 0; i < arr.length; ++i) {
//     for (let j = 0; j < arr.length - 1 - i; ++j) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

function bubbleSort(array) {
  let swap = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      [array[i + 1], array[i]] = [array[i], array[i + 1]];
      swap++;
    }
    console.log("arr", swap, array);
  }

  return swap === 0 ? array : bubbleSort(array);
}

module.exports = bubbleSort;
console.log(bubbleSort([98, 6, 54, 12, 4, 89]));
