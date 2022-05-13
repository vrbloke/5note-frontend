import React,{useState} from 'react'
import ReactDOM from "react-dom";
import Task from "./Task";


const Board = (props) => {
const [showTasks, setShowTasks] = React.useState(true)

  // const handleDoubleClick= ()=> {
  //   setShowBoard(false);
  // }
  
  return (

    <div style={{width:'100%'}}>
      { showTasks && <div>
      <Task onIcon={() => setShowTasks(false)} {...props}/>
      <Task onIcon={() => setShowTasks(false)} {...props}/> 
      <Task onIcon={() => setShowTasks(false)} {...props}/>
      </div> }
    </div> 

  )
}


export default Board