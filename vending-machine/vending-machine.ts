
function vendingMachine (item: number, payment: number) {
  const change = Math.floor((payment - item) * 100)
  let quarter = 0
  let dime = 0
  let nickel = 0
  let penny = 0
  let remainingChange = change
  const dimeString = 'Dimes:'
  const nickelString = 'Nickels:'
  const pennyString = 'Pennies:'
  // declare object

  while (remainingChange >= 25) {
    remainingChange -= 25
    quarter++
  }
  while (remainingChange >= 10) {
    remainingChange -= 10
    dime++
  }
  while (remainingChange >= 5) {
    remainingChange -= 5
    nickel++
  }
  while (remainingChange > 0) {
    remainingChange -= 1
    penny++
  }
  console.log('Quarters:', quarter)
  console.log(dimeString.padEnd(9, ' '), dime)
  console.log(nickelString.padEnd(9, ' '), nickel)
  console.log(pennyString.padEnd(9, ' '), penny)
}

vendingMachine(5.47, 7)
