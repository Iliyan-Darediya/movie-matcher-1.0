import { Link } from "react-router-dom";
import {useContext} from "react";
import {Context} from '../Context'

function ExistingSession() {
    const {currentId} = useContext(Context)
    const {name} = useContext(Context)
    const {setCurrentId} = useContext(Context)
    const {setName} = useContext(Context)

    const handleId=event=>{
        setCurrentId((event.target.value).toString())
    }
    const handleName=event=>{
        setName((event.target.value).toString())
    }

    return (
        <div className="App">
        <header className="App-header">
            <h3>Hello from ExistingSession the session Id is {currentId}</h3>
            <input 
                type="text" 
                value={currentId} 
                name="id" 
                placeholder="EnterId" 
                onChange={handleId} 
            />
            <input 
                type="text" 
                value={name} 
                name="name" 
                placeholder="Enter Name" 
                onChange={handleName} 
            />
            {/* <button onClick={()=>handleAdd(name)}>handle Add</button> */}
            <button><Link to = "/chooser">Go to Chooser</Link></button>
        </header>
        </div>
    );
}
  
export default ExistingSession;