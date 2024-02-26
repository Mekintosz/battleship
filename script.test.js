import { ship } from './script'

test('ship with length 2 return isSunk === true after 2 hits', () => {
    const small = ship(2)
    small.hit()
    small.hit()
    expect(small.isSunk()).toEqual(true)
})

test('ship with length 4 return isSunk === false after 3 hits', () => {
    const large = ship(4)
    large.hit()
    large.hit()
    large.hit()
    expect(large.isSunk()).toEqual(false)  
})