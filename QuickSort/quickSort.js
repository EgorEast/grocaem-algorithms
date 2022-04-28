const quickSort = (array = []) => {
  if (array.length < 2) return array
  const pivot = array[0]
  const less = array.filter((value) => value < pivot)
  const greater = array.filter((value) => value > pivot)
  
  return quickSort(less).concat([pivot], quickSort(greater))
}

const arr = [10, 5, 2, 3, 1, 37, 35, 14, 6]
let newArr = [2]

//for (var i = 0; i <= 10000; i++) {
//  newArr = newArr.concat(arr)
//  console.log(i);
//}

//console.log(newArr);

//console.log(newArr.length)

console.log(quickSort(arr))

