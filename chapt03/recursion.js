// This is the looping version of exponentiation
let power = (base, exponent) => {
  let result = 1
  for (let count = 0; count < exponent; count++) {
    result *= base
  }
  return result
}
console.log(power(2, 5))




// This is the recursion version of exponentiation
// let power = (base, exponent) => {
//   if (exponent == 0) {
//     return 1
//   } else {
//     return base * power(base, exponent - 1)
//   }
// }
// console.log(power(2, 5)) 

//recursion is about 3x slower than looping

// sometimes if the program is very complex it's worth giving up
// efficiency to make the program more straightforward

