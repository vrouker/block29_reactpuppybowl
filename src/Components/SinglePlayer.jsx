import { useNavigate } from "react-router-dom";


function SinglePlayer ({singlePlayer, setSinglePlayer}){
    const navigate = useNavigate();

    async function handleDelete (id){
        try{
            const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-web-et-pt/players/${id}`,{ method: "DELETE"});
        } catch (error){
            console.log(error)
        }
        navigate("/")
    }


    return (
        <>
            <h1>Name: {singlePlayer.name}</h1>
            <img src={singlePlayer.imageUrl}/>
            <p>Breed: {singlePlayer.breed}</p>
            <p>Status: {singlePlayer.status}</p>
            <button onClick={()=>handleDelete(singlePlayer.id)}>Delete this puppy</button>
        </>
    )
}

export default SinglePlayer