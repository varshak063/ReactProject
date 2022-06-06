import React, { useState } from "react";
import "./GuestLists.scss";
export const GuestLists:React.FC=()=>{

    const [name, setName] = useState('')
    const [guests,setGuests] = useState<string[]>([])
    const addGuests = () =>{
       setName('');
       setGuests([...guests,name])
    }
    return(
        <div className="GuestList">
            <h3 className="GuestList_header">
                Guest Lists
            </h3>
              <br></br>
            <input value={name} placeholder="Enter Guest Name" onChange={(e)=>setName(e.target.value)}/>
            <button onClick={addGuests} className="GuestList_btns">Add New Guest</button>
            <ul>
                {guests.map((guest) => (
                    <li key={guest}>{guest}</li>
                ) )}
                
            </ul>
        </div>
    )
}