import { useState } from "react";
import Card from "./Card";
import isWinner from '../helpers/checkWinner.js';


function Grid({numOfCards}){
    const [board, setBoard] = useState(Array(numOfCards).fill(" "));
    const [turn, setTurn] = useState(true);

    const [winner, setWinner] = useState(null);

    function play(index){
        if(turn == true){
            board[index] = "O";
        }else{
            board[index] = "X";
        }

        const win = isWinner(board, turn ? "O" : "X");
        if(win){
            setWinner([...board]);
            setTurn(!turn);
        }

    }

    return(
        <>
        <div>
            {
                winner && (
                    <>
                        <h1>Winner is {winner}</h1>
                        <button>reset</button>
                    </>
                )
            }
            <h1 className="text-orange-500 text-4xl p-5">Current Turn : {(turn) ? 'O' : 'X'}</h1>
            <div className="flex flex-wrap justify-center items-center h-96 w-96 ">
                {board.map((ele, ind) => <Card key={ind} onPlay = {play} player={ele} index={ind}/>)}
            </div>
        </div>
        </>
    )


}


export default Grid;




