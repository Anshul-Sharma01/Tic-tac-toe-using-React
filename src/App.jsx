import React from "react";
import Grid from "./components/Grid.jsx";

function App() {
    return (
        <>
            <h1 className='text-white text-4xl bg-slate-700 text-center p-5 m-4'>Tic-Tac-Toe</h1>
            <Grid numOfCards={9} />
        </>
    );
}

export default App;
