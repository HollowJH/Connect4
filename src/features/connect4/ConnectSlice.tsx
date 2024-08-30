import { createSlice, Slice } from "@reduxjs/toolkit"
import { winningPlays } from "../../definitions/winningPlays"

export interface ConnectState {
    turn: string
    againstAI: boolean
    winner: number
    winningPlay: []
    paused: boolean
    score: {
        player1: number
        player2: number
    }
    board: [
        string[],
        string[],
        string[],
        string[],
        string[],
        string[]
    ]
}

export const initialState: ConnectState = {
    turn: "red",
    againstAI: true,
    winner: 0,
    winningPlay: [],
    paused: false,
    score: {
        player1: 0,
        player2: 0
    },
    board: [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ]
}

const initialWinningPlays = winningPlays

export const connectSlice: Slice = createSlice({
    name: "connect",
    initialState,
    reducers: {
        changeTurn: (state) => {
            state.turn = state.turn === "red" ? "yellow" : "red"
        },
        updateWinner: (state, newWinner) => {
            state.winner = newWinner.payload === "red" ? 1 : 2
        },
        updateScore: (state) => {
            if (state.turn === "yellow") state.score.player1 += 1
            else state.score.player2 += 1
        },
        updateBoard: (state, action) => {
            const newBoard = state.board
            newBoard[action.payload.row][action.payload.col] = state.turn
            state.board = newBoard
            state.plays++
        },
        resetBoard: (state) => {
            if ((state.score.player1 + state.score.player2) % 2 === 0) state.turn = "red"
            else state.turn = "yellow"
            state.board = initialState.board
            state.winner = 0
            state.winningPlay = []
        },
        checkWinners: (state, coordinates) => {
            const board = state.board
            if (board.every((row: string[]) => row.every(cell => cell !== ""))) {
                state.winner = 3
                return
            }
            for (let i = 0; i < initialWinningPlays.length; i++) {
                const checkedPlay = initialWinningPlays[i]
                if (!checkedPlay.some(sub => sub.toString() === coordinates.payload.toString())) continue
                let matches = 0
                for (let j = 0, play; j < 4; j++) {
                    if (!play) play = board[checkedPlay[j][0]][checkedPlay[j][1]]
                    else if (board[checkedPlay[j][0]][checkedPlay[j][1]] === play) matches++
                    else if (board[checkedPlay[j][0]][checkedPlay[j][1]] === "") break
                }
                if (matches === 3) {
                    state.winner = board[checkedPlay[0][0]][checkedPlay[0][1]] === "red" ? 1 : 2
                    state.winningPlay = checkedPlay
                    break
                }
            }
        },
        pause: (state) => {
            state.pause = !state.pause
        },
        startGame: (state, isAI) => {
            state.turn = "red"
            state.score = {player1: 0, player2: 0}
            state.againstAI = isAI.payload
            state.pause = false
            state.winner = 0
            console.log("game started", state.againstAI)
        }
    }
})

export const { changeTurn, updateWinner, updateScore, updateBoard, checkWinners, resetBoard, pause, startGame } = connectSlice.actions
export default connectSlice.reducer

