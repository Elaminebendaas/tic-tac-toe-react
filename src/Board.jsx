import { useState } from "react";
import Square from "./Square"; 
import Win from "./Win";


function Board(){
    const [value, setValue] = useState(Array(9).fill(null))
    const [xTurn, setTurn] = useState(true)
    let stat;
    function setX(x){
        const squares = value.slice();
        
        
        if(xTurn == true){
            if(squares[x] == 'O'){
                return
            }
            squares[x] = 'X';
            setValue(squares);
            setTurn(false)
            
            new Promise(r => setTimeout(r, 250)).then(() => {
            let oPick = Math.floor(Math.random() * 9);
            while (oPick != 'X') {
                oPick = Math.floor(Math.random() * 9)
                if(squares[oPick] != 'X' && squares[oPick] != 'O'){
                    squares[oPick] = 'O'
                    setValue(squares)
                    setTurn(true)
                    break
                }
            }
        })
        
        }
    }
    const winner = calculateWinner(value)
            
    if (winner) {
        stat = winner;
        return <Win winner={stat} />
    } else {
        stat = "Next player: " + (xTurn ? "X" : "O");
    }
    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return false
      }
    return(
        <>
            
            <div className="row">
                <Square content={value[0]} click={() => setX(0)}/>
                <Square content={value[1]} click={() =>setX(1)}/>
                <Square content={value[2]} click={() =>setX(2)}/>
            </div>
            <div className="row">
                <Square content={value[3]} click={() =>setX(3)}/>
                <Square content={value[4]} click={() =>setX(4)}/>
                <Square content={value[5]} click={() =>setX(5)}/>
            </div>
            <div className="row">
                <Square content={value[6]} click={() =>setX(6)}/>
                <Square content={value[7]} click={() =>setX(7)}/>
                <Square content={value[8]} click={() =>setX(8)}/>
            </div>
            <h3>{stat}</h3>
        </>
    )
}

export default Board