import { useState } from "react";
import Card from "./Card";
import isWinner from "../helpers/checkWinner";


function Grid({ numOfCards }){
    const [board, setBoard] = useState(Array(numOfCards).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    function play(index) {
        const newBoard = [...board]; // Create a new array with the same values as the original
        if (turn) {
          newBoard[index] = 'O';
        } else {
          newBoard[index] = 'X';
        }
      
        const win = isWinner(newBoard, turn? "O" : "X");
        if (win) {
          setWinner(win);
        }
        setBoard(newBoard); // Update the state with the new array
        setTurn(!turn);
      }

    return(
        <>
            <div>
                {
                    winner && (
                        <>
                            <h1 className="text-3xl text-orange-600 font-mono">Winner is {winner}</h1>
                            <button className="text-black border-2 rounded-lg bg-red-400 px-4 py-3">Reset Game</button>
                        </>
                    )
                }
                    <h1 className="text-3xl text-orange-600 font-mono">
                        Current Turn : {turn ? "O" : "X"}
                    </h1>
                    <div className="h-96 w-96 flex flex-wrap justify-between items-center m-4">
                        
                        {board.map((ele, ind) => <Card key={ind} onPlay = {play} player={ele} index = {ind} />)}
                    </div>
            </div>
        </>
    )
}

export default Grid;