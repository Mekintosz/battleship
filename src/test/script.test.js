import  ship from "../modules/ship";
import player from "../modules/player";
import gameBoard from "../modules/gameBoard";

test("ship with length 2 return isSunk === true after 2 hits", () => {
  const small = ship(2);
  small.hit();
  small.hit();
  expect(small.isSunk()).toEqual(true);
});

test("ship with length 4 return isSunk === false after 3 hits", () => {
  const large = ship(4);
  large.hit();
  large.hit();
  large.hit();
  expect(large.isSunk()).toEqual(false);
});

test('ship with length 3 has name "submarine"', () => {
  const mid = ship(3);
  expect(mid.getName()).toEqual("submarine");
});

test('getBoard return  array field with "o"', () => {
    const board = gameBoard().getBoard()
    expect(board).toContainEqual(["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"])
})

// test('ship after assigning vertical direction has direction set to "v"', () =>{
//     const ship = ship(2)
// })

test('getPlayerBoard return array with "o"', () => {
    const board = player().createGameBoard()
    expect(board).toContainEqual(["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"])
})

test('setShipOnBoard place a ship at given coordinates', () => {
  const board = player().createGameBoard()
  const placement = gameBoard().setShipOnBoard([2,3], "v", ship(4))
  expect(board[2]).toContainEqual(["o", "o", "o", "x", "x", "x", "x", "o", "o", "o"])
} )