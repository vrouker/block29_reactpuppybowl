import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


function AllPlayers ({allPlayers, setAllPlayers, setSinglePlayer}){

    const navigate = useNavigate();

    const handleClick = (player)=>{
        setSinglePlayer(player)
        navigate("/player/id")
    }
    
    return(
    <>
        {
            allPlayers.map((player)=>
                <div key={player.id}>
                    <img src={player.imageUrl} className="homeImage"/>
                    <h2>{player.name}</h2>
                    <p>{player.status}</p>
                    <button onClick={()=>handleClick(player)}>See more details!</button>
                </div>
            )
        }

    </>
    )
}

export default AllPlayers