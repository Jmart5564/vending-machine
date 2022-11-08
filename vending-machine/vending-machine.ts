// Implement your vending machine here!

function vendingMachine (item: string, payment: number) {
  const items = [
    { name: 'Muffin', cost: 2.75 },
    { name: 'Coffee', cost: 4.25 },
    { name: 'Tea', cost: 1.55 },
    { name: 'Scone', cost: 0.75 },
    { name: 'Latte', cost: 2.24 }
  ]

  const chosenItemWithEnoughMoney = items.find(vendingItem => vendingItem.name === item && payment >= vendingItem.cost)

  const generateChange = change => {
    change = (payment - chosenItemWithEnoughMoney.cost) * 100
    let quarter = 0
    let dime = 0
    let nickel = 0
    let penny = 0
    let remainingChange = change

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
    if (quarter > 0) {
      return `Quarters: ${quarter}`
    }
    if (dime > 0) {
      return `Dimes: ${dime}`
    }
    if (nickel > 0) {
      return `Nickels: ${nickel}`
    }
    if (penny > 0) {
      return `Pennies: ${penny}`
    } else {
      return 'zero'
    }
  }

  if (chosenItemWithEnoughMoney) {
    return `Your ${item} has been served. Your change is ${generateChange}`
  } else {
    return `${item} doesn't exist or not enough money.`
  }
}

console.log(vendingMachine('Tea', 8))
