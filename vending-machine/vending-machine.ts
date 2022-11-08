// Implement your vending machine here!

function vendingMachine (item: string, payment: number) {
  const items = [
    { name: 'Muffin', cost: 2.75 },
    { name: 'Coffee', cost: 4.25 },
    { name: 'Tea', cost: 1.55 },
    { name: 'Scone', cost: 0.75 },
    { name: 'Latte', cost: 2.24 }
  ]

  const chosenItem = items.find(vendingItem => vendingItem.name === item)

  if (chosenItem) {
    if (chosenItem.cost)
  }
}
