import React,{ useRef } from 'react'
import Draggable from "react-draggable";
import {BsArrowsMove} from "react-icons/bs";

const Task = () => {

  const ChipStyles = useRef({
    position: 'absolute',
    marginTop: Math.floor(Math.random()*500),
    marginLeft: Math.floor(Math.random()*1200),
    transform: 'translate(-50%, -50)',
    border:'1px solid blue',
    width:'300px',
    height:'200px',
});

  return (
    <Draggable>
      <div style={ChipStyles.current}>
        <h2>Tytuł notatki</h2>
        <p>Treść notatki</p>
        <BsArrowsMove style={{position: 'fixed' ,bottom: '5', right: '5',fontSize:'2.5vh'}}/>
      </div>
    </Draggable>
    
  )
}

export default Task