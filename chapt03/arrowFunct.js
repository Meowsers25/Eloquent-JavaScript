const power = (base, exponent) => {
  let result = 1
  for (let count = 0; count < exponent; count++) {
    result *= base 
  }
  return result 
}
console.log(power(2, 10))

// const square = (x) => {return x * x}

// when there is one parameter the parens can be eliminated
// when there is on expression returned eliminate the brackets
// this is the same as above

const square = x => x * x
console.log(square(5))

// when no parameter use empty parens

// const horn = () => {console.log('Toot')}

// or..

const horn = () => console.log('Toot')
horn()