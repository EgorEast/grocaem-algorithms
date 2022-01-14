let arr = [2, 5, 8, 12, 1]


let summ = (arr = []) => {
  if (arr.length < 2) return arr[0] ?? 0;
  const lastIndex = arr.length - 1
  let cutArr = arr.slice(0, lastIndex)
  
  let lastEl = arr[lastIndex];
  
  return lastEl + summ(cutArr);
}
console.log(summ(arr));