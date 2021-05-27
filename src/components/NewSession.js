import { Link } from "react-router-dom";
import {useContext, useState} from "react";
import {Context} from '../Context'

function NewSession() {
    const {currentId} = useContext(Context)
    //const {handleDelete} = useContext(Context)
    const {handleAdd} = useContext(Context)
    const {requestNewId} = useContext(Context)
    const [name,setName]=useState("")

    const handleName=event=>{
        setName(event.target.value)
    }

    return (
        <div className="App">
        <header className="App-header">
            <h3>Hello from NewSession the id is {currentId}</h3>
            <button onClick={()=>requestNewId(name)}>requestNewId</button>
            {/* <button onClick={()=>handleDelete('4')}>handleDelete</button> */}
            <input 
                type="text" 
                value={name} 
                name="name" 
                placeholder="User Name" 
                onChange={handleName} 
            />
            <button onClick={()=>handleAdd(name)}>handle Add</button>
            <button><Link to = "/chooser">Go to Chooser</Link></button>
        </header>
        </div>
    );
}
  
export default NewSession;