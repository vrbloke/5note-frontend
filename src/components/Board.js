import React from 'react'
import ReactDOM from "react-dom";
import Task from "./Task";


const Board = () => {
  return (
    <div style={{width:'100%'}} >
      <Task/>
      <Task/> 
      <Task/>   
    </div>
  )
}


export default Board