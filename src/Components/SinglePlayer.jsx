

function SinglePlayer ({singlePlayer, setSinglePlayer}){


    return (
        <>
            <h1>Name: {singlePlayer.name}</h1>
            <img src={singlePlayer.imageUrl}/>
            <p>Breed: {singlePlayer.breed}</p>
            <p>Status: {singlePlayer.status}</p>
        </>
    )
}

export default SinglePlayer