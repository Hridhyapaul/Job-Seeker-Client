import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
