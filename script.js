function ship(length) {
    let hits = 0

    const hit = () => hits++
    const isSunk = () => hits >= length ? true : false
       
    return { hit, isSunk }
}


function gameboard() {
    const board = new Array(10).fill('whatever').map(() => new Array(10).fill(0) )

    return { board }
}
console.log(gameboard().board)

// export {ship}