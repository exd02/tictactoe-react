import Square from "./Square";

function Board({matrix, winningPositions, onSquareClick}) {
    const isWinningSquare = (row, col) => 
        winningPositions.some(([winRow,winCol]) => winRow === row && winCol === col)
    return ( 
        <table>
            <tbody>
                {matrix.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((value, colIndex) => (
                    <td key={colIndex}>
                        <Square value={value} row={rowIndex} col={colIndex} onClick={onSquareClick} isWinningSquare={isWinningSquare(rowIndex, colIndex)}/>
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
     );
}

export default Board;