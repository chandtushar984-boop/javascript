import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [menu, setMenu] = useState("Sports")
  const [abc, setAbc] = useState("Entertainment")

  return (
    <>
      <HomePage/>
      <Navbar list={menu} />
      <Navbar list={abc} />
      <Sample />
    </>
  )
}

export default App
