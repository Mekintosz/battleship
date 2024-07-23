import ship from "./ship";

export default function gameBoard() {
    const board = new Array(10)
      .fill("whatever")
      .map(() => new Array(10).fill("o"));
    // let fleet = [ship(2), ship(3), ship(3), ship(4), ship(5)];
    let direction = "h";
    let hitSum;
  
    const setDirectionHorizontal = () => (direction = "h");
    const setDirectionVertical = () => (direction = "v");

    const receiveAttack = (attackCoordinates) => {
      let targetField = board[attackCoordinates[0]][attackCoordinates[1]];
      if (targetField === "o") {
        targetField = "q";
      } else if (targetField === "x") {
        targetField = "h";
      }
    };
  
    const setShipOnBoard = (coordinates, direction, ship) => {
      for (let i = 0; i < ship.length; i++) {
        if (direction === "h" && coordinates[0] + ship.length < 9) {
          board[coordinates[0] + i][coordinates[1]] = "x";
        } else if (direction === "v" && coordinates[1] + ship.length < 9) {
          board[coordinates[0]][coordinates[1] + i] = "x";
        }
      }
    };
  
    const allShipsSunk = () => {
      for (let i = 0; i < 11; i++) {
        if (board[0][i] === h) {
          hitSum += 1;
        } else if (board[i][0] === h) {
          hitSum +=1
        } else if (hitSum === 17) {
          return true;
        } else {
          return false;
        }
      }
    };
  
    const getBoard = () => board;
  
    return {
      getBoard,
      setDirectionHorizontal,
      setDirectionVertical,
      receiveAttack,
      setShipOnBoard,
      allShipsSunk,
    };
  }