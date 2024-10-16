# Connect4
This is a React-based implementation of the classic Connect Four game. Built using TypeScript, Redux Toolkit, and React Router, the game includes both Player vs Player (PvP) and Player vs AI modes, with timed turns, score tracking, and smooth navigation between different screens.

## Features
- PvP Mode: Two players can take turns dropping discs into the grid.
- Player vs AI Mode: Play against an AI opponent with alternating 15-second turns.
- Turn Timer: Each player has 15 seconds per turn to make a move.
- Score Tracking: Track the scores for both PvP and Player vs AI games.
- Responsive Design: Fully responsive, making the game playable on any device.
- Navigation: Uses React Router for smooth transitions between the game menu, rules, and game modes.
- Redux Toolkit: Global state management to handle game logic, player turns, scores, and more.
- Table of Contents
## Installation
To run this project locally, follow these steps:

1. Clone the repository:
`git clone https://github.com/yourusername/connect4.git`

2. Navigate to the project directory:
`cd connect4`

3. Install dependencies:
`npm install`

4. Start the development server:
`npm run dev`

The app will open in your browser at `http://localhost:5173` or your chosen port.

## Usage
### Main Menu
- Choose between Player vs Player or Player vs AI game modes.
- View the Game Rules for information on how to play.
### Gameplay
- Players take turns selecting columns to drop their discs.
- Each player has 15 seconds to make a move. If no move is made, the turn is forfeited.
- The game checks for a win condition (4 in a row horizontally, vertically, or diagonally) or a draw.
- Scores are tracked for both game modes.
### Player vs AI
- The AI makes calculated moves to compete against the player.
### Restart Game
- Restart the game at any time, either during or after a match.
## Technologies Used
- React: To build the interactive user interface.
- TypeScript: For strict type-checking and code clarity.
- Redux Toolkit: For managing global game state, player turns, and scores.
- React Router: For navigating between the menu, rules, and game screens.
- Vite: For fast development and optimized build processes.
