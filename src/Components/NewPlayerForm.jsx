import { useState } from "react"


function NewPlayerForm() {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [imageUrl, setImage] = useState("")
    const [status, setStatus] = useState("")
    return (
        <>
        <h2>Add A New Puppy!</h2>
        {
            <form>
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
                        name="image"
                        oncChange={(e)=>setImage(e.target.value)}
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
                    <input/>
                </label>
                <br/>
                <button>Sumbit!</button>
            </form>

        }
        
        </>
    )
}

export default NewPlayerForm