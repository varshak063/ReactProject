export const EventComponent:React.FC= () => {

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
     console.log(e)
    }
    const onDragStart =(event:React.DragEvent<HTMLDivElement>)=>{
        console.log("It is draggable"+event)
    }
  return (
      <div>
          <h1>EventComponent</h1>
          <input onChange={onChange}/>
          <div draggable onDragStart={onDragStart}>
             <button> Drag Me</button>
          </div>
      </div>
  )
}