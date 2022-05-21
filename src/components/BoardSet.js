import React from 'react'
import MiniBoard from './MiniBoard'


const BoardSet = (props) => {

return(
    <div style={{border: "4px solid white", padding: "50px", marginLeft: "5%", marginTop: "5%", width: "800px", height: "500px", borderRadius: "12px", color: "lightgray", overflowY: "scroll"}}>
        {(props.boards).map((item) => (
          <MiniBoard {...item}/>
         ))}
    </div>
  );
}


export default BoardSet;