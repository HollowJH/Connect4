import { useConnect } from "./useConnect";

export function useMinimax() {
    const { winner } = useConnect()

    function canMakeMove(board: string[][], col: number) {
        return board[0][col] === ""
    }

    function isBoardFull(board: string[][]) {
        return board.every(row => row.every(cell => cell !== ""));
    }

    function getBestMove(board: string[][], player: string): number {
        let bestScore = -Infinity;
        let bestMoves: number[] = [];
        const columnOrder = [3, 2, 4, 1, 5, 0, 6]; // Center-outwards

        for (let col of columnOrder) {
            if (canMakeMove(board, col)) {
                const newBoard = simulateMove(board, col, player);

                // If player is maximizing, AI is minimizing and vice versa
                let score;
                if (player === 'yellow') {
                    score = minimax(newBoard, 3, false);
                } else {
                    // Check if this move blocks a win
                    if (winner === 'red') {
                        score = -Infinity; // Must block this move
                    } else {
                        score = minimax(newBoard, 3, true);
                    }
                }

                if (score > bestScore) {
                    bestScore = score;
                    bestMoves = [col]; // Start a new list of best moves
                } else if (score === bestScore) {
                    bestMoves.push(col); // Add to the list of equally good moves
                }
            }
        }

        // Choose a random move from the best ones
        console.log(bestMoves)
        return bestMoves[Math.floor(Math.random() * bestMoves.length)];

    }

    function minimax(board: string[][], depth: number, isMaximizing: boolean) {
        if (winner === 'yellow') return 100;
        if (winner === 'red') return -100;
        if (isBoardFull(board) || depth === 0) return evaluateBoard(board); // Enhanced evaluation

        if (isMaximizing) {
            let maxEval = -Infinity;
            const columnOrder = [3, 2, 4, 1, 5, 0, 6];
            for (let col of columnOrder) {
                if (canMakeMove(board, col)) {
                    const newBoard = simulateMove(board, col, 'yellow');
                    const ev = minimax(newBoard, depth - 1, false);
                    maxEval = Math.max(maxEval, ev);
                }
            }
            return maxEval;
        } else {
            let minEval = Infinity;
            const columnOrder = [3, 2, 4, 1, 5, 0, 6];
            for (let col of columnOrder) {
                if (canMakeMove(board, col)) {
                    const newBoard = simulateMove(board, col, 'red');
                    const ev = minimax(newBoard, depth - 1, true);
                    minEval = Math.min(minEval, ev);
                }
            }
            return minEval;
        }

    }

    function simulateMove(board: string[][], column: number, player: string) {
        const newBoard = [...board].map(row => [...row]);
        for (let row = 5; row >= 0; row--) {
            if (!newBoard[row][column]) {
                newBoard[row][column] = player;
                break;
            }
        }
        return newBoard;
    }

    function evaluateBoard(board: string[][]) {
        let score = 0;

        // Prioritize central columns
        for (let row = 0; row < 6; row++) {
            if (board[row][3] === 'yellow') score += 3;  // Center column
            if (board[row][2] === 'yellow' || board[row][4] === 'yellow') score += 2; // Adjacent to center
            if (board[row][1] === 'yellow' || board[row][5] === 'yellow') score += 1; // Next outwards
        }

        // Add more detailed scoring based on potential patterns
        score += scoreHorizontal(board);
        score += scoreVertical(board);
        score += scoreDiagonal(board);

        return score;
    }

    function scoreHorizontal(board: string[][]) {
        let score = 0;
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 4; col++) { // Only need to check first 4 columns for horizontal
                const window = [board[row][col], board[row][col + 1], board[row][col + 2], board[row][col + 3]];
                score += evaluateWindow(window);
            }
        }
        return score;
    }

    function scoreVertical(board: string[][]) {
        let score = 0;
        for (let col = 0; col < 7; col++) {
            for (let row = 0; row < 3; row++) { // Only need to check first 3 rows for vertical
                const window = [board[row][col], board[row + 1][col], board[row + 2][col], board[row + 3][col]];
                score += evaluateWindow(window);
            }
        }
        return score;
    }

    function scoreDiagonal(board: string[][]) {
        let score = 0;
        // Positive sloped diagonal
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 4; col++) {
                const window = [board[row][col], board[row + 1][col + 1], board[row + 2][col + 2], board[row + 3][col + 3]];
                score += evaluateWindow(window);
            }
        }
        // Negative sloped diagonal
        for (let row = 3; row < 6; row++) {
            for (let col = 0; col < 4; col++) {
                const window = [board[row][col], board[row - 1][col + 1], board[row - 2][col + 2], board[row - 3][col + 3]];
                score += evaluateWindow(window);
            }
        }
        return score;
    }

    function evaluateWindow(window: string[]) {
        let score = 0;
        const aiCount = window.filter(cell => cell === 'yellow').length;
        const playerCount = window.filter(cell => cell === 'red').length;

        if (aiCount === 4) score += 100;   // Win
        else if (aiCount === 3 && playerCount === 0) score += 50;  // Block or win
        else if (aiCount === 2 && playerCount === 0) score += 5;   // Two in a row
        else if (playerCount === 3 && aiCount === 0) score -= 80;  // Opponent threat (needs blocking)
        else if (playerCount === 2 && aiCount === 0) score -= 10;  // Opponent potential (watch)

        return score;
    }


    return { getBestMove }
}