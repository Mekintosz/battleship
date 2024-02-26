function ship(length) {
    let hits = 0

    const hit = () => hits++
    const isSunk = () => hits >= length ? true : false
       
    return { hit, isSunk }
}

export {ship}