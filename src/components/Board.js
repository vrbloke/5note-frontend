import React,{useState} from 'react'
import ReactDOM from "react-dom";
import Task from "./Task";
import BigTask from "./BigTask";

const Board = (props) => {
const [showTasks, setShowTasks] = React.useState(false)

  return (

    <div style={{width:'100%', height:'100%'}}>
      { showTasks && <div>
      <Task onIcon={() => setShowTasks(false)} {...props}/>
      <Task onIcon={() => setShowTasks(false)} {...props}/> 
      <Task onIcon={() => setShowTasks(false)} {...props}/>
      </div> }

      { !showTasks && <div style={{height:'100%'}}>
      <BigTask/>
      </div> }
    </div> 

  )
}


export default Board