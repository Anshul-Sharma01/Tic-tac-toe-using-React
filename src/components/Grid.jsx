import React, { useState } from 'react';
import Card from "./Card";
import isWinner from "../helpers/checkWinner.js";


function Grid({ numOfCards }) {
    const [board, setBoard] = useState(Array(numOfCards).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = turn ? 'O' : 'X';

        const win = isWinner(newBoard, turn ? 'O' : 'X');
        if (win) {
            setWinner(win);
        } else if (!newBoard.includes("")) {
            setWinner("Tie");
        }

        setBoard(newBoard);
        setTurn(!turn);
    }

    function resetGame() {
        setBoard(Array(numOfCards).fill(""));
        setTurn(true);
        setWinner(null);
    }

    return (
        <>
            <div className='grid grid-cols-custom-3 ml-20 '>
                {board.map((ele, ind) => <Card key={ind} player={ele} index={ind} onClick={() => play(ind)} />)}
            </div>
            {winner && (
                <div className="text-center mt-4">
                    <h2 className="text-2xl">{winner === "Tie" ? "It's a Tie!" : `${winner} Wins!`}</h2>
                    <button onClick={resetGame} className="mt-4 p-2 bg-blue-500 text-white rounded">Restart Game</button>
                </div>
            )}
        </>
    );
}

export default Grid;
