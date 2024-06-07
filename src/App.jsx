import { useState } from 'react'
import Card from './components/Card'
import Grid from './components/Grid'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
        <h1 className='text-white text-4xl bg-slate-700 text-center p-5 m-4'>Tic-Tac-Toe</h1>
        <Grid numOfCards={9}/>
    </>
  )
}

export default App
