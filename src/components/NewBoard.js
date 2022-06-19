import React from "react";
import { Image } from "react-native";
import Button from "./Button";

const NewBoard = (props) => {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "50px",
        marginLeft: "20%",
        marginTop: "8%",
        height: "200px",
        borderRadius: "12px",
        color: "lightgray",
      }}
    >
        <h3>Nazwa tablicy:</h3>
        <input style={{marginTop: "2vh", width: "180px", height: "30px"}} id="boardName"/>
        <Button
            marginesTop={"2vh"}
            margines={"0 auto"}
            text={"Stwórz"}
            fun={() => {
                alert("Tworzenie nowej tablicy");
                props.changeBoardState("board");
            }}
            color={"white"}
        />
        
    </div>
  );
};

export default NewBoard;
