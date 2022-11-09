import { expect, test } from '@jest/globals'
import vendingMachine from './vending-machine'

test('cost of 1.50 and payment of 2 will print quarters: 2', () => {
  expect(vendingMachine(1.5, 2)).toBe('Quarters: 2')
})
