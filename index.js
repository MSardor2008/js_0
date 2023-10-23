let arr = ['alex', 'jordan', 'michael', 'amira', 'dilruh', 'alla', 'tangir', 'daler'] 
console.log(
    arr.filter((name) => name.length % 2 === 0) 
)
// 2. Найти все четные и не четные и запушать их в соответсвующий массив
let nums =  [1,2,3,4,5,6,7,9]
let evens = []
let odds = [] 
  
  console.log(
    nums.filter((evens) => evens % 2 === 0) 
  )
  console.log(
    nums.filter((odds) =>odds % 2 === 1)
  )