// console.log(Array.from({length : 10} , (_,i)=>i*2))

const arr = new Array(10)
  .fill(0)                   // Initialize the array with 0s
  .map((_, index) => index * 2); // Map each element to double its index

console.log(arr);
