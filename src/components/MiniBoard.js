import React from 'react'
import MiniTask from "./MiniTask";


const MiniBoard = (item) => {

  return (

    <div style={{border: 'solid white 1px', borderRadius: '5px', width:'350px', height:'300px', float: 'left', marginLeft: '25px', marginTop: '25px'}}>
      <h2 style={{textAlign: 'center'}}>{item.nazwa}</h2>
      <div>
        {(item.notatki).map((task) => (
          <MiniTask key={task.id} tytul={task.tytul} tresc={task.tresc}/>
         ))}</div>    
    </div>  
  )
}


export default MiniBoard