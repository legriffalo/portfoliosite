import { useState } from 'react'
import Header from './assets/components/header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title={"Nick G"}></Header>
    </>
  )
}

export default App
