// let theFizz = 1
for (let theFizz = 1; theFizz <= 100; theFizz++){
  if (theFizz % 3 == 0 && theFizz % 5 == 0) {
    console.log('fizzBuzz')
  } else if (theFizz % 3 == 0) {
    console.log('fizz')
  } else if (theFizz % 5 == 0) {
    console.log('buzz')
  } else {
    console.log(theFizz)
  }
// console.log(theFizz)
// theFizz += 1
}