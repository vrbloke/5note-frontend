import React,{useState} from 'react'
import ReactDOM from "react-dom";
import Task from "./Task";
import BigTask from "./BigTask";

const Board = (props) => {
const [showTasks, setShowTasks] = React.useState(true)
const [id, setId] = React.useState(0)
  return (

    <div style={{width:'100%', height:'100%'}}>
      { showTasks && <div>
      <div>
        {(props.notatki).map((item) => (
          <Task key={item.id} onIcon={() => {setShowTasks(false); setId(Number(item.id))}} tytul={item.tytul} tresc={item.tresc} {...props}/>
         ))}</div>
         
      </div>  
      }
      { !showTasks && <div style={{height:'100%'}}>
      <BigTask onClose={() => setShowTasks(true)}
      form={props.format}
      tytul={props.notatki[id].tytul}
      tresc={props.notatki[id].tresc}
      />
      </div> }
    </div> 

  )
}


export default Board