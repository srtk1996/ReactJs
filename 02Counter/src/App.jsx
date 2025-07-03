import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(1);

  const addValue = () =>{
    counter<10? setCounter((prev)=>prev+1) : setCounter((prev)=>prev)
    console.log(counter)

  }

  const removeValue = () =>{
        console.log(counter)

    counter>1? setCounter((counter)=>counter-1) : setCounter(counter)
    console.log(counter)
    
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
