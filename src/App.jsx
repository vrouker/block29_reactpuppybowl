import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import AllPlayers from './Components/AllPlayers'
import NewPlayerForm from './Components/NewPlayerForm'
import SinglePlayer from './Components/SinglePlayer'

function App() {
  const [allPlayers, setAllPlayers] = useState([])
  const [singlePlayer, setSinglePlayer] = useState({})

  useEffect (()=> {
      const getAllPlayers = async ()=>{
        const res = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-pt/players")

        const results = await res.json();
        setAllPlayers(results.data.players)
        console.log(results.data.players)
      }
      getAllPlayers();
  },[])

  return (
    <>
      <div id="navBar">
        <Link to="./">Home</Link>

        <Link to="./newplayerform">Add a Puppy!</Link>
      </div>


      <div id="mainSection">
          <Routes>
            <Route path="/" element={<AllPlayers allPlayers={allPlayers} setAllPlayers={setAllPlayers} setSinglePlayer={setSinglePlayer}/>}/>

            <Route path="/player/id" element={<SinglePlayer singlePlayer={singlePlayer} setSinglePlayer={setSinglePlayer}/>}/>

            <Route path="/newplayerform" element={<NewPlayerForm/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App
