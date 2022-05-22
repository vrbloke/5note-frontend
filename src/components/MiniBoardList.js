import React from 'react'
import MiniTask from "./MiniTask";


const MiniBoardList = (props) => {

    const firstThreeTasks = props.notatki.slice(0,3);

    return (
    <div onClick={props.fun} style={{border: 'solid white 1px', borderRadius: '5px', width:'700px', height:'160px', float: 'left', marginLeft: '25px', marginTop: '15px'}}>
        <h2 style={{textAlign: 'center'}}>{props.nazwa}</h2>
        <div>
        {(firstThreeTasks).map((task) => (
            <p style={{textAlign: 'left', marginLeft: '10px'}}><strong>{task.tytul}</strong>  {task.tresc}</p>
            ))}</div>    
    </div> 
)
}


export default MiniBoardList