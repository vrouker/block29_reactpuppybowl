import {useState, useEffect} from 'react'


function AllPlayers ({allPlayers, setAllPlayers}){
    
    return(
    <>
        {
            allPlayers.map((player)=>
                <div key={player.id}>
                    <img src={player.imageUrl}/>
                    <h2>{player.name}</h2>
                    <p>{player.status}</p>
                    <button>See more details!</button>
                </div>
            )
        }

    </>
    )
}

export default AllPlayers