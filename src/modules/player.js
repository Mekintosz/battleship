import gameBoard from "./gameBoard"

export default function player() {
    const type = "human"
    const createGameBoard = () => gameBoard().getBoard()

     const getPlayerBoard = () => gameBoard

return { getPlayerBoard, createGameBoard }


}