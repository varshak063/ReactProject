import React from "react";

interface ChildProps{
    name:string;
    onClick: () => void;
}
export const Child = ({name,onClick}:ChildProps) =>{
    return(
        <div>
            <h1>
                Hii This is Child Component
                {name}
                <br/>

                <button onClick={onClick}>Click Here!</button>
            </h1>
        </div>
    )
}

export const SecondChild :React.FC<ChildProps>=({name,onClick}) =>{
    return (
        <div>
            <h1>The SecondCHild Using props {name}</h1>
            <button onClick={onClick}>Click Here!</button>


        </div>
    )
}