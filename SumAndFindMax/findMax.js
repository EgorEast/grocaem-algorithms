let arr = [2, 5, 8, 12, 1]

let maxNumber = (arr = []) => {
  if (arr.length < 2) return arr
  const lastIndex = arr.length - 1
  let cutArr = arr.slice(0, lastIndex)
  
  let lastEl = arr[lastIndex];
  
  let value = maxNumber(cutArr)
  return (lastEl > value) ? lastEl : value
}

console.log(maxNumber(arr))
