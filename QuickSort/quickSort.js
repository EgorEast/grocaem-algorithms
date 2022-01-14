const quickSort = (array = []) => {
  if (array.length < 2) return array
  let pivot = array[0]
  let less = array.filter((value) => value < pivot)
  let greater = array.filter((value) => value > pivot)
  
  return quickSort(less).concat([pivot], quickSort(greater))
}

let arr = [10, 5, 2, 3, 1, 37, 35, 14, 6]
let newArr = [2]

for (var i = 0; i <= 10000; i++) {
  newArr.concat(arr)
  //console.log(i);
}

console.log(newArr);

console.log(newArr.length)

console.log(quickSort(arr))

