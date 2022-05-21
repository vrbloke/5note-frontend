import React,{ useRef } from 'react'
import Draggable from "react-draggable";
import {BsArrowsMove} from "react-icons/bs";

const MiniTask = (props) => {

  const ChipStyles = useRef({
    backgroundColor:'#FFFFA7',
    marginTop: "2px",
    marginLeft: Math.floor(Math.random()*250),
    transform: 'translate(-50%, -50)',
    border:'1px solid black',
    borderRadius:'3px',
    width:'110px',
    height:'65px',
});

  return (
    <div>
      <button style={ChipStyles.current}>
      <p style={{color: props.textColor, fontSize: "2 px"}}>{props.tytul}</p>
        <p style={{color: props.textColor, fontSize: "1 px"}}>{props.tresc}</p>
      </button>
    </div>  
  )
}

export default MiniTask