import gameBoard from "./gameBoard"

export default function player(type = "human") {


    const playersGameBoard = () => gameBoard().getBoard()

     const player = () => createGameBoard
     const getType = () => type

return { getPlayerBoard, playersGameBoard, getType }

}