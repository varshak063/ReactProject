import { Child } from "./Child"

export const Parent = () =>{
    return (
        <div>
          <Child name={" Varsha"} onClick={()=>console.log("clicked")}/>
        </div>
    )
}