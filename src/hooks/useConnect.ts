import { useDispatch, useSelector } from "react-redux"
import { changeTurn, checkWinners, resetBoard, updateBoard, updateScore } from "../features/connect4/ConnectSlice"
import { RootStat } from "../app/store"

export function useConnect() {
    const dispatch = useDispatch()
    const winner = useSelector((state: RootStat) => state.connect.winner)
    const winningPlay = useSelector((state: RootStat) => state.connect.winningPlay)

    function updateTurn() {
        dispatch(changeTurn(""))
    }

    function turn(col: number, row: number) {
        newPlay({ col, row })
        win([row, col])
        dispatch(changeTurn(""))
    }

    function win(lastPlay: number[]) {
        dispatch(checkWinners(lastPlay))
    }

    function newPlay(update: { row: number, col: number }) {
        dispatch(updateBoard(update))
    }

    function newScore() {
        dispatch(updateScore(""))
    }

    function erase() {
        dispatch(resetBoard(""))
    }

    return { turn, win, newPlay, updateTurn, newScore, erase, winner, winningPlay }
}