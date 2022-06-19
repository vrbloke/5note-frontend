import React from "react";
import MiniBoard from "./MiniBoard";
import MiniBoardList from "./MiniBoardList";

const BoardSet = (props) => {
  
  const items = props.boards.filter((item)=>{
    if(props.search === ""){ 
      return item;
    }
    else{
      return item.nazwa.toLowerCase().includes(props.search);
    }
  })
  
  return (
    <div
      style={{
        border: "4px solid white",
        padding: "50px",
        marginLeft: "5%",
        marginTop: "5%",
        width: "800px",
        height: "500px",
        borderRadius: "12px",
        color: "lightgray",
        overflowY: "scroll",
      }}
    >
      {props.format === "tablica" &&
        items.map((item) => (
          <MiniBoard
            fun={() => {
              props.changeBoard(item.id);
              props.changeState("board");
            }}
            {...item}
          />
        ))
      }
      {props.format === "lista" &&
        items.map((item) => (
          <MiniBoardList
            fun={() => {
              props.changeBoard(item.id);
              props.changeState("board");
            }}
            {...item}
          />
        ))}
    </div>
  );
};

export default BoardSet;
