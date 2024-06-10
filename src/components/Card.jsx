import React from "react";
import Icon from "./Icon.jsx";

function Card({ player, index, onClick }) {
    let i = <Icon />;
    if (player === 'X') {
        i = <Icon name='cross' />;
    } else if (player === 'O') {
        i = <Icon name='circle' />;
    }

    return (
        <div onClick={onClick} className=" flex justify-center items-center w-32 h-32 border-4 border-solid border-black bg-slate-300 rounded-xl cursor-pointer">
            {i}
        </div>
    );
}

export default Card;
