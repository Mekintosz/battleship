function ship(length) {
    let hits = 0
    let name 
    switch (length) {
        case 2:
            name = "boat"
            break
        case 3:
            name = 'submarine'
            break
        case 4:
            name = 'battleship'
            break
        case 5:
            name = 'carrier'
    }
    let found = false

    const getName = () => name
    const hit = () => hits++
    const isSunk = () => hits === length ? true : false
    const ifFound = () => found = true
    const length = length
       
    return { getName, hit, isSunk, ifFound, length }
}


function gameboard() {
    const board = new Array(10).fill('whatever').map(() => new Array(10).fill(0) )
    let fleet = []
    let direction = 'h'
    const placeShip = (shipKind, coordinates, direction) => {   
        baord[coordinates[0]][coordinates[1]]
    }

    const setDirectionHorizontal = () => direction = 'h'
    const setDirectionVertical = () => direction = 'v'
    const reciveAttack = (coordinates) => {
      board[coordinates[0]][coordinates[1]]
    }
    const addToFleet = (coordinates, direction, ship) => {
        for (let i = 0; i <= ship.length; i++)
            if (direction === 'h')
        board[coordinates[0]][coordinates[1]]
    
    const 

    return { board }
}

export { ship }