import { useState } from "react"


function NewPlayerForm() {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [imageUrl, setImage] = useState("")
    const [status, setStatus] = useState("")
    const [teamId, setTeamId] = useState(0)

    async function handleSubmit (event, playerObj){
        event.preventDefault();
        try{

            console.log(name)
                const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-PT/players", {
                    method:"POST",
                    headers: 
                        {'Content-type':'application/json'},
                    body: JSON.stringify({
                        name: name,
                        breed: breed,
                        imageUrl: imageUrl,
                        status: status,
                        teamId: teamId,
                    })
                })
                const result = await response.json();
                console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <h2>Add A New Puppy!</h2>
        {
            <form onSubmit={handleSubmit}>
                <label>
                    Puppy Name:
                    <input
                        className="inputBox"
                        name="name"
                        required
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                    />
                </label>
                <br/>
                <label>
                    Puppy Breed:
                    <input 
                        className="inputBox"
                        name = "breed"
                        required
                        onChange={(e)=>setBreed(e.target.value)}
                        value = {breed}
                    />
                </label>
                <br/>
                <label>
                    Puppy Image:
                    <input
                        className="inputBox"
                        name="imageUrl"
                        onChange={(e)=>setImage(e.target.value)}
                        value = {imageUrl}
                    />
                </label>
                <br/>
                <label>
                    Puppy Status:
                    <input 
                        className="inputBox"
                        name="status"
                        onChange={(e)=>setStatus(e.target.value)}
                        value = {status}
                    />
                </label>
                <br/>
                <label>
                    Team:
                    <input 
                        className="inputBox"
                        name="teamId"
                        onChange = {(e)=>setTeamId(e.target.value)}
                        value = {teamId}
                    />
                </label>
                <br/>
                <button>Sumbit!</button>
            </form>

        }
        
        </>
    )
}

export default NewPlayerForm