import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import AllPlayers from './Components/AllPlayers'
import NavBar from './Components/NavBar'
import NewPlayerForm from './Components/NewPlayerForm'
import SinglePlayer from './Components/SinglePlayer'

function App() {
  

  return (
    <>
      <div id="navBar">
        <Link to="./">Home</Link>

        <Link to="./newplayerform">Add a Puppy!</Link>
      </div>


      <div id="mainSection">
          <Routes>
            <Route path="/" element={<AllPlayers/>}/>

            <Route path="/players/id" element={<SinglePlayer1/>}/>

            <Route path="/newplayerform" element={<NewPlayerForm/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App
