const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor
    if (ingredientAmount > 1) {
      unit += "s"
    }
    // logging the factor because can get the outer binding
    console.log(`${ingredientAmount} ${unit} ${name} ${factor}`)
  }
  ingredient(1, "can", "chickpeas")
}
// console.log won't work can't get inner bindings
// console.log(`${unit}`)
hummus(4)