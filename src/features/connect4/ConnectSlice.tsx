import { createSlice, Slice } from "@reduxjs/toolkit"
import React from "react"
import { winningPlays } from "../../definitions/winningPlays"

export interface ConnectState {
    turn: string
    winner: number
    score: {
        player1: number
        player2: number
    }
    board: [
        string[] | React.ReactNode[],
        string[] | React.ReactNode[],
        string[] | React.ReactNode[],
        string[] | React.ReactNode[],
        string[] | React.ReactNode[],
        string[] | React.ReactNode[],
    ]
}

export const initialState: ConnectState = {
    turn: "red",
    winner: 0,
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
        },
        resetBoard: (state) => {
            state.board = initialState.board
            state.winner = 0
        },
        checkWinners: (state, coordinates) => {
            const board = state.board
            console.log("checking")
            for (let i = 0; i < initialWinningPlays.length; i++) {
                const checkedPlay = initialWinningPlays[i]
                if (!checkedPlay.some(sub => sub.toString() === coordinates.payload.toString())) continue
                let matches = 0
                for (let j = 0, play; j < 4; j++) {
                    if (!play) play = board[checkedPlay[j][0]][checkedPlay[j][1]]
                    else if (board[checkedPlay[j][0]][checkedPlay[j][1]] === play) matches++
                    else if (board[checkedPlay[j][0]][checkedPlay[j][1]] === "") break
                }
                if (matches === 3){
                    state.winner = board[checkedPlay[0][0]][checkedPlay[0][1]] === "red" ? 1 : 2
                    updateScore("")
                    break
                }
            }
        }
    }
})

export const { changeTurn, updateWinner, updateScore, updateBoard, checkWinners, resetBoard } = connectSlice.actions
export default connectSlice.reducer