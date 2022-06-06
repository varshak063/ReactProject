  import { useState } from "react";

const users = [
  {
    name:'john',
    age:20
  },
  {
    name:'Alexa',
    age:20
  },
  {
    name:'Mihella',
    age:20
  }
];
export const UserSearch:React.FC = () =>{
  const [name, setName] = useState('')
  const [user, setUser] = useState<{name:string,age:number}|undefined>()
  const onClickUser=()=>{
    const foundUser = users.find((user)=>{
      return user.name === name
    })
    setUser(foundUser)
  }
  return (
      <div>
          <h2>User Search</h2>
          <input value={name} onChange={e=>setName(e.target.value)}/>
           <button onClick={onClickUser}>Find User</button>
           <h4>The User Names</h4>
           <p>{user && user.name}</p>
           <p>{user && user.age}</p>
      </div>
  )
}