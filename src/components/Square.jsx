
function Square({value, row, col, onClick, isWinningSquare}) {
    let inside = "";
    if (value === "X") {
        inside = <img src='/x.svg'></img>;
    } else if (value === "O") {
        inside = <img src='/o.svg'></img>;
    }
    return ( <button onClick={() => onClick(row,col)} className={isWinningSquare ? "winner" : ""}>{inside}</button> );
}

export default Square;