export default function ship(length) {
    let hits = 0;
    let name;
    let found = false;
    let direction 
  
    switch (length) {
      case 2:
        name = "boat";
        break;
      case 3:
        name = "submarine";
        break;
      case 4:
        name = "battleship";
        break;
      case 5:
        name = "carrier";
    }
  
    const getName = () => name;
    const hit = () => hits++;
    const isSunk = () => (hits === length ? true : false);
    const ifFound = () => (found = true);
    const getDirection = () => (direction)
  
    return { hit, isSunk, ifFound, getName, getDirection };
  }