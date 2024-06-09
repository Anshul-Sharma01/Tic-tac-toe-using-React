import Icon from "./Icon.jsx";


function Card( { player, onPlay, index  }){
    let icon = <Icon />
    if(player == "X"){
        icon = <Icon name="cross" />
    }else if(player == "O"){
        icon = <Icon name="circle"/>
    }
    return(
        <>
            <div onClick={() => onPlay(index)}  className="p-8 flex justify-center items-center w-32 h-32 border-4 border-solid border-black bg-slate-300 rounded-xl" >
                {icon}
            </div>
        </>
    )
}

export default Card;