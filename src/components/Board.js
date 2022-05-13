import React,{useState} from 'react'
import ReactDOM from "react-dom";
import Task from "./Task";


const Board = (props) => {
  const [showBoard, setShowBoard] = React.useState(true)

  // const handleDoubleClick= ()=> {
  //   setShowBoard(false);
  // }
  
  return (

    <div style={{width:'100%'}} handleClick={()=>setShowBoard(!showBoard)}>
      {
      showBoard ?
      (<><Task {...props}/>
      <Task {...props}/> 
      <Task {...props}/></>  
      )
      :null
      }
    </div>

  )
}


export default Board