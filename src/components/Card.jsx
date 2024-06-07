import Icon from "./Icon.jsx";


function Card( { player }){
    let icon = <Icon />
    if(player == 'X'){
        icon = <Icon name='cross' />
    }else if(player == '0'){
        icon = <Icon name='circle' />
    }
    return(
        <>
            <div className="p-8 flex justify-center items-center w-32 h-32 border-4 border-solid border-black bg-slate-300">
                {icon}
            </div>
        </>
    )
}

export default Card;