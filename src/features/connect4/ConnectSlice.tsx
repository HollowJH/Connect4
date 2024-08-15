import { createSlice, Slice } from "@reduxjs/toolkit"
import React from "react"

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

const initialState: ConnectState = {
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
        }
    }
})

export const { changeTurn, updateWinner, updateScore, updateBoard } = connectSlice.actions
export default connectSlice.reducer