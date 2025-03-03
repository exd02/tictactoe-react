import { useState } from "react";
import Board from "./Board";

function isCoordinateAvaiable(matrix, row, col) {
    if (matrix[row][col] === 0) return true
    return false;
}

function checkForWiningConditions(matrix) {
    let winningPositions = []

    // check rows
    for (let row = 0; row < 3; row++) {
        if (matrix[row][0] != 0 && matrix[row][0] === matrix[row][1] && matrix[row][1] === matrix[row][2])
            winningPositions.push([[row, 0],[row, 1],[row, 2]])
    }

    // check cols
    for (let col = 0; col < 3; col++) {
        if (matrix[0][col] != 0 && matrix[0][col] === matrix[1][col] && matrix[1][col] === matrix[2][col])
            winningPositions.push([[0, col],[1, col],[2, col]])
    }

    // check diagonal
    if (matrix[0][0] != 0 && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2])
        winningPositions.push([[0,0], [1,1], [2,2]])

    // check anti-diagonal
    if (matrix[0][2] != 0 && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0])
        winningPositions.push([[0,2], [1,1], [2,0]])

    return winningPositions
}

function TicTacToe() {
    const [matrix, setMatrix] = useState(Array(3).fill().map(() => Array(3).fill(0)))
    const [winningPositions, setWinningPositions] = useState([])
    const [isPlayerXTurn, setIsPlayerXTurn] = useState(true)

    const handleSquareClick = (row, col) => {
        if (!isCoordinateAvaiable(matrix, row, col)) return
        if (winningPositions.length > 0) return

        let symbol = isPlayerXTurn ? "X" : "O"
        const newMatrix = matrix.map((r, rowIndex) =>
            rowIndex === row ? r.map((cell, colIndex) => (colIndex === col ? symbol : cell)) : r
        );  
        setMatrix(newMatrix)
        setWinningPositions(checkForWiningConditions(newMatrix))
        
        setIsPlayerXTurn(!isPlayerXTurn)
    };

    const resetBoard = () => {
        setMatrix(Array(3).fill().map(() => Array(3).fill(0)))
        setWinningPositions([])
        setIsPlayerXTurn(true)
    }

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board matrix={matrix} winningPositions={winningPositions.flat()} onSquareClick={handleSquareClick} />
            <button className="reset" onClick={resetBoard}>RESET</button>
        </div>
    );
}

export default TicTacToe;
