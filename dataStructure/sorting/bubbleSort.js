function bubbleSort(arr) {
  if (arr.length === 1) return arr;
  function swap(i, j) {
    let n;
    n = arr[j];
    arr[j] = arr[i];
    arr[i] = n;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(i, j);
      }
    }
  }
  return arr;
}
module.exports = bubbleSort;
console.log(bubbleSort([6]));
