// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Recipe from './components/Recipe/Recipe'
import Item from './components/Item/Item'
import recipies from './recipies.json'

function App() {

  return (
    <>
    <Recipe recipe={recipies}/>
    </>
  )
}

export default App
