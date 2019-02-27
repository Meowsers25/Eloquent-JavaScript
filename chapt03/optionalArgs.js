let square = (x) => x * x
// js ignores extra arguments
console.log(square(4, true, 'hedgehog'))

let minus = (a, b) => {
  if (b === undefined) {
    return -a 
  } else {
    return a - b
  }
}
console.log(minus(10))
console.log(minus(10, 5))

// if you use = operator that is the default value
// if no argument is given
let power = (base, exponent = 2) => {
  let result = 1
  for (let count = 0; count < exponent; count++) {
    result *= base
  }
  return result 
}
console.log(power(4))
console.log(power(2, 6))