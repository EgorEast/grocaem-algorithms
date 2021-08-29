const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    let mid = Number.parseInt((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}
// const list = [1,3,4,5,6,7,8,9];
// console.log(binarySearch(list,7));
// console.log(binarySearch(list, -1));


// const strings =['blaze', 'hello', 'list', 'log', 'logger', 'logo', 'print', 'search', 'world'];

// console.log(binarySearch(strings, 'logger'));