import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
        <h1 className='text-white text-4xl bg-slate-700 text-center p-5 m-4'>Tic-Tac-Toe</h1>
        <Card player="X"/>
    </>
  )
}

export default App
